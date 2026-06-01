import { MapPin, Phone, Train, Bus, ParkingCircle, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <div className="relative overflow-hidden bg-background">

      {/* SECTION 1: ADDRESS / TELEPHONE */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Section header - Japanese prominent, English secondary */}
          <div className="mb-12 md:mb-16">
            <h2 id="access-heading" className="scroll-mt-24 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              所在地・電話
            </h2>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/70">
              Address / Telephone
            </p>
          </div>

          {/* Content Grid */}
          <div
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Address Card */}
            <div
              className="rounded-xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-background/40 text-muted-foreground">
                  <MapPin className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Address
                </span>
              </div>
              <div className="space-y-1 text-lg leading-relaxed text-foreground">
                <p>東京都板橋区東坂下１−１９−２４</p>
                <p>志幸４２シャンソン１１０号室</p>
                <p className="text-base text-muted-foreground">（マンション1F）</p>
              </div>
            </div>

            {/* Telephone Card */}
            <div
              className="rounded-xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-background/40 text-muted-foreground">
                  <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Telephone
                </span>
              </div>
              <p className="text-lg text-foreground">03-6682-4537</p>
              <p className="mt-3 text-sm text-muted-foreground">
                ※作業中はお電話に出られない場合がございます
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div
            className="mt-6"
          >
            <div className="overflow-hidden rounded-xl border border-border/20">
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
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              Google Mapで開く
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS */}
      <section className="relative z-10 border-t border-border/10 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Section header - Japanese prominent, English secondary */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              アクセス
            </h2>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/70">
              Access
            </p>
          </div>

          {/* Access Content - 3 column grid */}
          <div
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Train Access Card */}
            <div
              className="rounded-xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-background/40 text-muted-foreground">
                  <Train className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Train
                </span>
              </div>

              <div className="space-y-6">
                {/* Toei Mita Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-foreground">
                    都営三田線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      志村坂上駅 A3 徒歩12分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      志村三丁目駅 徒歩12分
                    </li>
                  </ul>
                </div>

                {/* JR Saikyo Line */}
                <div>
                  <p className="mb-3 text-base font-medium text-foreground">
                    JR埼京線
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      浮間舟渡駅 徒歩17分
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                      駅前ロータリーにタクシー乗場あり
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                      ダイチャリ利用可能
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bus Access Card */}
            <div
              className="rounded-xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-background/40 text-muted-foreground">
                  <Bus className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Bus
                </span>
              </div>
              <p className="mb-3 text-base font-medium text-foreground">
                国際興業バス
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  志村坂下バス停（池21 / 赤02など）徒歩4分
                </li>
              </ul>
            </div>

            {/* Parking Card */}
            <div
              className="rounded-xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-background/40 text-muted-foreground">
                  <ParkingCircle className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Parking
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  タイムパーキング（スタジオ敷地内）
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  タイムズ東坂下第２
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
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
