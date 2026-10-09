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

const siteTitle = '東京・板橋のレコーディングスタジオ｜当日完成・ミックス込み｜USI新河岸音楽工務所'
const siteDescription = '東京・板橋でボーカル録音・歌ってみた制作を。録音から編集・ミックス・マスタリングまで一人のエンジニアが一貫担当し、通常の2時間で当日完成を目指します。初心者歓迎・完全予約制。利用日時・開始時刻別の料金と空き状況をオンラインで確認・予約できます。'

export const metadata: Metadata = {
  metadataBase: new URL('https://rec.united-studio.com'),
  title: siteTitle,
  description: siteDescription,
  generator: 'v0.app',

  alternates: {
    canonical: 'https://rec.united-studio.com/',
  },

  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: siteTitle,
    description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
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
  {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
