import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const url = new URL('../components/ranking-section.tsx', import.meta.url)
const exports = {}
vm.runInNewContext(ts.transpileModule(readFileSync(url, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText, { exports, require: createRequire(url) })
const html = renderToStaticMarkup(React.createElement(exports.RankingSection)).replaceAll('&gt;', '>')
const rows = [...html.matchAll(/<(a|article)\b[^>]*class="group\/row[\s\S]*?<\/\1>/g)].map(x => x[0])

test('04 has the same orange hover/focus/active number states as 02', () => {
  assert.equal(rows.length, 4)
  for (const index of [1, 3]) {
    for (const state of ['group-hover/row', 'group-focus-visible/row', 'group-active/row']) {
      assert(rows[index].includes(`${state}:text-usi-accent`))
    }
  }
  assert(rows[3].includes('https://studio.united-studio.com/vocal-recording'))
  assert(rows[3].includes('ボーカルのみレコーディングを見る'))
})

test('01 yields its default orange when another linked row is interacted with', () => {
  for (const state of ['hover', 'focus-visible', 'active']) {
    assert(rows[0].includes(`group-has-[>a:not(:first-child):${state}]/ranking:text-usi-text/25`))
  }
})

test('03 stays unlinked and has no orange interaction state', () => {
  assert(rows[2].startsWith('<article'))
  assert(!rows[2].includes('group-hover/row:text-usi-accent'))
})
