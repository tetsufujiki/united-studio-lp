'use client';

import { useState } from 'react';
import { Mic2, Clock, Music, HardDrive, Video, Music2, Users, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  number: number;
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ section: number; item: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('recording');

  const categories = [
    { id: 'recording', number: 1, title: '録音について', icon: <Mic2 className="h-6 w-6" /> },
    { id: 'time', number: 2, title: '時間について', icon: <Clock className="h-6 w-6" /> },
    { id: 'audio-source', number: 3, title: '音源について', icon: <Music className="h-6 w-6" /> },
    { id: 'data', number: 4, title: 'データについて', icon: <HardDrive className="h-6 w-6" /> },
    { id: 'video', number: 5, title: '動画撮影について', icon: <Video className="h-6 w-6" /> },
    { id: 'equipment', number: 6, title: '楽器・設備について', icon: <Music2 className="h-6 w-6" /> },
    { id: 'people', number: 7, title: 'ご利用人数について', icon: <Users className="h-6 w-6" /> },
  ];

  const faqSections: FAQSection[] = [
    {
      id: 'recording',
      number: 1,
      title: '録音について',
      icon: <Mic2 className="h-6 w-6" />,
      items: [
        {
          question: '初めてですが大丈夫ですか？',
          answer: 'もちろん大丈夫です。ご利用者の半数が初めてのレコーディングです。少しずつ緊張もほぐれ、楽しく収録できる方がほとんどです。',
        },
        {
          question: '用意するものはありますか？',
          answer: '伴奏音源（カラオケ）をご用意ください。あとは喉を潤すお水などをご持参いただければ大丈夫です。',
        },
      ],
    },
    {
      id: 'time',
      number: 2,
      title: '時間について',
      icon: <Clock className="h-6 w-6" />,
      items: [
        {
          question: '1曲にどのくらいの時間がかかりますか？',
          answer: '歌録りに必要な時間は、お客様によって異なります。一般的には歌録りに約1時間程度かけることが多く、その後残り時間でピッチ・リズム修正、ミックス、マスタリングなどの仕上げ作業を行います。',
        },
        {
          question: '2時間で2曲歌えますか？',
          answer: '可能です。ただし1曲あたり歌入れ約30分、仕上げ約30分程度のペースとなります。歌い直しやパート数が多い場合は時間内に仕上がらない場合があります。',
        },
        {
          question: '当日の延長はできますか？',
          answer: 'はい、後の時間に空きがあれば、1時間単位で延長が可能です。',
        },
      ],
    },
    {
      id: 'audio-source',
      number: 3,
      title: '音源について',
      icon: <Music className="h-6 w-6" />,
      items: [
        {
          question: 'カラオケ音源はどうやって持っていったら良いですか？',
          answer: 'USBメモリでお持ちいただくか、事前送付がおすすめです。事前送付いただければ動作確認と準備をいたします。',
        },
        {
          question: 'カラオケ音源はどこで入手できますか？',
          answer: 'YouTubeなどで公開されているカラオケ音源を利用できる場合があります。ただし著作権や利用許諾条件を必ずご確認ください。当スタジオでは音源の準備や提供は行っておりません。',
        },
        {
          question: 'ミックスは別料金ですか？',
          answer: 'いいえ。料金内でミックスからマスタリングまで行い、その日のうちにお持ち帰りいただけます。',
        },
        {
          question: 'Mixは別の方にお願いするので歌だけ録って欲しいです。',
          answer: 'はい。レコーディングした音素材をファイルでお渡しいたします。',
        },
      ],
    },
    {
      id: 'data',
      number: 4,
      title: 'データについて',
      icon: <HardDrive className="h-6 w-6" />,
      items: [
        {
          question: '完成したものはどのように受け取れますか？',
          answer: 'ファイル転送サービスやAirDropなどを利用してその場でお渡ししております。USBメモリなどご希望の方法がある場合はお申し付けください。',
        },
        {
          question: 'データの保管期間はありますか？',
          answer: '音声データは可能な限り保管しておりますが保証はしておりません。完成データはお客様ご自身でも保管をお願いいたします。なお、映像データは容量の都合上、お渡し後数日を目安に削除しております。必ず当日中の確認と保存をお願いいたします。',
        },
        {
          question: '先日録音した音素材は貰えますか？',
          answer: 'はい、お渡し可能です。次回のご予約がある場合は、ご来店時に書き出し作業を行いお渡しいたします。\n\nお急ぎの場合は、時間外作業として対応いたします。その場合は、スタジオ利用料金1時間分を頂戴し、データを書き出してお送りいたします。',
        },
      ],
    },
    {
      id: 'video',
      number: 5,
      title: '動画撮影について',
      icon: <Video className="h-6 w-6" />,
      items: [
        {
          question: '2時間で撮影込みは可能ですか？',
          answer: '可能です。歌の完成まで約90分、残り時間で動画撮影を行うケースが一般的です。ご希望に応じて時間配分を調整できます。',
        },
        {
          question: 'YouTubeへアップできますか？',
          answer: 'はい。完成した音源入り動画をそのままアップロードできます。タイトル設定やサムネイル作成などの編集はお客様ご自身でお願いいたします。',
        },
      ],
    },
    {
      id: 'equipment',
      number: 6,
      title: '楽器・設備について',
      icon: <Music2 className="h-6 w-6" />,
      items: [
        {
          question: '弾き語りのレコーディングはできますか？',
          answer: '可能です。通常は楽器演奏を録音した後にボーカルを収録する方法をおすすめしております。',
        },
        {
          question: '楽器は貸してもらえますか？',
          answer: '基本的にお持ち込みをお願いしております。常設機材として KORG SV-2S 88鍵ステージピアノをご利用いただけます。',
        },
      ],
    },
    {
      id: 'people',
      number: 7,
      title: 'ご利用人数について',
      icon: <Users className="h-6 w-6" />,
      items: [
        {
          question: '同時に何名のレコーディングができますか？',
          answer: '���ーラスなど同時録音が必要な場合、5〜6名程度まで対応可能です。人数が多い場合は時間に余裕を持ったご予約をおすすめいたします。',
        },
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section — matches Guide page design with background image */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/ksd2.jpg"
            alt="USI新河岸音楽工務所 レコーディングスタジオ音響機器"
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
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl text-balance mb-6">
              <span className="block">よくある質問</span>
              <span className="block whitespace-nowrap">レコーディングスタジオ</span>
              <span className="block text-primary">FAQ</span>
            </h1>
            <p className="mt-8 text-lg text-white/75 md:text-xl max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              <span className="block md:inline">初めてレコーディングされる方から、</span>
              <span className="block md:inline">動画撮影をご希望の方まで。</span>
              <br />
              <span className="block">ご利用前によくいただくご質問をまとめました。</span>
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation — Compacted for better mobile experience */}
      <section className="bg-white px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    scrollToSection(category.id);
                  }}
                  className={`group rounded-xl px-4 py-5 text-center shadow-sm transition-all ${
                    isActive
                      ? 'border border-primary/30 bg-primary/5 shadow-md'
                      : 'border border-slate-200 bg-slate-50 hover:border-primary/30 hover:shadow-md hover:bg-primary/5'
                  }`}
                >
                  <div className={`flex justify-center transition-colors mb-2 ${
                    isActive ? 'text-primary' : 'text-slate-600 group-hover:text-primary'
                  }`}>
                    {category.icon}
                  </div>
                  <p className={`text-xs font-bold transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                  }`}>
                    {category.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl space-y-16">
          {faqSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-8 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold text-primary">{section.number}</span>
                  <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                </div>
              </div>

              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex?.section === section.number && openIndex?.item === index
                            ? null
                            : { section: section.number, item: index }
                        )
                      }
                      className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex-1 pr-4 text-sm font-semibold text-slate-800 md:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 ${
                          openIndex?.section === section.number && openIndex?.item === index
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    {openIndex?.section === section.number && openIndex?.item === index && (
                      <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">
                        <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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
            その他ご不明な点は、下のLINEボタンからお気軽にお問い合わせください。
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

            {/* Secondary CTA Button - LINE */}
            <a
              href="https://page.line.me/568repew"
              target="_blank"
              rel="noopener noreferrer"
              className="h-15 md:h-16 w-56 md:w-64 inline-flex items-center justify-center rounded-2xl border-2 border-green-500 bg-transparent text-green-500 font-semibold text-base md:text-lg transition-all duration-300 hover:bg-green-500/12 hover:border-green-400 hover:text-green-400"
            >
              LINEで相談する
            </a>
          </div>

          {/* Welcome Message */}
          <p className="mt-8 md:mt-12 text-base text-white/80 font-light flex items-center justify-center gap-2">
            <span>✨</span>
            <span>初めての方のご利用も歓迎しております</span>
          </p>
        </div>
      </section>

      {/* Footer Notice Bar */}
      <section className="border-t border-slate-700/20 bg-slate-950 px-6 py-16 md:px-12">
        <div className="flex items-center justify-center h-14 md:h-16">
          <p className="text-center text-12 md:text-13 text-gray-400">
            ※掲載内容は予告なく変更される場合があります。
          </p>
        </div>
      </section>
    </main>
  );
}
