/**
 * FAQ Data - Single Source of Truth for FAQ content
 * Used by both the FAQ page display and JSON-LD schema generation
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  number: number;
  title: string;
  items: FAQItem[];
}

export const faqSections: FAQSection[] = [
  {
    id: 'recording',
    number: 1,
    title: '録音について',
    items: [
      {
        question: '初めてですが大丈夫ですか？',
        answer: 'もちろん大丈夫です。ご利用者の半数が初めてのレコーディングです。少しずつ緊張もほぐれ、楽しく収録できる方がほとんどです。',
      },
      {
        question: '用意するものはありますか？',
        answer: '伴奏音源（カラオケ）をご用意ください。あとは喉を潤すお水などをご持参いただければ大丈夫です。',
      },
    ],
  },
  {
    id: 'time',
    number: 2,
    title: '時間について',
    items: [
      {
        question: '1曲にどのくらいの時間がかかりますか？',
        answer: '歌録りに必要な時間は、お客様によって異なります。一般的には歌録りに約1時間程度かけることが多く、その後残り時間でピッチ・リズム修正、ミックス、マスタリングなどの仕上げ作業を行います。',
      },
      {
        question: '2時間で2曲歌えますか？',
        answer: '可能です。ただし1曲あたり歌入れ約30分、仕上げ約30分程度のペースとなります。歌い直しやパート数が多い場合は時間内に仕上がらない場合があります。',
      },
      {
        question: '当日の延長はできますか？',
        answer: 'はい、後の時間に空きがあれば、1時間単位で延長が可能です。',
      },
    ],
  },
  {
    id: 'audio-source',
    number: 3,
    title: '音源について',
    items: [
      {
        question: 'カラオケ音源はどうやって持っていったら良いですか？',
        answer: 'USBメモリでお持ちいただくか、事前送付がおすすめです。事前送付いただければ動作確認と準備をいたします。',
      },
      {
        question: 'カラオケ音源はどこで入手できますか？',
        answer: 'YouTubeなどで公開されているカラオケ音源を利用できる場合があります。ただし著作権や利用許諾条件を必ずご確認ください。当スタジオでは音源の準備や提供は行っておりません。',
      },
      {
        question: 'ミックスは別料金ですか？',
        answer: 'いいえ。料金内でミックスからマスタリングまで行い、その日のうちにお持ち帰りいただけます。',
      },
      {
        question: 'Mixは別の方にお願いするので歌だけ録って欲しいです。',
        answer: 'はい。レコーディングした音素材をファイルでお渡しいたします。',
      },
    ],
  },
  {
    id: 'data',
    number: 4,
    title: 'データについて',
    items: [
      {
        question: '完成したものはどのように受け取れますか？',
        answer: 'ファイル転送サービスやAirDropなどを利用してその場でお渡ししております。USBメモリなどご希望の方法がある場合はお申し付けください。',
      },
      {
        question: 'データの保管期間はありますか？',
        answer: '音声データは可能な限り保管しておりますが保証はしておりません。完成データはお客様ご自身でも保管をお願いいたします。なお、映像データは容量の都合上、お渡し後数日を目安に削除しております。必ず当日中の確認と保存をお願いいたします。',
      },
      {
        question: '先日録音した音素材は貰えますか？',
        answer: 'はい、お渡し可能です。次回のご予約がある場合は、ご来店時に書き出し作業を行いお渡しいたします。\n\nお急ぎの場合は、時間外作業として対応いたします。その場合は、スタジオ利用料金1時間分を頂戴し、データを書き出してお送りいたします。',
      },
    ],
  },
  {
    id: 'video',
    number: 5,
    title: '動画撮影について',
    items: [
      {
        question: '2時間で撮影込みは可能ですか？',
        answer: '可能です。歌の完成まで約90分、残り時間で動画撮影を行うケースが一般的です。ご希望に応じて時間配分を調整できます。',
      },
      {
        question: 'YouTubeへアップできますか？',
        answer: 'はい。完成した音源入り動画をそのままアップロードできます。タイトル設定やサムネイル作成などの編集はお客様ご自身でお願いいたします。',
      },
    ],
  },
  {
    id: 'equipment',
    number: 6,
    title: '楽器・設備について',
    items: [
      {
        question: '弾き語りのレコーディングはできますか？',
        answer: '可能です。通常は楽器演奏を録音した後にボーカルを収録する方法をおすすめしております。',
      },
      {
        question: '楽器は貸してもらえますか？',
        answer: '基本的にお持ち込みをお願いしております。常設機材として KORG SV-2S 88鍵ステージピアノをご利用いただけます。',
      },
    ],
  },
  {
    id: 'people',
    number: 7,
    title: 'ご利用人数について',
    items: [
      {
        question: '同時に何名のレコーディングができますか？',
        answer: 'コーラスなど同時録音が必要な場合、5〜6名程度まで対応可能です。人数が多い場合は時間に余裕を持ったご予約をおすすめいたします。',
      },
    ],
  },
];

/**
 * Generate FAQ Page JSON-LD schema
 * Returns an array of mainEntity items for FAQPage schema
 */
export function generateFAQPageSchema() {
  const mainEntity = faqSections.flatMap(section =>
    section.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}
