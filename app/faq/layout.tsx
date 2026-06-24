import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'レコーディングスタジオFAQ | USI新河岸音楽工務所',
  description: '初めての録音から動画撮影まで。レコーディングスタジオのご利用に関して寄せられるご質問をまとめました。',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
