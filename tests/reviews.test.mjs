import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Run the actual TS/TSX modules without a new test dependency or emitted files.
function load(path, fetchMock) {
  const url = new URL(path, import.meta.url)
  const exports = {}
  const source = ts.transpileModule(readFileSync(url, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText
  vm.runInNewContext(source, {
    exports, require: createRequire(url), fetch: fetchMock,
    process: { env: {} }, console: { error() {} },
  }, { filename: url.pathname })
  return exports
}

const review = (id, comment = '感想', rating = 3) => ({
  id, comment, rating, reviewer_name: '匿名のユーザー', created_at: '2026-10-15',
})
const fallback = { reviews: [], average_rating: 5, total_count: 0 }
const plain = value => JSON.parse(JSON.stringify(value))

test('requests text preference, retains limit and 600-second cache', async () => {
  const { fetchReviews } = load('../lib/reviews-api.ts', async (url, options) => {
    const parsed = new URL(url)
    assert.equal(parsed.searchParams.get('prefer_text'), 'true')
    assert.equal(parsed.searchParams.get('limit'), '3')
    assert.equal(options.next.revalidate, 600)
    return { ok: true, json: async () => ({ reviews: [], average_rating: 0, total_count: 0 }) }
  })
  await fetchReviews()
})

// Ordering/visibility are reserve API responsibilities. These consumer tests
// ensure rec neither reorders by rating nor drops its rating-only fillers.
for (const [name, reviews] of [
  ['three text reviews', [review('new', '新しい', 1), review('middle', '感想', 5), review('old', '感想', 2)]],
  ['two text reviews and one filler', [review('a'), review('b'), review('c', '')]],
  ['zero text reviews', [review('a', ''), review('b', ' '), review('c', '')]],
  ['zero reviews', []],
  ['old API ignoring the new parameter', [review('latest', ''), review('older')]],
]) {
  test(`preserves API order and all-public statistics: ${name}`, async () => {
    const payload = { reviews, average_rating: reviews.length ? 3.8 : 0, total_count: reviews.length ? 113 : 0 }
    const { fetchReviews } = load('../lib/reviews-api.ts', async () => ({ ok: true, json: async () => payload }))
    assert.deepEqual(plain(await fetchReviews()), payload)
  })
}

for (const [name, fetchMock] of [
  ['HTTP failure', async () => ({ ok: false, status: 500 })],
  ['network failure', async () => { throw new Error('offline') }],
  ['invalid JSON', async () => ({ ok: true, json: async () => { throw new Error('JSON') } })],
  ['wrong response shape', async () => ({ ok: true, json: async () => ({ reviews: null }) })],
]) {
  test(`retains existing fallback on ${name}`, async () => {
    const { fetchReviews } = load('../lib/reviews-api.ts', fetchMock)
    assert.deepEqual(plain(await fetchReviews()), fallback)
  })
}

const { ReviewCard } = load('../components/review-card.tsx')
for (const [name, comment] of [['empty', ''], ['spaces', ' \n\t　 '], ['null defensive case', null]]) {
  test(`shows a muted rating-only label for ${name}`, () => {
    const html = renderToStaticMarkup(React.createElement(ReviewCard, { review: review('a', comment) }))
    assert.match(html, /星評価のみ/)
    assert.match(html, /text-usi-cream-muted/)
    assert.match(html, /匿名のユーザー/)
    assert.match(html, /dateTime="2026-10-15"/)
  })
}
for (const rating of [1, 2, 3, 4, 5]) {
  test(`keeps rating ${rating} and comment without score selection`, () => {
    const html = renderToStaticMarkup(React.createElement(ReviewCard, { review: review('a', '感想', rating) }))
    assert.match(html, new RegExp(`aria-label="${rating}点"`))
    assert.match(html, /感想/)
    assert.doesNotMatch(html, /星評価のみ/)
  })
}
test('keeps long text escaped and enables wrapping without changing the card shell', () => {
  const comment = '<script>test</script>' + '長文'.repeat(1000)
  const html = renderToStaticMarkup(React.createElement(ReviewCard, { review: review('a', comment) }))
  assert.match(html, /&lt;script&gt;/)
  assert.doesNotMatch(html, /<script>/)
  assert.match(html, /overflow-wrap:anywhere/)
  assert.match(html, /bg-usi-ink\/85 px-7 py-7/)
  assert.match(html, /長文/)
})

test('retains the mobile single-column / desktop three-column layout and three-review request', () => {
  const section = readFileSync(new URL('../components/reviews-section.tsx', import.meta.url), 'utf8')
  assert.match(section, /fetchReviews\(3\)/)
  assert.match(section, /grid-cols-1[^"\n]*md:grid-cols-3/)
  assert.match(section, /reviews.length > 0/)
})
