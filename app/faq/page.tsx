'use client';

import { useState } from 'react';
import { Mic2, Clock, Music, HardDrive, Video, Music2, Users, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
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
          question: '何名までレコーディングできますか？',
          answer: 'コーラスなどの同時録音の場合は5〜6名程度まで対応可能です。人数が多い場合は時間に余裕を持ったご予約をおすすめいたします。',
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFFDF8] to-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance">
            レコーディングスタジオFAQ
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl text-balance">
            初めてレコーディングされる方から、動画撮影をご希望の方まで。
            <br />
            ご利用前によくいただくご質問をまとめました。
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md hover:bg-primary/5"
              >
                <div className="flex justify-center text-primary/80 group-hover:text-primary transition-colors">
                  {category.icon}
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-500 group-hover:text-primary transition-colors">
                  {category.number}
                </p>
                <p className="mt-1 text-base font-bold text-slate-900">{category.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-slate-50/50 px-6 py-16 md:px-12 md:py-20">
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

      {/* Bottom CTA Section */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50/50 to-slate-50/50 border border-slate-200/50 px-8 py-12 md:px-12 md:py-16 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              レコーディング予約はこちら
            </h2>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              24時間いつでも予約受付中です。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a
                  href="https://page.line.me/568repew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  予約する
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-50"
                asChild
              >
                <a href="mailto:info@united-studio.com">
                  お問い合わせ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
