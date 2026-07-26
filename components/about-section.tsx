import Image from "next/image";

export function AboutSection() {
  return (
    <section className="relative bg-usi-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Engineer
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>
          <h2 className="mt-8 text-3xl font-light tracking-tight text-usi-text md:text-4xl">
            こんな人が<span className="font-medium">担当します</span>
          </h2>
        </div>

        {/* Main content — asymmetric editorial layout */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {/* Left column — photo and stats */}
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden border border-usi-hairline bg-usi-sand-soft md:max-w-none">
              <Image
                src="/assets/tetsufujiki-profile.jpg"
                alt="藤木 哲"
                width={224}
                height={224}
                priority={false}
                loading="lazy"
                quality={65}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 280px, 320px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Achievement stats — hairline rows */}
            <div className="mt-8 border-t border-usi-hairline">
              <div className="flex items-baseline justify-between gap-4 border-b border-usi-hairline py-4">
                <span className="text-xs font-medium tracking-wide text-usi-text-muted">
                  スタジオご利用者
                </span>
                <span className="text-lg font-semibold text-usi-text">
                  1,000組以上
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-usi-hairline py-4">
                <span className="shrink-0 text-xs font-medium tracking-wide text-usi-text-muted">
                  対応範囲
                </span>
                <span className="text-right text-sm font-semibold leading-relaxed text-usi-text">
                  録音〜ミックス・<br />仕上げまで一貫対応
                </span>
              </div>
            </div>
          </div>

          {/* Right column — text content */}
          <div className="flex flex-col justify-start md:col-span-2">
            {/* Name and title */}
            <div className="mb-8 border-l-2 border-usi-accent pl-5">
              <p className="text-sm font-medium tracking-wide text-usi-text-muted">
                ユナイテッドスタジオ（株）
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-usi-text md:text-3xl">
                藤木 哲
              </h3>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-usi-text/85 md:text-lg">
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
            <div className="my-10 h-px bg-usi-hairline" />

            {/* Message paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-usi-text/85 md:text-lg">
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
