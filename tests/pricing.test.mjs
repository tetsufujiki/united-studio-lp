import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const url = new URL('../components/cta-section.tsx', import.meta.url)
function load(sourceUrl) {
  const exports = {}
  const require = createRequire(sourceUrl)
  vm.runInNewContext(ts.transpileModule(readFileSync(sourceUrl, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText, {
    exports,
    require: id => id === './legacy-pricing-section'
      ? load(new URL('../components/legacy-pricing-section.tsx', import.meta.url))
      : require(id),
  })
  return exports
}
const exports = load(url)
const renderAt = time => renderToStaticMarkup(React.createElement(exports.CtaSection, { now: new Date(time) }))
const html = renderAt('2026-10-31T02:05:00+09:00')
const text = html.replace(/<[^>]*>/g, '')

test('keeps legacy pricing up to one millisecond before the JST boundary', () => {
  const before = renderAt('2026-10-31T02:04:59.999+09:00')
  assert.match(before, /ALL-INCLUSIVE/)
  assert.match(before, /2026年10月31日/)
  assert.doesNotMatch(before, /録音も、仕上げも、撮影も。/)
})

test('switches at exactly 02:05 JST, including equivalent UTC and later dates', () => {
  for (const time of ['2026-10-30T17:05:00Z', '2026-10-31T02:05:00+09:00', '2026-11-01T00:00:00+09:00']) {
    const rendered = renderAt(time)
    assert.match(rendered, /録音も、仕上げも、撮影も。/)
    assert.doesNotMatch(rendered, /ALL-INCLUSIVE|2026年10月31日/)
    assert.equal((rendered.match(/id="all-inclusive-heading"/g) || []).length, 1)
  }
})

test('uses request-time rendering while retaining the explicit review cache', () => {
  const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
  assert.match(page, /await connection\(\)/)
  const reviews = readFileSync(new URL('../lib/reviews-api.ts', import.meta.url), 'utf8')
  assert.match(reviews, /revalidate: 600/)
})

test('shows engineer and all included services next to the session price', () => {
  assert.match(text, /録音も、仕上げも、撮影も。この料金に。/)
  for (const label of ['エンジニア付き', 'レコーディング', '編集', 'ピッチ・リズム修正', 'ミックス', 'マスタリング', '撮影']) {
    assert(text.includes(label))
  }
  assert.match(text, /ご予約時間内/)
  assert.match(text, /2時間の予約/)
  assert.doesNotMatch(text, /2時間のレコーディング/)
  assert(!text.includes('追加料金なし'))
})

test('keeps the four two-hour rates and start-time conditions explicit', () => {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map(m => m[1].replace(/<[^>]*>/g, ''))
  assert.deepEqual(rows, ['開始時刻平日土日祝', '17時前¥14,000¥18,000', '17時以降¥16,000¥20,000'])
  assert.match(text, /平日・17時前開始の場合/)
})

test('keeps a prominent normal booking link and omits superseded labels and transition notes', () => {
  assert.match(html, /<a href="https:\/\/reserve.united-studio.com\/"/)
  assert.match(text, /詳しい料金・空き状況を見る/)
  assert.match(text, /3時間以上のコース/)
  for (const old of ['ALL-INCLUSIVE', 'Pro Standard', 'Duration', '2026年11月1日', '2026年10月31日']) {
    assert(!text.includes(old))
  }
  assert.equal((html.match(/id="all-inclusive-heading"/g) || []).length, 1)
})
