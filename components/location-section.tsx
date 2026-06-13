import { MapPin, Phone, Train, Bus, ParkingCircle, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #f5f3f0 0%, #f7f4ef 50%, #faf8f5 100%)" }}
    >
      {/* SECTION 1: ADDRESS / TELEPHONE */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Section header - Japanese prominent, English secondary */}
          <div className="mb-10 text-center md:mb-14 md:text-left">
            <h2 id="access-heading" className="scroll-mt-24 text-2xl font-light tracking-tight text-[#1a1612] md:text-3xl">
              <span className="font-medium">所在地・電話</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-[#c9a382]/50" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#9a8f80]">
                Address / Telephone
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {/* Address Card */}
            <div className="rounded-2xl border border-[#e4ddd2]/70 bg-white/70 p-7 shadow-[0_8px_28px_rgba(120,100,70,0.07)] backdrop-blur-sm transition-colors hover:border-[#c9a382]/45">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8d9c4] bg-gradient-to-br from-[#f7efe2] to-[#f3ead9] text-[#b08a5f]">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#9a8f80]">
                  Address
                </span>
              </div>
              <div className="space-y-1 text-lg leading-relaxed text-[#2a2620]">
                <p>東京都板橋区東坂下１−１９−２４</p>
                <p>志幸４２シャンソン１１０号室</p>
                <p className="text-base text-[#7a7065]">（マンション1F）</p>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="rounded-2xl border border-[#e4ddd2]/70 bg-white/70 p-7 shadow-[0_8px_28px_rgba(120,100,70,0.07)] backdrop-blur-sm transition-colors hover:border-[#c9a382]/45">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8d9c4] bg-gradient-to-br from-[#f7efe2] to-[#f3ead9] text-[#b08a5f]">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#9a8f80]">
                  Telephone
                </span>
              </div>
              <a href="tel:0366824537" className="text-2xl font-medium tracking-wide text-[#2a2620] transition-colors hover:text-[#b08a5f]">
                03-6682-4537
              </a>
              <p className="mt-3 text-sm text-[#7a7065]">
                ※作業中はお電話に出られない場合がございます
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <div className="overflow-hidden rounded-2xl border border-[#e4ddd2]/70 shadow-[0_8px_28px_rgba(120,100,70,0.07)]">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=35.782666251112474,139.690424164405&zoom=14"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="所在地マップ"
                className="h-[250px] w-full md:h-[300px]"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=35.782666251112474,139.690424164405"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#7a7065] transition-colors hover:text-[#b08a5f]"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              Google Mapで開く
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS */}
      <section className="relative z-10 py-20 md:py-28">
        {/* Elegant champagne hairline divider */}
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#d9cdb8] to-transparent" aria-hidden="true" />

        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Section header - Japanese prominent, English secondary */}
          <div className="mb-10 text-center md:mb-14 md:text-left">
            <h2 className="text-2xl font-light tracking-tight text-[#1a1612] md:text-3xl">
              <span className="font-medium">アクセス</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-[#c9a382]/50" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#9a8f80]">
                Access
              </p>
            </div>
          </div>

          {/* Access Content - 3 column grid */}
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {/* Train Access Card */}
            <div className="rounded-2xl border border-[#e4ddd2]/70 bg-white/70 p-7 shadow-[0_8px_28px_rgba(120,100,70,0.07)] backdrop-blur-sm transition-colors hover:border-[#c9a382]/45">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8d9c4] bg-gradient-to-br from-[#f7efe2] to-[#f3ead9] text-[#b08a5f]">
                  <Train className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#9a8f80]">
                  Train
                </span>
              </div>

              <div className="space-y-6">
                {/* Toei Mita Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-[#2a2620]">
                    都営三田線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                      志村坂上駅 A3 徒歩12分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                      志村三丁目駅 徒歩12分
                    </li>
                  </ul>
                </div>

                {/* JR Saikyo Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-[#2a2620]">
                    JR埼京線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                      浮間舟渡駅 徒歩17分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#8a8075]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]/40" />
                      駅前ロータリーにタクシー乗場あり
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#8a8075]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]/40" />
                      ダイチャリ利用可能
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bus Access Card */}
            <div className="rounded-2xl border border-[#e4ddd2]/70 bg-white/70 p-7 shadow-[0_8px_28px_rgba(120,100,70,0.07)] backdrop-blur-sm transition-colors hover:border-[#c9a382]/45">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8d9c4] bg-gradient-to-br from-[#f7efe2] to-[#f3ead9] text-[#b08a5f]">
                  <Bus className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#9a8f80]">
                  Bus
                </span>
              </div>
              <p className="mb-3 text-base font-medium text-[#2a2620]">
                国際興業バス
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                  志村坂下バス停（池21 / 赤02など）徒歩4分
                </li>
              </ul>
            </div>

            {/* Parking Card */}
            <div className="rounded-2xl border border-[#e4ddd2]/70 bg-white/70 p-7 shadow-[0_8px_28px_rgba(120,100,70,0.07)] backdrop-blur-sm transition-colors hover:border-[#c9a382]/45">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8d9c4] bg-gradient-to-br from-[#f7efe2] to-[#f3ead9] text-[#b08a5f]">
                  <ParkingCircle className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#9a8f80]">
                  Parking
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                  タイムパーキング（スタジオ敷地内）
                </li>
                <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
                  タイムズ東坂下第２
                </li>
                <li className="flex items-start gap-3 text-sm text-[#3a352e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a382]" />
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
