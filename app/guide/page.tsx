'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronDown, MapPin, Clock, CreditCard, CheckCircle2, Calendar, MapPinIcon } from 'lucide-react'

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ナビゲーション背景 */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 transform -translate-y-full transition-transform duration-300" style={{ transform: isSticky ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex gap-6 overflow-x-auto">
          <button onClick={() => scrollToSection('overview')} className={`whitespace-nowrap text-sm font-medium transition-colors ${activeSection === 'overview' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>概要</button>
          <button onClick={() => scrollToSection('flow')} className={`whitespace-nowrap text-sm font-medium transition-colors ${activeSection === 'flow' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>利用の流れ</button>
          <button onClick={() => scrollToSection('pricing')} className={`whitespace-nowrap text-sm font-medium transition-colors ${activeSection === 'pricing' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>料金</button>
          <button onClick={() => scrollToSection('hours')} className={`whitespace-nowrap text-sm font-medium transition-colors ${activeSection === 'hours' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>営業時間</button>
          <button onClick={() => scrollToSection('access')} className={`whitespace-nowrap text-sm font-medium transition-colors ${activeSection === 'access' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>アクセス</button>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block text-sm font-medium text-slate-500 tracking-widest uppercase mb-6">
              USI新河岸音楽工務所
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            レコーディングスタジオ
            <br />
            <span className="text-blue-600">利用ガイド</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            初めての方も安心してご利用いただけます。
          </p>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12 max-w-2xl mx-auto">
            <p className="text-slate-700 leading-relaxed mb-0">
              USI新河岸音楽工務所は東京都板橋区のレコーディングスタジオです。
              <br className="hidden sm:inline" />
              ボーカル録音、ナレーション収録、弾き語り録音、音源制作などに対応しています。
            </p>
          </div>

          {/* 特徴カード */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">料金</div>
              <div className="text-lg font-bold text-slate-900">2時間<br />14,000円</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">サービス</div>
              <div className="text-lg font-bold text-slate-900">ミックス・<br />マスタリング<br />込み</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">受取</div>
              <div className="text-lg font-bold text-slate-900">当日データ<br />持ち帰り</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">対象</div>
              <div className="text-lg font-bold text-slate-900">初心者<br />歓迎</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">キャンセル</div>
              <div className="text-lg font-bold text-slate-900">無料</div>
              <div className="text-xs text-slate-400 mt-1">※条件あり</div>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション */}
      <section id="flow" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">ご利用の流れ</h2>
          
          {/* デスクトップ水平レイアウト */}
          <div className="hidden md:block">
            <div className="relative pb-8">
              <div className="flex gap-4 items-stretch">
                {[
                  { step: '1', title: 'ご予約', desc: '予約専用サイトから24時間受付しております。' },
                  { step: '2', title: 'ご来店', desc: 'ご予約時間までにスタジオへお越しください。' },
                  { step: '3', title: 'レコーディング', desc: 'スタッフが進行をサポートいたします。' },
                  { step: '4', title: '完成データお渡し', desc: 'ミックス・マスタリング後、完成した音源をその場でお渡しします。' },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col">
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-base shadow-md">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                    </div>
                    {idx < 3 && (
                      <div className="flex items-center justify-center pt-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* モバイルタイムラインレイアウト */}
          <div className="md:hidden flex justify-center">
            <div className="space-y-8 w-full max-w-xs">
              {[
                { step: '1', title: 'ご予約', desc: '予約専用サイトから24時間受付しております。' },
                { step: '2', title: 'ご来店', desc: 'ご予約時間までにスタジオへお越しください。' },
                { step: '3', title: 'レコーディング', desc: 'スタッフが進行をサポートいたします。' },
                { step: '4', title: '完成データお渡し', desc: 'ミックス・マスタリング後、完成した音源をその場でお渡しします。' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold shadow-md">
                      {item.step}
                    </div>
                    {idx < 3 && (
                      <div className="w-1 h-16 bg-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-4 pt-1">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">料金</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">一律料金</h3>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-blue-600">2時間</div>
              <div className="text-4xl font-bold text-slate-900 mt-2">14,000円</div>
              <p className="text-slate-600 mt-2">（税込）</p>
            </div>
            <p className="text-center text-slate-700 font-semibold mb-6">料金には基本的に以下が含まれます。</p>
            <div className="flex justify-center mb-6">
              <div className="space-y-3">
                {['レコーディング', 'ピッチ修正', 'リズム修正', 'ミックス', 'マスタリング'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-md w-full bg-white rounded-lg p-6 border border-slate-200">
                <p className="text-center text-sm text-blue-700 font-medium leading-relaxed">
                  そのほかのご要望にも可能な限り対応しておりますので、<br />お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 営業時間セクション */}
      <section id="hours" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">営業時間</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 border border-slate-200 text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-slate-900 mb-6">13:00〜22:00</div>
            <div className="space-y-1 text-sm text-slate-700">
              <p className="font-medium">完全予約制</p>
              <p className="font-medium">不定休</p>
            </div>
          </div>
        </div>
      </section>

      {/* 予約変更・キャンセルセクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">予約変更・キャンセル</h2>
          <div className="space-y-6">
            <div className="max-w-2xl mx-auto bg-amber-50 rounded-lg p-8 border border-amber-200">
              <div className="flex gap-4">
                <ChevronDown className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-slate-900">予約日の2日前まで予約サイトから変更・キャンセルが可能です。</h3>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="space-y-6">
                <p className="text-lg font-semibold text-slate-900">
                  キャンセル料金はいただいておりません。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  ただし当日キャンセルまたは無断キャンセルが累計2回あった場合は、予約枠確保の都合上、以後のご利用をお断りさせていただきます。あらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お支払い方法セクション */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">お支払い方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: CreditCard, title: '現金', desc: <>スタジオでお支払い<br />ください</> },
              { icon: CreditCard, title: 'クレジットカード', desc: '主要なカードに対応' },
              { icon: CreditCard, title: '各種電子決済', desc: 'PayPay・Rakuten Payなど対応' },
            ].map((method, idx) => {
              const Icon = method.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <Icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 leading-snug">{method.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">アクセス</h2>
          
          {/* アクセス情報グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* 住所 */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-4">住所</h3>
                  <p className="text-base font-semibold text-slate-900 leading-relaxed">
                    〒174-0042<br />
                    東京都板橋区東坂下1-19-24<br />
                    志幸42シャンソン110号室
                  </p>
                </div>
              </div>
            </div>

            {/* 最寄駅 */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                最寄駅
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">都営三田線</p>
                  <ul className="text-sm text-slate-700 space-y-1 ml-4">
                    <li>• 志村坂上駅 A3出口 徒歩12分</li>
                    <li>• 志村三丁目駅 徒歩12分</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">JR埼京線</p>
                  <ul className="text-sm text-slate-700 space-y-1 ml-4">
                    <li>• 浮間舟渡駅 徒歩17分</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* バス */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                バス
              </h3>
              <p className="text-slate-700 leading-relaxed">
                国際興業バス<br />
                志村坂下バス停 徒歩4分
              </p>
            </div>

            {/* 駐車場 */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                駐車場
              </h3>
              <p className="text-slate-700 leading-relaxed">
                マンション敷地内コインパーキングあり
              </p>
            </div>
          </div>

          {/* Google Maps埋め込み */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8405378245586!2d139.71428632346177!3d35.74523847253568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2d3d3d3d3d%3A0x0!2z5Z2C5L6h5Yi26aSo!5e0!3m2!1sja!2sjp!4v1234567890"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-sm text-slate-600 mt-4 font-medium">
              USI新河岸音楽工務所
            </p>
          </div>

          {/* Google Mapsプレースホルダー */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-slate-100 rounded-lg h-96 border border-slate-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-500 font-medium">Google Mapsプレースホルダー</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            レコーディング予約はこちら
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            ご予約は24時間いつでも受け付けています。
            <br />
            ご不明な点がある場合は、よくある質問をご確認ください。
          </p>

          {/* ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              予約する
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ChevronDown className="h-5 w-5" />
              よくある質問を見る
            </Link>
          </div>

          <p className="text-sm text-slate-600">
            初めての方のご利用も歓迎しております。
          </p>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-12 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-slate-500">
            本内容はお知らせなく変更する場合があります。あらかじめご了承ください。
          </p>
        </div>
      </section>
    </div>
  )
}
