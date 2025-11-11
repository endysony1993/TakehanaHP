import { assetPath } from "../../../utils/assetPath";
export default function CarGpt() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] mb-4">
              自動車サービスGPT
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              大規模言語モデルによる車載サービスアシスタント
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              マルチエンド接続（ミニアプリ／APP／車載）・機能ガイド・マスキング済み車両データ連携
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
                className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
              >
                お問い合わせ
              </a>
              <a
                href={`${import.meta.env.BASE_URL}achievements/ai`}
                className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
              >
                他のAI事例を見る
              </a>
            </div>
            <br />
          </div>
          <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
            <img src={assetPath('AI/CarGpt/car-gpt-hero.png')} alt="Car GPT Hero" className="w-full max-w-md md:max-w-2xl rounded-2xl shadow-md object-cover transition-transform duration-200 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 課題 Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31B4A8] mb-10 text-center">直面する課題</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              "ドライバーの情報が分散し、検索が煩雑",
              "アフターサービス対応の効率が低い",
              "複数チャネルのサービスが統合されていない",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center text-gray-800 font-semibold transition-transform transform hover:scale-105">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ソリューション Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31B4A8] mb-8 text-center">解決策</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            自動車サービスGPTは、大規模言語モデルによる自然言語対話を通じて、<br className="hidden sm:inline" />
            車載システム・アプリ・ミニプログラムを一体化。<br className="hidden sm:inline" />
            ユーザーが車両機能の説明や使用ガイド、サービス情報を素早く取得できるよう支援します。
          </p>
        </div>
      </section>

      {/* ▼ 追加：マルチエンド対応（画像ギャラリー） */}
      <section className="py-16 px-6 bg-gray-50" id="endpoints">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#31B4A8] mb-3">マルチエンド対応</h3>
          <p className="text-gray-600 mb-10">
            ミニアプリ・スマートフォンアプリ・車載システムを連携し、どこからでも同じ体験を提供します。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(n => (
              <img key={n} src={assetPath(`AI/CarGpt/${n}.png`)} alt={`Car GPT 画面 ${n}`} className="rounded-lg shadow-md" loading="lazy" />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">ミニアプリ・APP・車載アプリの統合UI例</p>
        </div>
      </section>

      {/* 機能 Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31B4A8] mb-10 text-center">主な機能</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "複数ラウンドのQA／意図認識",
              "車両機能検索／使用ガイド",
              "マスキング済みデータの安全連携",
              "サービス予約／チケット管理の自動化",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center text-[#31B4A8] font-semibold transition-transform transform hover:scale-105">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成果 Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#31B4A8] mb-10 text-center">導入効果（例）</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {[
              { label: "検索時間", value: "-42%" },
              { label: "自己解決率", value: "+35%" },
              { label: "更新率", value: "+18%" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md px-10 py-8 text-center transition-transform transform hover:scale-105">
                <div className="text-3xl font-bold text-[#31B4A8] mb-2">{item.value}</div>
                <div className="text-gray-700 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              お問い合わせ
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/iot`}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              他の事例を見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
