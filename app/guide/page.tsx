'use client';

import { MapPin, Train, Bus, ParkingCircle, ExternalLink, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FooterSection } from "@/components/footer-section";

export default function GuidePage() {
  return (
    <main className="bg-usi-sand">

      {/* =========================================================
          HERO — deep ink, editorial, USDL 4.0 family
         ========================================================= */}
      <section className="relative flex min-h-[70vh] flex-col overflow-hidden bg-usi-ink md:min-h-[78vh]">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/usi_sign.jpg"
            alt="USI新河岸音楽工務所 ブランドサイン — 新河岸音楽工務所"
            fill
            className="object-cover object-center"
            style={{ filter: 'brightness(0.5) contrast(1.05) saturate(0.85)' }}
            priority
            sizes="100vw"
            quality={80}
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to bottom, rgba(20,22,28,0.55) 0%, rgba(20,22,28,0.35) 45%, rgba(20,22,28,0.85) 100%)',
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-24 lg:px-20">
          <div className="mx-auto w-full max-w-6xl lg:px-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream-muted">
                Studio Guide
              </span>
              <span className="h-px w-16 bg-usi-hairline-dark" />
            </div>
            <p className="mt-6 text-sm font-medium tracking-[0.15em] text-usi-accent md:text-base">
              USI新河岸音楽工務所
            </p>
            <h1 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight text-usi-cream text-balance md:text-6xl lg:text-7xl">
              レコーディングスタジオ
              <br />
              <span className="text-usi-accent">利用ガイド</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-usi-cream-muted md:text-lg">
              初めての方も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          01 — スタジオについて
         ========================================================= */}
      <section className="bg-usi-sand py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              01
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              About
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-usi-text text-balance md:text-3xl" style={{ wordBreak: 'keep-all' }}>
              レコーディング
              <wbr />
              スタジオについて
            </h2>
            <div className="space-y-5">
              <p className="text-base font-medium leading-relaxed text-usi-text md:text-lg">
                USI新河岸音楽工務所は東京都板橋区のレコーディングスタジオです。
              </p>
              <p className="text-base leading-relaxed text-usi-text-muted md:text-lg">
                ボーカル録音・ナレーション録音・弾き語り録音・音源制作などに対応しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — ひと目でわかるスタジオ概要（罫線情報表）
         ========================================================= */}
      <section className="bg-usi-sand-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              02
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Studio Info
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
            ひと目でわかるスタジオ概要
          </h2>

          <div className="mt-10 border-t border-usi-hairline">
            {[
              { label: '料金', value: '2時間　平日 14,000円／土日祝日 18,000円' },
              { label: 'サービス', value: 'ミックス・マスタリング込み' },
              { label: '受取', value: '当日データ持ち帰り' },
              { label: '対象', value: '初心者歓迎' },
              { label: 'キャンセル', value: '無料 ※条件あり' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-b border-usi-hairline py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:py-6"
              >
                <span className="text-sm font-semibold tracking-wide text-usi-text-muted sm:w-32 sm:flex-shrink-0">
                  {item.label}
                </span>
                <span className="flex-1 text-base font-bold leading-relaxed text-usi-text sm:text-right md:text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — ご利用の流れ（番号付き編集レイアウト）
         ========================================================= */}
      <section className="bg-usi-sand py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              03
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Flow
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
            ご利用の流れ
          </h2>

          <div className="mt-10 border-t border-usi-hairline">
            {[
              { step: '01', title: 'ご予約', description: '予約専用サイトから24時間いつでも受け付けております。' },
              { step: '02', title: 'ご来店', description: 'ご予約時間までにスタジオへお越しください。' },
              { step: '03', title: 'レコーディング', description: 'スタッフが進行をサポートいたします。' },
              { step: '04', title: '完成データお渡し', description: 'ミックス・マスタリング後、完成した音源をその場でお渡しします。' },
            ].map((item) => (
              <div
                key={item.step}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-usi-hairline py-7 md:grid-cols-[6rem_16rem_1fr] md:gap-8 md:py-9"
              >
                <span className="font-mono text-2xl font-light leading-none tracking-tight text-usi-accent md:text-4xl" aria-hidden="true">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold leading-snug text-usi-text md:text-xl">
                  {item.title}
                </h3>
                <p className="col-span-2 mt-2 text-sm leading-relaxed text-usi-text-muted md:col-span-1 md:mt-0 md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          初めての方へ — quiet FAQ pointer
         ========================================================= */}
      <section className="bg-usi-sand-soft py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <div>
              <h3 className="text-xl font-bold leading-snug tracking-tight text-usi-text md:text-2xl" style={{ wordBreak: 'keep-all' }}>
                初めての方も安心して
                <wbr />
                ご利用いただけます
              </h3>
              <div className="mt-8 border-l-2 border-usi-accent pl-5">
                <p className="text-sm leading-loose text-usi-text-muted md:text-base">
                  「2時間で何曲録れる？」
                  <br />
                  「録音データはもらえる？」
                  <br />
                  「初めてでも大丈夫？」
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-usi-text-muted md:text-base">
                など、ご利用前によくいただく質問をまとめています。
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2.5 border border-usi-text/25 px-7 py-3.5 text-sm font-semibold text-usi-text transition-colors duration-200 hover:border-usi-text hover:bg-usi-text hover:text-usi-sand-soft md:text-base"
              >
                よくある質問を見る
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — 料金（ink面、平日／土日祝日の2区分）
         ========================================================= */}
      <section className="bg-usi-ink py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-cream-muted">
              04
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              Pricing
            </span>
            <span className="h-px flex-1 bg-usi-hairline-dark" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-cream md:text-3xl">
            料金
          </h2>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            {/* Price rows */}
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream-muted">
                2-Hour Session（税込）
              </p>
              <p className="mt-1.5 text-sm font-medium text-usi-cream-muted">
                2時間
              </p>
              <div className="mt-5 border-t border-usi-hairline-dark">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-usi-hairline-dark py-5 md:py-6">
                  <span className="text-base font-semibold tracking-wide text-usi-cream md:text-lg">
                    平日
                  </span>
                  <span className="text-4xl font-black leading-none tracking-tight text-usi-cream sm:text-5xl md:text-6xl">
                    ¥14,000
                    <span className="font-light text-usi-accent">-</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-usi-hairline-dark py-5 md:py-6">
                  <span className="text-base font-semibold tracking-wide text-usi-cream md:text-lg">
                    土日祝日
                  </span>
                  <span className="text-4xl font-black leading-none tracking-tight text-usi-cream sm:text-5xl md:text-6xl">
                    ¥18,000
                    <span className="font-light text-usi-accent">-</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Included */}
            <div className="flex flex-col justify-end">
              <div className="border border-usi-hairline-dark p-6 md:p-7">
                <p className="text-sm font-semibold text-usi-cream md:text-base">
                  料金には基本的に以下が含まれます。
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                  {['レコーディング', 'ピッチ修正', 'リズム修正', 'ミックス', 'マスタリング', '撮影'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 flex-shrink-0 text-usi-accent" strokeWidth={2} />
                      <span className="text-sm text-usi-cream md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-usi-hairline-dark pt-5 text-xs leading-relaxed text-usi-cream-muted md:text-sm">
                  そのほかのご要望にも可能な限り対応しておりますので、お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — お支払い方法
         ========================================================= */}
      <section className="bg-usi-sand py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              05
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Payment
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
            お支払い方法
          </h2>

          <div className="mt-10 border-t border-usi-hairline">
            {[
              { title: '現金', description: 'スタジオでお支払いください' },
              { title: 'クレジットカード', description: '主要なカードに対応' },
              { title: '各種電子決済', description: 'PayPay・Rakuten Pay���ど対応' },
            ].map((method) => (
              <div
                key={method.title}
                className="flex flex-col gap-1 border-b border-usi-hairline py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:py-6"
              >
                <span className="text-base font-bold text-usi-text md:text-lg">
                  {method.title}
                </span>
                <span className="text-sm leading-relaxed text-usi-text-muted md:text-base">
                  {method.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — 営業時間
         ========================================================= */}
      <section className="bg-usi-sand-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              06
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Hours
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
              営業時間
            </h2>
            <div>
              <p className="text-4xl font-black tracking-tight text-usi-text md:text-6xl">
                13:00
                <span className="font-light text-usi-accent">〜</span>
                22:00
              </p>
              <p className="mt-4 text-sm font-semibold tracking-wide text-usi-text-muted md:text-base">
                完全予約制・不定休
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          07 — 予約変更・キャンセル
         ========================================================= */}
      <section className="bg-usi-sand py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              07
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Cancellation
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
            予約変更・キャンセル
          </h2>

          <div className="mt-10 max-w-3xl">
            <div className="border-l-2 border-usi-accent pl-5 md:pl-6">
              <p className="text-lg font-bold leading-relaxed text-usi-text md:text-xl">
                予約日の2日前まで予約サイトから変更・キャンセルが可能です。
              </p>
            </div>
            <div className="mt-8 border-t border-usi-hairline pt-6">
              <p className="text-sm font-semibold text-usi-text md:text-base">
                キャンセル料金はいただいておりません。
              </p>
              <p className="mt-4 text-sm leading-relaxed text-usi-text-muted md:text-base">
                ただし当日キャンセルまたは無断キャンセルが累計2回あった場合は、予約枠確保の都合上、以後のご利用をお断りさせていただきます。あらかじめご了承ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — アクセス
         ========================================================= */}
      <section className="bg-usi-sand-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted">
              08
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Access
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
            アクセス
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Info list */}
            <div className="border-t border-usi-hairline">
              {/* Address */}
              <div className="border-b border-usi-hairline py-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-usi-accent" strokeWidth={1.75} />
                  <h3 className="text-sm font-bold tracking-wide text-usi-text md:text-base">住所</h3>
                </div>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-usi-text-muted md:text-base">
                  〒174-0042
                  <br />
                  東京都板橋区東坂下１−１９−２４
                  <br />
                  志幸４２シャンソン１１０号室
                </p>
                <p className="mt-2 pl-7 text-xs text-usi-text-muted">（マンション1F）</p>
              </div>

              {/* Stations */}
              <div className="border-b border-usi-hairline py-6">
                <div className="flex items-center gap-3">
                  <Train className="h-4 w-4 flex-shrink-0 text-usi-accent" strokeWidth={1.75} />
                  <h3 className="text-sm font-bold tracking-wide text-usi-text md:text-base">最寄駅</h3>
                </div>
                <div className="mt-3 space-y-4 pl-7">
                  <div>
                    <p className="text-sm font-semibold text-usi-text">都営三田線</p>
                    <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-usi-text-muted md:text-base">
                      <li>志村坂上駅 A3出口 徒歩12分</li>
                      <li>志村三丁目駅 徒歩12分</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-usi-text">JR埼京線</p>
                    <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-usi-text-muted md:text-base">
                      <li>浮間舟渡駅 徒歩17分</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bus */}
              <div className="border-b border-usi-hairline py-6">
                <div className="flex items-center gap-3">
                  <Bus className="h-4 w-4 flex-shrink-0 text-usi-accent" strokeWidth={1.75} />
                  <h3 className="text-sm font-bold tracking-wide text-usi-text md:text-base">バス</h3>
                </div>
                <div className="mt-3 pl-7">
                  <p className="text-sm font-semibold text-usi-text">国際興業バス</p>
                  <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-usi-text-muted md:text-base">
                    <li>志村坂下バス停 徒歩4分</li>
                  </ul>
                </div>
              </div>

              {/* Parking */}
              <div className="border-b border-usi-hairline py-6">
                <div className="flex items-center gap-3">
                  <ParkingCircle className="h-4 w-4 flex-shrink-0 text-usi-accent" strokeWidth={1.75} />
                  <h3 className="text-sm font-bold tracking-wide text-usi-text md:text-base">駐車場</h3>
                </div>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-usi-text-muted md:text-base">
                  マンション敷地内コインパーキングあり
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="border border-usi-hairline">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103574.31483333957!2d139.62875284492281!3d35.782810339093544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a2b77fc8d1%3A0xb4b171924c684959!2z44Om44OK44Kk44OG44OD44OJ44K544K_44K444Kq44ix!5e0!3m2!1sja!2sus!4v1782107196208!5m2!1sja!2sus"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="USI新河岸音楽工務所"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-usi-text-muted">USI新河岸音楽工務所</p>
                <a
                  href="https://maps.app.goo.gl/JrgphNgEJBYbBy346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted transition-colors duration-200 hover:text-usi-text"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA — ink, same design language as home
         ========================================================= */}
      <section className="relative bg-usi-ink py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              Booking
            </span>
            <span className="h-px w-16 bg-usi-hairline-dark" />
          </div>

          <h2 className="mt-10 text-3xl font-bold leading-tight tracking-tight text-usi-cream text-balance md:text-5xl">
            レコーディング予約はこちら
          </h2>

          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-usi-cream-muted md:text-lg">
            ご予約は24時間いつでも受け付けています。
            <br className="hidden md:inline" />
            その他ご不明な点は、LINEからお気軽にお問い合わせください。
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://reserve.united-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2.5 bg-usi-accent px-8 text-sm font-semibold text-white transition-colors duration-200 hover:bg-usi-accent-strong md:h-[52px] md:text-base"
            >
              空き状況を確認する
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://page.line.me/568repew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 bg-[#06C755] px-8 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#05b34c] md:h-[52px] md:text-base"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.135-.033.201-.033.209 0 .389.09.51.249l2.439 3.315V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで相談する
            </a>
          </div>


        </div>
      </section>

      {/* Notice */}
      <section className="border-t bg-usi-ink px-6 py-5 md:px-12" style={{ borderColor: 'rgba(244, 239, 230, 0.14)' }}>
        <p className="mx-auto max-w-6xl text-center text-xs leading-relaxed text-usi-cream-muted md:text-sm">
          ※掲載内容は予告なく変更される場合があります。
        </p>
      </section>

      <FooterSection />
    </main>
  );
}
