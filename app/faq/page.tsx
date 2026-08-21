'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSection } from '@/components/footer-section';
import { faqSections } from '@/lib/faq-data';

const LINE_URL = 'https://page.line.me/568repew';

/** Replace [[LINE]] placeholder with an <a> tag; return plain text otherwise */
function renderAnswer(answer: string) {
  if (!answer.includes('[[LINE]]')) return answer;
  const parts = answer.split('[[LINE]]');
  return (
    <>
      {parts[0]}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-usi-text underline underline-offset-2 hover:text-usi-accent"
      >
        LINE
      </a>
      {parts[1]}
    </>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ section: number; item: number } | null>({ section: 1, item: 0 });
  const [activeCategory, setActiveCategory] = useState<string>('recording');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-usi-sand">

      {/* =========================================================
          HERO — deep ink, editorial, USDL 4.0 family
         ========================================================= */}
      <section className="relative flex min-h-[70vh] flex-col overflow-hidden bg-usi-ink md:min-h-[78vh]">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/ksd2.jpg"
            alt="USI新河岸音楽工務所 レコーディングスタジオ音響機器"
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
                FAQ
              </span>
              <span className="h-px w-16 bg-usi-hairline-dark" />
            </div>
            <p className="mt-6 text-sm font-medium tracking-[0.15em] text-usi-accent md:text-base">
              よくある質問
            </p>
            <h1 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight text-usi-cream text-balance md:text-6xl lg:text-7xl">
              レコーディングスタジオ
              <br />
              <span className="text-usi-accent">FAQ</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-usi-cream-muted md:text-lg" style={{ wordBreak: 'keep-all' }}>
              初めてレコーディングされる方から、動画撮影をご希望の方まで。
              <br />
              ご利用前によくいただくご質問をまとめました。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY NAVIGATION — numbered hairline grid
         ========================================================= */}
      <section className="bg-usi-sand py-14 md:py-20" aria-label="FAQカテゴリ">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Categories
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <nav className="mt-8 grid grid-cols-1 border-t border-usi-hairline sm:grid-cols-2 lg:grid-cols-3">
            {faqSections.map((section) => {
              const isActive = activeCategory === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveCategory(section.id);
                    scrollToSection(section.id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group flex items-baseline gap-4 border-b border-usi-hairline px-1 py-4 text-left transition-colors duration-200 md:py-5 ${
                    isActive ? 'text-usi-accent-strong' : 'text-usi-text hover:text-usi-accent-strong'
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-medium tracking-[0.1em] ${
                      isActive ? 'text-usi-accent' : 'text-usi-text-muted'
                    }`}
                    aria-hidden="true"
                  >
                    {String(section.number).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold md:text-base">{section.title}</span>
                  <ArrowRight
                    className={`ml-auto h-3.5 w-3.5 flex-shrink-0 transition-opacity duration-200 ${
                      isActive ? 'text-usi-accent opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTIONS — hairline accordions per category
         ========================================================= */}
      <section className="bg-usi-sand-soft py-20 md:py-28">
        <div className="mx-auto max-w-3xl space-y-20 px-6 md:px-12 md:space-y-24">
          {faqSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              {/* Category header */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-usi-text-muted" aria-hidden="true">
                  {String(section.number).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-usi-hairline" />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-usi-text md:text-3xl">
                {section.title}
              </h2>

              {/* Accordion list */}
              <div className="mt-8 border-y border-usi-hairline">
                {section.items.map((item, index) => {
                  const isOpen =
                    openIndex?.section === section.number && openIndex?.item === index;
                  const panelId = `faq-panel-${section.id}-${index}`;
                  const buttonId = `faq-button-${section.id}-${index}`;
                  return (
                    <div key={index} className={index > 0 ? 'border-t border-usi-hairline' : ''}>
                      <button
                        id={buttonId}
                        onClick={() =>
                          setOpenIndex(isOpen ? null : { section: section.number, item: index })
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-usi-accent-strong md:py-6"
                      >
                        <span className="min-w-0 flex-1 break-words text-base font-medium leading-relaxed text-usi-text md:text-lg">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-usi-accent transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                      >
                        <p className="whitespace-pre-line pb-6 pr-4 text-base leading-relaxed text-usi-text-muted md:pb-7 md:text-lg">
                          {renderAnswer(item.answer)}
                          {item.link && (
                            <>
                              <a
                                href={item.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-usi-text underline underline-offset-4 transition-colors duration-200 hover:text-usi-accent"
                              >
                                {item.link.label}
                              </a>
                              <span className="sr-only">（新しいタブで開く）</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
            解決しないご質問は、LINEからお気軽にお問い合わせください。
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

      {/* =========================================================
          SUPPLEMENTARY NAVIGATION + NOTICE
         ========================================================= */}
      <section
        className="border-t bg-usi-ink px-6 py-6 md:px-12"
        style={{ borderColor: 'rgba(244, 239, 230, 0.14)' }}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="関連ページ"
        >
          <Link
            href="/guide"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted transition-colors duration-200 hover:text-usi-cream"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>利用ガイドへ戻る</span>
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted transition-colors duration-200 hover:text-usi-cream"
          >
            <span>トップページへ</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>
        <p className="mx-auto mt-5 max-w-6xl border-t pt-5 text-center text-xs leading-relaxed text-usi-cream-muted md:text-sm" style={{ borderColor: 'rgba(244, 239, 230, 0.14)' }}>
          ※掲載内容は予告なく変更される場合があります。
        </p>
      </section>

      <FooterSection />
    </main>
  );
}
