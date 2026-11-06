import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const url = new URL('../components/cta-section.tsx', import.meta.url)
const exports = {}
vm.runInNewContext(ts.transpileModule(readFileSync(url, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText, { exports, require: createRequire(url) })

const html = renderToStaticMarkup(React.createElement(exports.CtaSection))
const text = html.replace(/<[^>]*>/g, '')

test('fixes the current booking and FAQ tones without changing the booking link', () => {
  const booking = renderToStaticMarkup(React.createElement(exports.OnlineBookingSection, { newTone: true }))
  assert.match(booking, /class="bg-white py-16/)
  assert.match(booking, /href="https:\/\/reserve.united-studio.com\/"/)
  const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
  assert.match(page, /<CtaSection \/>/)
  assert.match(page, /<OnlineBookingSection newTone \/>/)
  assert.match(page, /<FAQSection newTone \/>/)
})

test('uses 600-second revalidation without a request-time pricing switch', () => {
  const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
  assert.doesNotMatch(page, /connection\(|new Date\(|isNewPricingVisible/)
  assert.match(page, /export const revalidate = 600/)
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
