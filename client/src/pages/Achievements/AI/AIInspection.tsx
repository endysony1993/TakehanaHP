export default function AIInspection() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#31B4A8]">AI撮影テンプレート</h2>

      <p className="text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
        風景写真、アニメのワンシーンとの合成、スタイル化されたイラストまで、AI撮影テンプレートで一枚一枚の写真が創造性と驚きに満ちた作品になります。
      </p>

      {/* Client Request / Solution / Skills Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Client Request */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3">クライアントのご要望</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>AIを活用した新しい写真体験サービスを開発したい</li>
            <li>ユーザーが簡単に多様なテンプレートで写真を生成できる仕組みが必要</li>
            <li>高品質な合成・スタイル変換を短時間で実現したい</li>
          </ul>
        </div>
        {/* Our Solution */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3">当社のソリューション</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>AI画像合成・スタイル変換アルゴリズムを独自開発</li>
            <li>Webアプリ・スマホアプリで直感的な操作UIを設計</li>
            <li>クラウド上で高速な画像処理・保存を実現</li>
          </ul>
        </div>
        {/* Skills & Techniques */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3">技術・スキル</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>AI画像処理（GAN・スタイル変換）</li>
            <li>React/TypeScriptによるフロントエンド開発</li>
            <li>Python（FastAPI）によるAIサーバー構築</li>
            <li>クラウドインフラ（AWS/GCP）活用</li>
            <li>UI/UX設計・多言語対応</li>
          </ul>
        </div>
      </div>
      <br />

      {/* Template Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-12">
        {/* 1. Scenic Photo Template */}
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col">
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[500px]"
            style={{ backgroundImage: "url(/AI/AIInspection/fuji-template.jpg)" }}
            aria-label="風景写真テンプレート"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#31B4A8]">風景写真テンプレート</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              富士山、東京タワー、奈良、伏見稲荷など、日本各地の名所を背景にしたAI合成写真を作成します。
            </p>
          </div>
        </div>

        {/* 2. Cosplay Template */}
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col" >
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[500px]"
            style={{ backgroundImage: "url(/AI/AIInspection/cosplay-template.jpg)" }}
            aria-label="コスプレテンプレート"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-[#31B4A8]">コスプレテンプレート</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AIがあなたを人気キャラクターや名画の登場人物に変身させます。
            </p>
          </div>
        </div>
      </div>

          {/* 3. Anime Scene Template */}
            <div className="grid grid-cols-1 gap-8 px-6 md:px-12">
            <br />
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col">
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[600px]"
            style={{ backgroundImage: "url(/AI/AIInspection/anime-template.jpg)" }}
            aria-label="アニメ取景地テンプレート"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-[#31B4A8]">アニメ取景地テンプレート</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              「君の名は。」や「千と千尋の神隠し」など、人気アニメの舞台でキャラクターと一緒に撮影したような合成写真を作成します。
            </p>
          </div>
        </div>
        </div>

      {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              お問い合わせ
            </a>
            <a
              href="/achievements/ai"
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              他の事例を見る
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
