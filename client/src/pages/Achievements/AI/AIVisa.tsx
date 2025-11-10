import { assetPath } from "../../../utils/assetPath";
export default function AIVisa() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#31B4A8] mb-4 whitespace-normal sm:whitespace-nowrap leading-tight">
              AI Visa｜日本ビザを多言語で案内
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
              在留資格ごとの必要書類を多言語でわかりやすく整理。AIで質問できる機能と
              「高度専門職ポイント計算（HSP Points Calculator）」で、最新基準に沿った手続きをサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
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
          </div>
          <div className="flex-1 w-full">
            <img
              src={assetPath('AI/AIVisa/1.png')}
              alt="AI Visa 画面イメージ"
              className="w-full rounded-xl shadow-md object-cover aspect-video"
              loading="eager"
            />
          </div>
        </div>

        {/* 課題 / ソリューション / 技術 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">ユーザー/運営の課題</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              <li>最新の日本ビザ情報を多言語で正確に案内したい</li>
              <li>AIでの「質問」による自己解決率を高めたい</li>
              <li>制度改正に素早く追従し、誤案内を防ぎたい</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">ソリューション</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              <li>在留資格別の要件・必要書類を構造化し、多言語で提供</li>
              <li>AIでの質問機能（自動言語判定）で疑問を即時解消</li>
              <li>「高度専門職ポイント計算（HSP）」で要件の目安を可視化</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">技術・スキル</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              <li>HTML / CSS</li>
              <li>Tailwind CSS</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

        {/* 機能ハイライト */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#31B4A8] mb-4 text-center">主な機能</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'AIで質問（自動言語判定）',
              '在留資格別の要件・必要書類ガイド',
              '書類チェック用テンプレートの案内',
              '会話履歴によるコンテキスト保持',
              '管理画面（コンテンツ/用語集/言語別運用）',
              '高度専門職ポイント計算（HSP）',
            ].map((f) => (
              <div key={f} className="p-4 rounded-lg bg-gray-50 text-gray-800 text-center">
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* ギャラリー（プレースホルダ） */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#31B4A8] mb-4 text-center">画面イメージ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[2,3,4].map((n, idx) => (
              <img
                key={n}
                src={assetPath(`AI/AIVisa/${n}.png`)}
                alt={`AI Visa 画面イメージ ${idx + 2}`}
                className="w-full aspect-video rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* 効果 */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          {[
            { t: '運用コストの削減', d: '多言語での自動回答とガイド整備で問い合わせ負荷を軽減。' },
            { t: '自己解決率の向上', d: 'AIでの質問機能と構造化データにより、一次回答での解決を促進。' },
            { t: '誤案内の抑制', d: '出典提示と更新管理により、最新基準への準拠を担保。' },
          ].map((b) => (
            <div key={b.t} className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-lg font-semibold text-[#31B4A8] mb-2 text-center">{b.t}</h3>
              <p className="text-gray-700">{b.d}</p>
            </div>
          ))}
        </div>

          {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              お問い合わせ
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/ai`}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              他の事例を見る
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
