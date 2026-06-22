'use client';

import { MapPin, Train, Bus, ParkingCircle, Clock, CheckCircle, ExternalLink, ArrowRight, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function GuidePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: '用意するものはありますか？',
      answer: '伴奏音源（カラオケ）をご用意ください。あとは喉を潤すお水などをご持参いただければ大丈夫です。',
    },
    {
      question: '初めてですが大丈夫ですか？',
      answer: 'もちろん大丈夫です。ご利用者の半数が初めてのレコーディングです。少しずつ緊張もほぐれ、楽しく収録できる方がほとんどです。',
    },
    {
      question: 'ミックスは別料金ですか？',
      answer: 'いいえ。料金内でミックスからマスタリングまで行い、その日のうちにお持ち帰りいただけます。',
    },
    {
      question: 'Mixは別の方にお願いするので歌だけ録って欲しいです。',
      answer: 'はい。レコーディングした音素材をファイルでお渡しいたします。',
    },
  ];

  return (
    <main>

      {/* =========================================================
          HERO SECTION — dark, cinematic, matches homepage brand
         ========================================================= */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/equip.jpg"
            alt="USI新河岸音楽工務所 スタジオ機材 — プリアンプ・EQラック"
            fill
            className="object-cover object-center"
            style={{ filter: 'brightness(0.75) contrast(1.05) saturate(0.90)' }}
            priority
            sizes="100vw"
            quality={85}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.45) 100%)' }}
          />
        </div>

        {/* Ambient warm glow */}
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
          <a href="https://rec.united-studio.com" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
              <Mic2 className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white">
                USI新河岸音楽工務所
              </span>
              <span className="text-[11px] font-light uppercase tracking-[0.15em] text-white/60">
                Boutique Recording Studio
              </span>
            </div>
          </a>
        </nav>

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
            <p className="mt-6 text-lg text-white/75 md:text-xl text-balance max-w-xl mx-auto">
              初めての方も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHT CONTENT AREA — all guide sections
         ========================================================= */}
      <div className="bg-slate-50">

        {/* Intro blurb */}
        <section className="mx-auto max-w-3xl px-6 py-12 md:py-16 md:px-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-7 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              USI新河岸音楽工務所は東京都板橋区のレコーディングスタジオです。ボーカル録音、ナレーション録音、弾き語り録音、音源制作などに対応しています。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { label: '料金', value: '2時間 14,000円' },
                { label: 'サービス', value: 'ミックス・マスタリング込み' },
                { label: '受取', value: '当日データ持ち帰り' },
                { label: '対象', value: '初心者歓迎' },
                { label: 'キャンセル', value: '無料 ※条件あり' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ご利用の流れ */}
        <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-20 md:px-12">
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
        </section>

        {/* 料金 */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">料金</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">一律料金</p>
                <div className="mt-3 inline-block">
                  <p className="text-lg font-bold text-slate-700">2時間</p>
                  <p className="text-5xl font-black text-primary md:text-6xl">14,000円</p>
                  <p className="mt-1 text-sm text-slate-500">（税込）</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <p className="mb-5 text-center text-sm font-semibold text-slate-700">料金には基本的に以下が含まれます。</p>
                <ul className="mx-auto grid max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
                  {['レコーディング', 'ピッチ修正', 'リズム修正', 'ミックス', 'マスタリング'].map((item) => (
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

        {/* 営業時間 */}
        <section className="py-16 md:py-20">
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
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">予約変更・キャンセル</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="text-sm font-semibold text-amber-800">
                  予約日の2日前まで予約サイトから変更・キャンセルが可能です。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">キャンセル料金はいただい��おりません。</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  ただし当日キャンセルまたは無��キャンセルが累計2回あった場合は、予約枠確保の都合上、以後のご利用をお断りさせていただく場合があります。あらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* お支払い方法 */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">お支払い方法</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: '現金', description: 'スタジオでお支払いください' },
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
                  <p className="mt-1 text-sm text-slate-500">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className="bg-white py-16 md:py-20">
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
                <div>
                  <p className="font-semibold text-slate-900">バス</p>
                  <p className="mt-1 text-sm text-slate-600">国際興業バス</p>
                  <p className="text-sm text-slate-600">志村坂下バス停 徒歩4分</p>
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
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=35.782666251112474,139.690424164405&zoom=14"
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
                href="https://www.google.com/maps?q=35.782666251112474,139.690424164405"
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

        {/* よくある質問 */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">よくある質問</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex-1 pr-4 text-sm font-semibold text-slate-800 md:text-base">
                      {item.question}
                    </span>
                    <svg
                      className={`h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>{/* end light area */}

      {/* =========================================================
          CLOSING CTA — dark, bookends the page like the Hero
         ========================================================= */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        {/* Subtle warm glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <h2 className="text-2xl font-bold text-white md:text-4xl text-balance">
            レコーディング予約はこちら
          </h2>
          <p className="mt-4 text-white/65 md:text-lg text-balance max-w-xl mx-auto">
            ご予約は24時間いつでも受け付けています。<br className="hidden sm:block" />
            ご不明な点がある場合は、よくある質問をご確認ください。
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/40"
              asChild
            >
              <a
                href="https://unitedstudio.stores.jp/reserve/usi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a
                href="https://page.line.me/568repew"
                target="_blank"
                rel="noopener noreferrer"
              >
                よくある質問を見る
              </a>
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/35">
            初めての方のご利用も歓迎しております。
          </p>
          <p className="mt-2 text-xs text-white/25">
            本内容はお知らせなく変更される場合があります。あらかじめご了承ください。
          </p>
        </div>
      </section>

    </main>
  );
}
