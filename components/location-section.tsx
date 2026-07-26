import { MapPin, Phone, Train, Bus, ParkingCircle, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <div className="relative bg-usi-sand">
      {/* SECTION 1: ADDRESS / TELEPHONE */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                Address / Telephone
              </span>
              <span className="h-px flex-1 bg-usi-hairline" />
            </div>
            <h2
              id="access-heading"
              className="mt-8 scroll-mt-24 text-3xl font-light tracking-tight text-usi-text md:text-4xl"
            >
              <span className="font-medium">所在地・電話</span>
            </h2>
          </div>

          {/* Address / phone — hairline definition rows */}
          <div className="border-t border-usi-hairline">
            <div className="grid gap-x-10 gap-y-2 border-b border-usi-hairline py-7 md:grid-cols-[220px_1fr] md:py-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                  Address
                </span>
              </div>
              <div className="text-base leading-relaxed text-usi-text md:text-lg">
                <p>東京都板橋区東坂下１−１９−２４</p>
                <p>志幸４２シャンソン１１０号室</p>
                <p className="text-sm text-usi-text-muted md:text-base">（マンション1F）</p>
              </div>
            </div>

            <div className="grid gap-x-10 gap-y-2 border-b border-usi-hairline py-7 md:grid-cols-[220px_1fr] md:py-8">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                  Telephone
                </span>
              </div>
              <div>
                <a
                  href="tel:0366824537"
                  className="text-2xl font-medium tracking-wide text-usi-text transition-colors hover:text-usi-accent"
                >
                  03-6682-4537
                </a>
                <p className="mt-2 text-sm text-usi-text-muted">
                  ※作業中はお電話に出られない場合がございます
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <div className="overflow-hidden border border-usi-hairline">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=35.782666251112474,139.690424164405&zoom=14"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="所在地マップ"
                className="h-[250px] w-full md:h-[320px]"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=35.782666251112474,139.690424164405"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-usi-text-muted transition-colors hover:text-usi-accent"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              Google Mapで開く
            </a>

            {/* 建物入口確認用補助導線 */}
            <div className="mt-10 border-l-2 border-usi-accent pl-5 md:pl-6">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                初めてのご来店
              </p>
              <p className="mt-2 text-sm leading-relaxed text-usi-text">
                建物入口の写真とGoogleマップはこちら
              </p>
              <a
                href="https://maps.app.goo.gl/GLR535CdUZR26G8Q9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 border border-usi-text/25 px-5 py-2.5 text-sm font-medium text-usi-text transition-colors duration-200 hover:border-usi-text hover:bg-usi-text hover:text-usi-sand"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                Googleマップで見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                Access
              </span>
              <span className="h-px flex-1 bg-usi-hairline" />
            </div>
            <h2 className="mt-8 text-3xl font-light tracking-tight text-usi-text md:text-4xl">
              <span className="font-medium">アクセス</span>
            </h2>
          </div>

          {/* Access — hairline-divided columns */}
          <div className="grid border-y border-usi-hairline md:grid-cols-3">
            {/* Train */}
            <div className="py-8 md:py-10 md:pr-8">
              <div className="mb-6 flex items-center gap-3">
                <Train className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                  Train
                </span>
              </div>

              <div className="space-y-6">
                {/* Toei Mita Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-usi-text">
                    都営三田線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-usi-text/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                      志村坂上駅 A3 徒歩12分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-usi-text/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                      志村三丁目駅 徒歩12分
                    </li>
                  </ul>
                </div>

                {/* JR Saikyo Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-usi-text">
                    JR埼京線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-usi-text/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                      浮間舟渡駅 徒歩17分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-usi-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-hairline" />
                      駅前ロータリーにタクシー乗場あり
                    </li>
                    <li className="flex items-start gap-3 text-sm text-usi-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-hairline" />
                      ダイチャリ利用可能
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bus */}
            <div className="border-t border-usi-hairline py-8 md:border-l md:border-t-0 md:px-8 md:py-10">
              <div className="mb-6 flex items-center gap-3">
                <Bus className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                  Bus
                </span>
              </div>
              <p className="mb-3 text-base font-medium text-usi-text">
                国際興業バス
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-usi-text/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                  志村坂下バス停（池21 / 赤02など）徒歩4分
                </li>
              </ul>
            </div>

            {/* Parking */}
            <div className="border-t border-usi-hairline py-8 md:border-l md:border-t-0 md:py-10 md:pl-8">
              <div className="mb-6 flex items-center gap-3">
                <ParkingCircle className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
                  Parking
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-usi-text/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                  タイムパーキング（スタジオ敷地内）
                </li>
                <li className="flex items-start gap-3 text-sm text-usi-text/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                  タイムズ東坂下第２
                </li>
                <li className="flex items-start gap-3 text-sm text-usi-text/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-usi-accent" />
                  NPC24H志村坂下１丁目
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
