// 製品選定支援システム（概要）
// 画像の追加方法: `client/public/images/product-selection/` に配置し、必要に応じて後でギャラリー領域を拡張可能。

export default function ProductSelectionIntro() {
	const functions = [
		{
			title: 'データ統合・分析',
			desc: '営業・顧客・製品仕様・過去案件・不具合履歴などを統合し、横断分析で選定判断を定量化。',
		},
		{
			title: '選定効率の向上',
			desc: '要件入力→候補絞り込み→比較→推奨までを半自動化し、提案リードタイムを短縮。',
		},
		{
			title: '販売支援・市場対応力の強化',
			desc: '需要トレンド・競合情報・価格帯を参照し、最適構成とアップセル/クロスセル機会を提示。',
		},
		{
			title: '顧客体験の向上',
			desc: '適合率の高い候補提示と明確な比較観点により、納得性と意思決定スピードを向上。',
		},
		{
			title: 'ミスとリスクの削減',
			desc: '仕様抜け・互換性不一致・在庫/供給制約を早期警告し、再提案コストを抑制。',
		},
		{
			title: '技術マッチング・検証支援',
			desc: '構成要素の技術適合性・将来拡張性をチェックし、PoC～量産移行のリスクを低減。',
		},
	]

	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] text-center">製品選定支援システム</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						多様化する要件・仕様・市場動向を統合分析し、最適な製品/構成を迅速に選定するための支援プラットフォームです。営業・技術・調達が共通指標で意思決定できる環境を整備します。
					</p>
				</div>
			</section>

			{/* 6つの機能 */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">6つの機能</h2>
				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{functions.map(f => (
						<div key={f.title} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
							<h3 className="font-semibold text-lg  mb-2">{f.title}</h3>
							<p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#31B4A8]">詳細・導入相談</h3>
					<p className="text-gray-700 mb-6">要件定義～評価環境整備～本番展開まで段階的な導入をご支援します。まずはお気軽にお問い合わせください。</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<a
								href="/#contact"
								className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								お問い合わせ
							</a>
							<a
								href="/achievements/smart-manufacturing"
								className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								他の事例を見る
							</a>
						</div>
				</div>
			</section>
		</main>
	)
}

