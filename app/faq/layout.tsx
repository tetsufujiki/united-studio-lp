import type { Metadata } from 'next'
import { generateFAQPageSchema } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'レコーディングスタジオ よくある質問（FAQ）｜USI新河岸音楽工務所',
  description: '初めての録音から動画撮影まで。レコーディングスタジオのご利用、ご予約、料金、機材、アクセスなど、よくあるご質問をまとめました。',
  
  alternates: {
    canonical: 'https://rec.united-studio.com/faq',
  },

  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: 'レコーディングスタジオ よくある質問（FAQ）｜USI新河岸音楽工務所',
    description: '初めての録音から動画撮影まで。レコーディングスタジオのご利用、ご予約、料金、機材、アクセスなど、よくあるご質問をまとめました。',
    url: 'https://rec.united-studio.com/faq',
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
    title: 'レコーディングスタジオ よくある質問（FAQ）｜USI新河岸音楽工務所',
    description: '初めての録音から動画撮影まで。レコーディングスタジオのご利用、ご予約、料金、機材、アクセスなど、よくあるご質問をまとめました。',
    images: ['https://rec.united-studio.com/ogp.jpg'],
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = generateFAQPageSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
