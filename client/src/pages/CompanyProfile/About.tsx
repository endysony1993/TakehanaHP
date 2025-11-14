
export default function About() {
  return (
    <section className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">会社概要</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
          {/* 会社イメージ画像（後で差し替え） */}
          {/* <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              会社イメージ
            </div>
          </div> */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold text-[#0066c5] mb-3">竹華ジャパン株式会社について</h2>
          
            {/* 会社情報カード（企業向けクリーンスタイル） */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
              <dl className="space-y-3 text-sm">
                {[
                  { label: '会社名', value: '竹華ジャパン株式会社' },
                  { label: '設立', value: '2022年' },
                  { label: '資本金', value: '500万円' },
                  { label: '代表者', value: '贺鑫' },
                  { label: '所在地', value: '〒220-0004 神奈川県横浜市西区北幸一丁目11番1号 水信ビル7階' },
                  { label: '事業内容', value: 'AI・IoT・業務システム、DXコンサル、オフショア/オンサイト開発' },
                  { label: '関連会社', value: '大連竹華科技有限公司（中国本社）' }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[9rem_1fr] md:grid-cols-[8rem_1fr] lg:grid-cols-[7rem_1fr] gap-x-1 items-start"
                  >
                    <dt className="text-gray-700 font-semibold">{item.label}</dt>
                    <dd className="text-gray-700 leading-relaxed">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#0066c5] mb-3">企業理念</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            「技術で未来をつなぐ」—— 私たちは、最先端のIT技術とグローバルな視点で、お客様・社会・社員の持続的な成長に貢献します。
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#0066c5] mb-3">沿革</h2>
          <ul className="pl-5 text-gray-700 text-sm space-y-1">
            {[
              '2016年：中国本社（大連竹華科技有限公司）設立',
              '2018年：AI・IoT分野の体制強化',
              '2021年：DXコンサル事業拡大',
              '2022年：竹華ジャパン株式会社設立'
            ].map(text => (
              <li key={text} className="relative">
                <span className="absolute -left-5 text-[#0066c5]">•</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
