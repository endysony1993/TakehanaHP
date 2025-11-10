// APS（高度生産計画）
// 画像の使い方:
// 1) 画像を `client/public/images/aps/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/aps/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";

const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/aps/${n}.png`));

export default function ApsIntro() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
  {/* ヒーロー */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] text-center">
            APS（生産スケジューリング）
          </h1>
          <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
            APSは、生産スケジューリングの精度と効率を高めるための知的な計画ツールを提供します。
          </p>

          {/* ギャラリー */}
          <div className="mt-10">
        
            {galleryImages.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => (
                  <div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
                      <img src={src} alt={`APS 画像 ${idx + 1}`} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border-2 border-dashed border-gray-300 bg-white text-center text-gray-500 h-56 sm:h-64 lg:h-72 flex flex-col items-center justify-center"
                  >
                    <p className="font-medium">画像なし</p>
                    <p className="text-sm mt-1">/images/aps/ にファイルを追加し、上の配列にパスを記載してください</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 主な機能 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center text-[#31B4A8]">主な機能</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">受注一覧管理</h3>
            <p className="text-gray-700">納期・数量・業務ルールに基づいて受注を優先度付けし、迅速かつ妥当な計画判断を支援。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">在庫照合と欠品検知</h3>
            <p className="text-gray-700">需要と在庫をリアルタイム照合し、現場トラブルを避けるため欠品を早期に検知。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">照合結果レポート</h3>
            <p className="text-gray-700">充足・不足・調達/代替に必要なアクションを明確に示すレポートを生成。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">欠品サマリーの統合</h3>
            <p className="text-gray-700">品目/シリーズ別に欠品を統合し、補充手配やサプライヤ連携を効率化。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">生産計画管理</h3>
            <p className="text-gray-700">制約条件を考慮した実行可能な計画を作成し、現場への指示をスムーズに展開。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">能力ボード（能力の可視化）</h3>
            <p className="text-gray-700">設備・工程の負荷を可視化し、ボトルネックの特定とライン/シフト間の平準化を実現。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">受注審査</h3>
            <p className="text-gray-700">納期遵守に向けた実現可能性と優先度を確認し、アラートで遅延を未然に防止。</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">在庫アラート設定</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>共通/非共通品のロジック</li>
              <li>販売履歴の考慮</li>
              <li>警戒値下回り時の自動通知</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目的
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl font-semibold text-center text-[#31B4A8]">主な目的</h2>
        <p className="mt-4 text-gray-800 text-center max-w-3xl mx-auto">
          生産計画を最適化し、資材の備えを高め、遅延を削減します。
        </p>
      </section> */}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border p-8 text-center">
          <h3 className="text-xl font-semibold mb-3 text-[#31B4A8]">APSの詳細資料・デモのご依頼</h3>
          <p className="text-gray-700 mb-6">貴社の製品構成と運用に合わせて、最適な適用範囲と導入ステップをご提案します。</p>
       				<div className="mt-12 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                お問い合わせ
              </a>
              <a
                href={`${import.meta.env.BASE_URL}achievements/smart-manufacturing`}
                className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                他の事例を見る
              </a>
						</div>
					</div>
				</div>
        </div>
      </section>
    </main>
  )
}
