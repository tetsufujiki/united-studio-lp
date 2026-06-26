'use client';

import { MapPin, Train, Bus, ParkingCircle, Clock, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function GuidePage() {
  return (
    <main>

      {/* =========================================================
          HERO SECTION — dark, cinematic, matches homepage brand
         ========================================================= */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/usi_sign.jpg"
            alt="USI新河岸音楽工務所 ブランドサイン — 新河岸音楽工務所"
            fill
            className="object-cover object-center"
            style={{ filter: 'brightness(0.55) contrast(1.08) saturate(0.85)' }}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={80}
          />
          {/* Layered overlay: strong base + bottom-heavy gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.30)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 100%)' }}
          />
        </div>

        {/* Ambient warm glow */}
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />



        {/* Hero text — vertically centered in remaining space */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-base font-medium uppercase tracking-[0.2em] text-primary/90">
              USI新河岸音楽工務所
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl text-balance">
              <span className="whitespace-nowrap">レコーディングスタジオ</span>
              <br />
              <span className="text-primary">利用ガイド</span>
            </h1>
            <p className="mt-16 text-lg text-white/75 md:text-xl text-balance max-w-xl mx-auto">
              初めての方も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHT CONTENT AREA — all guide sections
         ========================================================= */}
      <div className="bg-white">

        {/* Section 1: Introduction */}
        <section className="bg-[#FFFDF8] py-20 md:py-28">
          <div className="mx-auto max-w-[800px] px-6">
            <div
              className="relative overflow-hidden rounded-3xl shadow-[0_8px_40px_-12px_rgba(15,23,42,0.30)] md:px-14 md:py-16 px-8 py-12"
            >
              {/* Background image — same source as hero, cropped to showcase red card */}
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/assets/usi_sign.jpg"
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover"
                  style={{ objectPosition: '60% 40%', filter: 'brightness(0.60) contrast(1.10) saturate(0.80)' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  quality={75}
                />
                {/* Base dark overlay */}
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.28)' }} />
                {/* Subtle warm amber tint — adds colour temperature without overpowering */}
                <div className="absolute inset-0" style={{ background: 'rgba(180,90,20,0.10)' }} />
                {/* Cinematic vignette — edges darker, centre lighter */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.40) 100%)' }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p
                  className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary"
                  style={{ textShadow: '0 1px 6px rgba(0,0,0,0.55)' }}
                >
                  Studio Guide
                </p>
                <h2 className="mt-4 text-center text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl text-balance">
                  レコーディングスタジオについて
                </h2>
                <div className="mt-8 flex justify-center px-4 md:px-0">
                  <div className="w-full max-w-md space-y-5">
                    <p className="text-left text-lg leading-[1.95] font-medium text-white/95 md:text-xl">
                      USI新河岸音楽工務所は東京都板橋区の
                      <br />
                      レコーディングスタジオです。
                    </p>
                    <p className="text-left text-lg leading-[1.95] font-normal text-white/75 md:text-xl">
                      ボーカル録音・ナレーション録音・
                      <br />
                      弾き語り録音・音源制作などに対応しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Studio Summary */}
        <section className="bg-[#FFFBF7] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Studio Info
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl text-balance">
                ひと目でわかるスタジオ概要
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { label: '料金', value: '2時間 14,000円' },
                { label: 'サービス', value: 'ミックス・マスタリング込み' },
                { label: '受取', value: '当日データ持ち帰り' },
                { label: '対象', value: '初心者歓迎' },
                { label: 'キャンセル' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col rounded-2xl bg-white px-6 py-7 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.10)] transition-shadow hover:shadow-[0_8px_32px_-8px_rgba(15,23,42,0.16)]"
                >
                  <p className="text-base font-bold uppercase tracking-wide text-primary">{item.label}</p>
                  {item.label === 'キャンセル' ? (
                    <>
                      {/* Mobile: single line */}
                      <p className="mt-3 text-lg font-bold leading-snug text-slate-900 sm:hidden">
                        無料　　※条件��り
                      </p>
                      {/* Desktop/Tablet: two lines */}
                      <p className="mt-3 hidden text-lg font-bold leading-snug text-slate-900 sm:block">
                        無料
                        <br />
                        <span className="whitespace-nowrap">※条件あり</span>
                      </p>
                    </>
                  ) : (
                    <p className="mt-3 text-lg font-bold leading-snug text-slate-900">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ご利用の流れ */}
        <section className="bg-[#FFF9F4] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">ご利用の流れ</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'ご予約', description: '予約専用サイトから24時間いつでも受け付けております。' },
              { step: 2, title: 'ご来店', description: 'ご予約時間までにスタジオへお越しください。' },
              { step: 3, title: 'レコーディング', description: 'スタッフが進行をサポートいたします。' },
              { step: 4, title: '完成データお渡し', description: 'ミックス・マスタリング後、完成した音源をその場でお渡しします。' },
            ].map((item, index, arr) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm shadow-primary/30">
                    {item.step}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-slate-200" style={{ minHeight: '2rem' }} />
                  )}
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm flex-1 mb-2">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* 初めての方も安心してご利用いただけます */}
        <section className="bg-[#FFFDF8] py-16 md:py-20">
          <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
            <div className="rounded-2xl px-8 py-12 shadow-sm md:px-12 md:py-14 border border-slate-200/60" style={{ background: 'linear-gradient(135deg, rgba(230,240,250,0.45) 0%, rgba(235,245,255,0.35) 100%)' }}>
              <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                初めての方も安心してご利用いただけます
              </h3>
              <div className="mt-8 space-y-3 text-slate-700">
                <p className="text-sm md:text-base">「2時間で何曲録れる？」</p>
                <p className="text-sm md:text-base">「録音データはもらえる？」</p>
                <p className="text-sm md:text-base">「初めてでも大丈夫？」</p>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-slate-600 md:text-base">
                など、ご利用前によくいただく質問をまとめています。
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-10 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-6px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_16px_38px_-8px_rgba(37,99,235,0.5)] md:px-12 md:py-4.5 md:text-lg"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  よくある質問を見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 料金 */}
        <section className="bg-slate-100 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">料金</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
              <div className="text-center">
                <p className="text-lg font-bold uppercase tracking-widest text-primary md:text-xl">一律料金</p>
                <div className="mt-4 inline-block">
                  <p className="text-base font-semibold text-slate-600">2時間</p>
                  <p className="text-5xl font-black text-primary md:text-6xl">14,000円</p>
                  <p className="mt-1 text-sm text-slate-500">（税込）</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <p className="mb-5 text-center text-sm font-semibold text-slate-700">料金には基本的に以下が含まれます。</p>
                <ul className="mx-auto grid max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
                  {['レコーディング', 'ピッチ修正', 'リズム修正', 'ミックス', 'マスタリング', '撮影'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-sm text-slate-700">
                  そのほかのご要望にも可能な限り対応しておりますので、<br className="hidden sm:block" />
                  お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* お支払い方法 */}
        <section className="bg-slate-100 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">お支払い方法</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: '現金', description: 'スタジオで\nお支払いください', mobile: 'スタジオでお支払いください' },
                { title: 'クレジットカード', description: '主要なカードに対応' },
                { title: '各種電子決済', description: 'PayPay・Rakuten Payなど対応' },
              ].map((method) => (
                <div key={method.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-slate-900">{method.title}</p>
                  {method.title === '現金' ? (
                    <>
                      <p className="mt-1 hidden text-sm text-slate-500 sm:block whitespace-pre-line">{method.description}</p>
                      <p className="mt-1 text-sm text-slate-500 sm:hidden">{method.mobile}</p>
                    </>
                  ) : (
                    <p className="mt-1 text-sm text-slate-500">{method.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 営業時間 */}
        <section className="bg-[#FFFBF7] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">営業時間</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12 text-center">
              <Clock className="mx-auto mb-5 h-10 w-10 text-primary/70" />
              <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">13:00〜22:00</p>
              <div className="mt-4 flex justify-center gap-4 text-sm text-slate-500">
                <span>完全予約制</span>
                <span>・</span>
                <span>不定休</span>
              </div>
            </div>
          </div>
        </section>

        {/* 予約変更・キャンセル */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">予約変更・キャンセル</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="text-sm font-semibold text-amber-800">
                  予約日の2日前まで予約サイトから変更・キャンセルが可能です。
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-l-slate-400 border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">キャンセル料金はいただいておりません。</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-relaxed text-slate-900">
                  ただし当日キャンセルまたは無断キャンセルが累計2回あった場合は、予約枠確保の都合上、以後のご利用をお断りさせていただきます。あらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className="bg-[#FFFDF8] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">アクセス</h2>

            {/* Address */}
            <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">住所</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    〒174-0042<br />
                    東京都板橋区東坂下１−１９−２４<br />
                    志幸４２シャンソン１１０号室
                  </p>
                  <p className="mt-2 text-xs text-slate-500">（マンション1F）</p>
                </div>
              </div>
            </div>

            {/* Nearest Stations */}
            <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Train className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">最寄駅</p>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">都営三田線</p>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          志村坂上駅 A3出口 徒歩12分
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          志村三丁目駅 徒歩12分
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">JR埼京線</p>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          浮間舟渡駅 徒歩17分
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bus */}
            <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bus className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">バス</p>
                  <div className="mt-3 space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">国際興業バス</p>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          志村坂下バス停 徒歩4分
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ParkingCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">駐車場</p>
                  <p className="mt-1 text-sm text-slate-600">マンション敷地内コインパーキングあり</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103574.31483333957!2d139.62875284492281!3d35.782810339093544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a2b77fc8d1%3A0xb4b171924c684959!2z44Om44OK44Kk44OG44OD44OJ44K544K_44K444Kq44ix!5e0!3m2!1sja!2sus!4v1782107196208!5m2!1sja!2sus"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="USI新河岸音楽工務所"
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-600">USI新河岸音楽工務所</p>
            <div className="mt-2 flex justify-center">
              <a
                href="https://maps.app.goo.gl/JrgphNgEJBYbBy346"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Googleマップで開く
              </a>
            </div>
          </div>
        </section>

      </div>{/* end light area */}

      {/* =========================================================
          CLOSING CTA — deep black, premium conversion section
         ========================================================= */}
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        {/* Subtle warm glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance leading-tight">
            レコーディング予約はこちら
          </h2>

          {/* Description */}
          <p className="mt-6 md:mt-8 text-base md:text-lg text-white/75 text-balance max-w-2xl mx-auto leading-relaxed">
            ご予約は24時間いつでも受け付けています。<br className="hidden md:inline" />
            ご不明な点がある場合は、よくある質問をご確認ください。
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8 md:gap-10">
            {/* Primary CTA Button */}
            <Button
              size="lg"
              className="h-15 md:h-16 w-56 md:w-64 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300"
              asChild
            >
              <a
                href="https://unitedstudio.stores.jp/reserve/usi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                予約する
              </a>
            </Button>

            {/* Secondary CTA Button */}
            <Link
              href="/faq"
              className="h-15 md:h-16 w-56 md:w-64 inline-flex items-center justify-center rounded-2xl border-2 border-blue-400 bg-transparent text-blue-400 font-semibold text-base md:text-lg transition-all duration-300 hover:bg-blue-400/12 hover:border-blue-300 hover:text-blue-300"
            >
              ？ よくある質問を見る
            </Link>
          </div>

          {/* Welcome Message */}
          <p className="mt-8 md:mt-12 text-base text-white/80 font-light flex items-center justify-center gap-2">
            <span>✨</span>
            <span>初めての方のご利用も歓迎しております</span>
          </p>
        </div>
      </section>

      {/* =========================================================
          FOOTER NOTICE BAR — separate section with different background
         ========================================================= */}
      <section className="relative bg-slate-950 border-t border-slate-800/50 py-4 md:py-5">
        <div className="relative mx-auto max-w-6xl px-6 text-center md:px-12">
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            ※掲載内容は予告なく変更される場合があります。
          </p>
        </div>
      </section>

    </main>
  );
}
