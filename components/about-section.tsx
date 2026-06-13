import Image from "next/image";

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #faf8f5 0%, #f5f3f0 100%)`
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl font-light tracking-tight text-[#1a1612] md:text-4xl lg:text-4xl leading-relaxed">
            こんな人が<span className="font-medium">担当します</span>
          </h2>
        </div>

        {/* Main content - flexible layout */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Left column - Photo and labels */}
          <div className="flex flex-col items-center md:col-span-1">
            {/* Profile photo - Optimized for performance */}
            <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-lg border border-[#d4d0cc]/40 bg-[#e8e5e1] shadow-md md:h-56 md:w-56 flex-shrink-0">
              <Image
                src="/assets/tetsufujiki-profile.jpg"
                alt="藤木 哲"
                width={224}
                height={224}
                priority={false}
                loading="lazy"
                quality={65}
                sizes="(max-width: 640px) 192px, (max-width: 768px) 192px, 224px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Achievement labels */}
            <div className="w-full space-y-3">
              <div className="rounded-lg bg-white px-4 py-3 text-center border border-[#d4d0cc]/30 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-[#5a5550]">
                  スタジオご利用者
                </p>
                <p className="mt-1 text-lg font-semibold text-[#1a1612]">
                  1,000組以上
                </p>
              </div>
              
              <div className="rounded-lg bg-white px-4 py-3 text-center border border-[#d4d0cc]/30 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-[#5a5550]">
                  対応範囲
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1a1612] leading-relaxed">
                  録音〜ミックス・<br />仕上げまで一貫対応
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="md:col-span-2 flex flex-col justify-center">
            {/* Name and title */}
            <div className="mb-6 border-l-4 border-[#c9a382] pl-4">
              <p className="text-sm font-medium tracking-wide text-[#7a7570]">
                ユナイテッドスタジオ（株）
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-[#1a1612] md:text-3xl">
                藤木 哲
              </h3>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-[#3a3530] md:text-lg">
              <p>
                音楽家・作曲家として国内外で活動する中で、これまで多くの楽曲制作やレコーディングに携わってきました。
              </p>
              
              <p>
                レコーディングでは、ただ音を録るだけでなく、その楽曲や歌声の魅力がしっかり伝わることを大切にしています。
              </p>
              
              <p>
                楽器や楽曲構成、メロディーやアレンジといった音楽の要素を最後に整えるのがミキシング。そして、どんな風に聴かれたいかを考えるのがマスタリングです。
              </p>
              
              <p>
                音楽的に一番良い完成形を常に考えながら、録音からミックスまで一貫して担当しています。
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-[#c9a382] via-[#d4d0cc] to-transparent" />

            {/* Message paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-[#3a3530] md:text-lg">
              <p>
                「スタジオってちょっと不安…」<br />
                そんな気持ちで来られた方も、録音を終える頃には「とっても楽しかった」と言っていただけています。
              </p>
              
              <p>
                自分の声に自信がなかった方も、録音した声を聴いて「こんなにいい感じになるんだ」と驚かれます。
              </p>
              
              <p>
                はじめての方からプロフェッショナル用途まで、それぞれに合わせてサポートいたします。安心してお越しください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
