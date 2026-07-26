'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: '用意するものはありますか？',
    answer:
      '伴奏音源（カラオケ）をご用意ください。あとは喉を潤すお水などをご持参いただければ大丈夫です。',
  },
  {
    question: '初めてですが大丈夫ですか？',
    answer:
      'もちろん大丈夫です。初めての方も多くご利用いただいています。',
  },
  {
    question: 'ミックスは別料金ですか？',
    answer:
      'いいえ。料金内でミックスからマスタリングまで行い、その日のうちにお持ち帰りいただけます。',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-usi-sand-soft py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              FAQ
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>
          <h2 className="mt-8 text-2xl font-light tracking-tight text-usi-text sm:text-3xl md:text-4xl">
            よくある質問
          </h2>
        </div>

        {/* FAQ items — hairline-divided list */}
        <div className="border-y border-usi-hairline">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={index > 0 ? 'border-t border-usi-hairline' : ''}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-usi-accent-strong md:py-7"
              >
                <div className="flex min-w-0 flex-1 items-baseline gap-4">
                  <span
                    className="font-mono text-[11px] font-medium tracking-[0.1em] text-usi-text-muted"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="break-words text-base font-medium leading-relaxed text-usi-text md:text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-usi-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="pb-7 pl-9 pr-4 text-base leading-relaxed text-usi-text-muted md:pl-10 md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ footer */}
        <div className="mt-12 flex flex-col items-start gap-6 md:mt-14">
          <p className="text-sm leading-relaxed text-usi-text-muted md:text-base">
            その他ご不明な点は、
            <Link
              href="/faq"
              className="text-usi-accent-strong underline underline-offset-4 transition-colors duration-200 hover:text-usi-accent"
            >
              よくある質問
            </Link>
            ページをご覧いただくか、下のLINEボタンからお気軽にお問い合わせください。
          </p>

          <Link
            href="/faq"
            className="group inline-flex items-center gap-2.5 border border-usi-text/25 px-6 py-3 text-sm font-semibold text-usi-text transition-colors duration-200 hover:border-usi-text hover:bg-usi-text hover:text-usi-sand-soft"
          >
            もっと詳しいFAQを見る
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
