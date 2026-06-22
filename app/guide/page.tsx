'use client';

import { MapPin, Train, Bus, ParkingCircle, Clock, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    <main className="relative">
      {/* Header Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              USI新河岸音楽工務所
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-foreground">レコーディングスタジオ</span>
              <br />
              <span className="text-primary">利用ガイド</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              初めての方も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="bg-card/50 rounded-2xl border border-border/50 p-8 md:p-10">
            <p className="text-foreground/90 leading-relaxed mb-6">
              USI新河岸音楽工務所は東京都板橋区のレコーディングスタジオです。ボーカル録音、ナレーション録音、弾き語り等ライブ録音に対応しています。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Service Info Cards */}
              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-2">料金</p>
                <p className="text-2xl font-bold text-foreground">2時間</p>
                <p className="text-2xl font-bold text-foreground">14,000円</p>
              </div>
              
              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-2">サービス</p>
                <p className="text-foreground font-semibold">ミックス・マスタリング込み</p>
              </div>

              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-2">受取</p>
                <p className="text-foreground font-semibold">当日データ持ち帰り</p>
              </div>

              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-2">対象</p>
                <p className="text-foreground font-semibold">初心者歓迎</p>
              </div>

              <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-2">キャンセル</p>
                <p className="text-foreground font-semibold">無料</p>
                <p className="text-xs text-muted-foreground/80 mt-1">※条件あり</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Flow Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">ご利用の流れ</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'ご予約',
                description: '予約専用サイトから24時間いつでもご予約できます。',
              },
              {
                step: 2,
                title: 'ご来店',
                description: 'ご予約時間までにスタジオへお越しください。',
              },
              {
                step: 3,
                title: 'レコーディング',
                description: 'スタッフが丁寧にサポートいたします。',
              },
              {
                step: 4,
                title: '完成データお渡し',
                description: 'ミックス・マスタリング後、完成した音源をお渡しします。',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 md:py-24 bg-card/50">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">料金</h2>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12">
            <div className="text-center">
              <p className="text-sm md:text-base font-semibold text-muted-foreground mb-3">一律料金</p>
              <div className="inline-block mb-6">
                <p className="text-lg font-bold text-foreground">2時間</p>
                <p className="text-5xl md:text-6xl font-black text-primary">14,000円</p>
                <p className="text-sm text-muted-foreground mt-1">（税込）</p>
              </div>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
                料金には以下が含まれます。
              </p>
              <div className="grid gap-3 md:grid-cols-2 md:gap-4 max-w-2xl mx-auto">
                {[
                  'レコーディング',
                  'ビッチ修正',
                  'リズム修正',
                  'ミックス',
                  'マスタリング',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground/80">
                  その他のご要望にも対応が可能です。お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">営業時間</h2>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Clock className="h-12 w-12 text-primary/70" />
            </div>
            <p className="text-center text-4xl md:text-5xl font-bold text-foreground mb-3">
              13:00～22:00
            </p>
            <p className="text-center text-foreground/70 space-y-1">
              <span className="block">完全予約制</span>
              <span className="block">不定休</span>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="relative py-16 md:py-24 bg-card/50">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">お支払い方法</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: '現金',
                description: 'スタジオでお支払いください',
              },
              {
                title: 'クレジットカード',
                description: '主要なカードに対応',
              },
              {
                title: '各種電子決済',
                description: 'PayPay・Rakuten Payなど対応',
              },
            ].map((method, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-background p-6">
                <p className="text-lg font-semibold text-foreground text-center mb-2">{method.title}</p>
                <p className="text-sm text-foreground/70 text-center">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation & Modification Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">予約変更・キャンセル</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-yellow-600">予約の2日前までキャンセル・変更が可能です。</span>
              </p>
            </div>
            
            <div className="rounded-xl border border-border/50 bg-card/30 p-6">
              <p className="text-foreground/80">
                キャンセル料金はいただいておりません。ただし前日キャンセルや無断キャンセルが実績となった場合は、予約サイトでの予約ができなくなる可能性がございます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="relative py-16 md:py-24 bg-card/50">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">アクセス</h2>
          </div>

          {/* Address Section */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-6">住所</h3>
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/90 leading-relaxed">
                    〒174-0042<br />
                    東京都板橋区東坂下１−１９−２４<br />
                    志幸４２シャンソン１１０号室
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Station Access Cards */}
          <h3 className="text-lg font-semibold text-foreground mb-6">最寄駅</h3>
          <div className="grid gap-5 md:grid-cols-2 mb-10">
            {/* Toei Mita Line */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start gap-3 mb-4">
                <Train className="h-6 w-6 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">都営三田線</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Toei Mita Line</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary/70 flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground/80">志村坂上駅 A3 徒歩12分</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary/70 flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground/80">志村三丁目駅 徒歩12分</span>
                </li>
              </ul>
            </div>

            {/* JR Saikyo Line */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start gap-3 mb-4">
                <Train className="h-6 w-6 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">JR埼京線</p>
                  <p className="text-xs text-muted-foreground mt-0.5">JR Saikyo Line</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary/70 flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground/80">浮間舟渡駅 徒歩17分</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bus and Parking */}
          <div className="grid gap-5 md:grid-cols-2 mb-10">
            {/* Bus */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start gap-3 mb-4">
                <Bus className="h-6 w-6 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">バス</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Bus</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">
                国際興業バス<br />
                志村坂下バス停（池21 / 赤02など）徒歩4分
              </p>
            </div>

            {/* Parking */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start gap-3 mb-4">
                <ParkingCircle className="h-6 w-6 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">駐車場</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Parking</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">
                マンション敷地内コインパーキングあり
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mb-6">
            <div className="overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=35.782666251112474,139.690424164405&zoom=14"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="USI新河岸音楽工務所"
                className="h-[250px] w-full md:h-[300px]"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=35.782666251112474,139.690424164405"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Google Mapで開く
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">よくある質問</h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border/50 bg-card/30 overflow-hidden transition-all duration-300 hover:border-border hover:bg-card/50"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 md:px-8 md:py-5 text-left transition-all duration-300 bg-card/20 hover:bg-card/40"
                >
                  <span className="text-base font-medium text-foreground md:text-lg flex-1 pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-border/30 px-6 py-4 md:px-8 md:py-5 bg-background/50">
                    <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-card/50">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="bg-card rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              レコーディング予約はこちら
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              予約は24時間いつでも受け付けております。ご不明な点ございましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
            <p className="text-xs text-foreground/60 mt-6">
              初めての方のご利用も歓迎しております。
            </p>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12" />
    </main>
  );
}
