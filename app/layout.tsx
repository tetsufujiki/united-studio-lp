import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { StickyHeader } from '@/components/sticky-header'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { LazyCinematicBackground } from '@/components/lazy-cinematic-background'
import { SchemaOrg } from '@/components/schema-org'
import './globals.css'

// Self-hosted, subsetted Noto Sans JP (only the glyphs used on this page).
// Replaces next/font/google, which split the Japanese face into 100+ chunked
// woff2 requests in the critical request chain.
const notoSansJP = localFont({
  src: [
    {
      path: './fonts/NotoSansJP-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansJP-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rec.united-studio.com'),
  title: '1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ｜USI新河岸音楽工務所',
  description: '歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。\nボーカル収録からミックス・マスタリング、撮影まで一括対応するレコーディングスタジオ。\n当日完成納品が基本仕様、ワンプライスの明瞭会計で安心して利用できます。',
  generator: 'v0.app',

  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: '1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ｜USI新河岸音楽工務所',
    description: '歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。\nボーカル収録からミックス・マスタリング、撮影まで一括対応するレコーディングスタジオ。\n当日完成納品が基本仕様、ワンプライスの明瞭会計で安心して利用できます。',
    url: 'https://rec.united-studio.com',
    siteName: 'USI新河岸音楽工務所',
    images: [
      {
        url: 'https://rec.united-studio.com/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'USI新河岸音楽工務所 - プロ基準を、2時間14,000円から。',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ｜USI新河岸音楽工務所',
    description: '歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。\nボーカル収録からミックス・マスタリング、撮影まで一括対応するレコーディングスタジオ。\n当日完成納品が基本仕様、ワンプライスの明瞭会計で安心して利用できます。',
    images: ['https://rec.united-studio.com/ogp.jpg'],
  },

  verification: {
    other: {
      "msvalidate.01": "070A81E18A081F54B02C58A74C1C2FAD",
    },
  },

icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
 <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MKJ484H"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>

  {/* GTM */}
  <Script
    id="gtm"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MKJ484H');
      `,
    }}
  />

  <StickyHeader />
  <LazyCinematicBackground />
  <div className="relative z-10">{children}</div>
  <StickyCTABar />
  <ScrollToTopButton />
  {/* Clarity */}
  <Script id="clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/x36v31bb3x";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "x36v31bb3x");
    `}
  </Script>
  {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
