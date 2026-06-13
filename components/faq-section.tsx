'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '用意するものはありますか？',
    answer:
      '伴奏音源（カラオケ）をご用意ください。あとは喉を潤すお水などをご持参いただければ大丈夫です。',
  },
  {
    question: '初めてですが大丈夫ですか？',
    answer:
      'もちろん大丈夫です。ご利用者の半数が初めてのレコーディングです。少しずつ緊張もほぐれ、楽しく収録できる方がほとんどです。',
  },
  {
    question: 'ミックスは別料金ですか？',
    answer:
      'いいえ。料金内でミックスからマスタリングまで行い、その日のうちにお持ち帰りいただけます。',
  },
  {
    question: 'Mixは別の方にお願いするので歌だけ録って欲しいです。',
    answer:
      'はい。レコーディングした音素材をファイルでお渡しいたします。',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #faf8f5 0%, #f5f3f0 50%, #f0ebe4 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-2xl font-light tracking-tight text-[#1a1612] sm:text-3xl md:text-4xl lg:text-4xl leading-relaxed">
            よくある質問
          </h2>
          <p className="mt-3 text-xs tracking-[0.2em] uppercase text-[#7a7570]">
            FAQ
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#d4d0cc]/30 bg-white/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#c9a382]/50 hover:bg-white/80"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 md:px-8 md:py-6 text-left transition-all duration-300 bg-[#f5f3f0]/50 hover:bg-[#ede9e4]/60"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 text-[#c9a382]/70" />
                  <span className="text-base font-medium text-[#1a1612] md:text-lg leading-relaxed break-words">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#c9a382] transition-transform duration-300 ${
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
                <div className="border-t border-[#d4d0cc]/20 px-6 py-5 md:px-8 md:py-6 bg-white/50">
                  <p className="text-base leading-relaxed text-[#3a3530] md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
