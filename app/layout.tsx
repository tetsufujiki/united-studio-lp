import type { Metadata } from 'next'
import { Noto_Sans_JP, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { CinematicBackground } from '@/components/cinematic-background'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'USI新河岸音楽工務所 | プロ基準を、すべてのクリエイターへ',
  description: '声優オーディション、ボーカル収録、歌い手カバー、配信、プロクオリティの制作サポート。初心者からプロまで、すべてのクリエイターを支援するレコーディングスタジオ。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/assets/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/assets/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/assets/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <CinematicBackground />
        <div className="relative z-10">
          {children}
        </div>
        <StickyCTABar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
