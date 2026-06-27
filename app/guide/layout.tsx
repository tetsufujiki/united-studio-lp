import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'レコーディングスタジオ利用ガイド・ご利用方法｜USI新河岸音楽工務所',
  description: 'USI新河岸音楽工務所のレコーディングスタジオ利用ガイド。初めての方でも安心してご利用いただけます。料金、営業時間、アクセス、ご予約の流れ、よくある質問をご案内します。',
  
  alternates: {
    canonical: 'https://rec.united-studio.com/guide',
  },

  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: 'レコーディングスタジオ利用ガイド・ご利用方法｜USI新河岸音楽工務所',
    description: 'USI新河岸音楽工務所のレコーディングスタジオ利用ガイド。初めての方でも安心してご利用いただけます。料金、営業時間、アクセス、ご予約の流れ、よくある質問をご案内します。',
    url: 'https://rec.united-studio.com/guide',
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
    title: 'レコーディングスタジオ利用ガイド・ご利用方法｜USI新河岸音楽工務所',
    description: 'USI新河岸音楽工務所のレコーディングスタジオ利用ガイド。初めての方でも安心してご利用いただけます。料金、営業時間、アクセス、ご予約の流れ、よくある質問をご案内します。',
    images: ['https://rec.united-studio.com/ogp.jpg'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: 'https://rec.united-studio.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'レコーディングスタジオ利用ガイド',
      item: 'https://rec.united-studio.com/guide',
    },
  ],
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
