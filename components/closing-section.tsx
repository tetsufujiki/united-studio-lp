import { MessageCircle } from "lucide-react";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden py-28 pb-48 md:py-36 md:pb-56">
      {/* Simplified warm gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #0f1014 0%, #1a1714 70%, #1c1810 100%)`
        }}
      />
      
      {/* Single ambient glow */}
      <div 
        className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(ellipse, rgba(180, 145, 90, 0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-12">
        {/* PROFESSIONAL GRADE EQUIPMENT Section - slightly stronger visual emphasis */}
        <div
          className="mb-20"
        >
          {/* Section Header - Japanese prominent, English secondary */}
          <div className="mb-10">
            <h3 id="equipment-heading" className="scroll-mt-24 text-xl font-medium tracking-wide text-[#d4c4a8] md:text-2xl">
              プロフェッショナル基準の機材と環境をご提供します
            </h3>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[#d4c4a8]/30" />
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#8a8070]">
                Professional Grade Equipment
              </span>
            </div>
          </div>

          {/* Equipment Category Preview - Minimal & Intentional */}
          <div className="mb-12 grid grid-cols-3 gap-5 max-w-lg">
            {/* Microphones */}
            <div className="group relative aspect-square overflow-hidden rounded-lg bg-[#1c1810]/80 border border-[#3a3530]/40 cursor-pointer transition-all duration-300 hover:border-[#4a4540]/60">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                style={{
                  backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio0-ZOOWNFvPvK3sUitqmggrSwRF8mUD38.jpg")',
                  filter: 'saturate(0.75) brightness(0.95) contrast(1.05)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014]/85 via-[#0f1014]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-2 left-2">
                <span className="text-[9px] font-medium tracking-widest uppercase text-[#c8b8a8]/80 transition-colors duration-300 group-hover:text-[#d4c4a8]">Studio</span>
              </div>
            </div>

            {/* Outboard Gear */}
            <div className="group relative aspect-square overflow-hidden rounded-lg bg-[#1c1810]/80 border border-[#3a3530]/40 cursor-pointer transition-all duration-300 hover:border-[#4a4540]/60">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                style={{
                  backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usi-otIfdpT4abQL3yw8TF7Nv1ccXKWdmK.jpg")',
                  filter: 'saturate(0.75) brightness(0.95) contrast(1.05)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014]/85 via-[#0f1014]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-2 left-2">
                <span className="text-[9px] font-medium tracking-widest uppercase text-[#c8b8a8]/80 transition-colors duration-300 group-hover:text-[#d4c4a8]">Outboard</span>
              </div>
            </div>

            {/* Monitoring */}
            <div className="group relative aspect-square overflow-hidden rounded-lg bg-[#1c1810]/80 border border-[#3a3530]/40 cursor-pointer transition-all duration-300 hover:border-[#4a4540]/60">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                style={{
                  backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sv2_4-FcLCt2J9LHMJsXHEILtup2DQwZFuV1.jpg")',
                  filter: 'saturate(0.75) brightness(0.95) contrast(1.05)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014]/85 via-[#0f1014]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-2 left-2">
                <span className="text-[9px] font-medium tracking-widest uppercase text-[#c8b8a8]/80 transition-colors duration-300 group-hover:text-[#d4c4a8]">Instrument</span>
              </div>
            </div>
          </div>

          {/* Premium CTA Button */}
          <a
            href="https://united-studio.com/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg border border-[#4a4035]/70 bg-[#1a1714]/70 px-6 py-4 text-sm text-[#c8b8a8] shadow-[0_0_24px_rgba(180,145,90,0.06)] backdrop-blur-sm transition-all duration-300 hover:bg-[#d4c4a8] hover:text-[#1a1714] hover:border-[#d4c4a8] hover:shadow-[0_4px_28px_rgba(180,145,90,0.18)] hover:-translate-y-0.5"
          >
            <span className="font-medium">機材・設備について</span>
            <span className="text-[#8a8070] group-hover:text-[#1a1714] transition-colors duration-300">→</span>
            <span className="text-xs text-[#8a8070] group-hover:text-[#1a1714]/70 transition-colors duration-300">Studio Details</span>
          </a>
        </div>

        {/* MESSAGE Section - Premium Closing Card */}
        <div className="pt-16 border-t border-[#3a3530]/50">
          {/* Premium Card Container */}
          <div 
            className="relative overflow-hidden rounded-2xl p-8 pb-[150px] md:p-12 md:pb-[150px]"
            style={{
              background: 'linear-gradient(135deg, rgba(25,25,30,1), rgba(35,35,45,1))',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute top-0 right-0 h-32 w-48 rounded-full blur-[80px] opacity-30"
              style={{ background: 'radial-gradient(ellipse, rgba(180, 145, 90, 0.2) 0%, transparent 70%)' }}
            />

            {/* Section label */}
            <div className="relative z-10 mb-10 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#a09080]" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase text-[#a09080]">
                Message
              </span>
            </div>

            {/* Main content */}
            <div className="relative z-10 space-y-10">
              {/* Milestone note - emphasized as focal point */}
              <div className="py-2">
                <p className="text-xl font-medium tracking-wide text-[#d4c4a8] md:text-2xl">
                  ご利用者数が1,000名を超えました
                </p>
              </div>

              {/* Body paragraphs - calm and secondary */}
              <div className="space-y-7 text-base leading-relaxed text-[#9a918a]">
                <p>
                  「スタジオってちょっと不安…」そんな気持ちで来られた方も、録音を終える頃には「とっても楽しかった」と言っていただけています。
                </p>
                <p>
                  自分の声に自信がなかった方も、録音した声を聴いて「こんなにいい感じになるんだ」と感じていただけます。
                </p>
                <p>
                  はじめての方からプロフェッショナル用途まで、それぞれに合わせてサポートいたします。
                  <br />
                  レコーディングの楽しさを、ぜひ体験してみてください。
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8 text-sm text-[#b8a898]">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8a8070]">ユナイテッドスタジオ（株）</p>
                <p className="mt-2 text-base text-[#c8b8a8]">藤木　哲</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
