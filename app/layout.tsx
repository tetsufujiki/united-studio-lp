import type { Metadata } from 'next'
import { Noto_Sans_JP, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import './globals.css'
import { BgController } from "@/components/bg-controller";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>

        {/* 背景はここで制御 */}
        <BgController />

        <div className="relative z-10">
          {children}
        </div>

        <StickyCTABar />
        {process.env.NODE_ENV === 'production' && <Analytics />}

      </body>
    </html>
  )
}