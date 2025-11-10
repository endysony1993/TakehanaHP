// 見積管理システム（Quotation）概要ページ
// 画像の追加方法: `client/public/images/quotation/` に配置し、必要に応じて後でギャラリー領域を拡張可能。

export default function QuotationIntro() {
// ギャラリーに後で画像を追加するためのプレースホルダー（現在未使用）
// const galleryImages: string[] = []

	const functions = [
		{
			title: '見積構成のテンプレート化',
			desc: '過去受注/失注データを基に構成・原価要素・利益率をテンプレート化し、作成スピードと精度を向上。',
		},
		{
			title: '原価・粗利の自動計算',
			desc: '部材・工数・外注費・物流費などを集計し、粗利率や利益額をリアルタイム算出。',
		},
		{
			title: 'バージョン管理と承認ワークフロー',
			desc: '改訂履歴を保持し、差分比較と権限承認（営業→管理→役員）を統合管理。',
		},
		{
			title: '価格調整と条件シミュレーション',
			desc: '数量/期間/支払条件/為替/キャンペーンなどの要素を変更し、最適価格帯を探索。',
		},
		{
			title: 'リスク・例外検知',
			desc: '最低利益率割れ・在庫制約・供給リードタイム・法令/規約違反要素を警告。',
		},
		{
			title: '提出品質の標準化',
			desc: 'レイアウト・用語統一・添付資料チェックリストを組み込み、顧客向け提出物の品質を均一化。',
		},
	]

	const dataModel = [
		'案件（顧客・業界・ステータス・期待受注時期）',
		'構成アイテム（品目・型番・数量・単価・原価・在庫状況）',
		'コスト要素（材料・工数・外注・物流・間接費配賦）',
		'価格調整要素（割引種別・調整率・条件適用期間）',
		'承認履歴（段階・承認者・日時・コメント）',
		'見積バージョン（版番号・作成者・比較マーカー）',
		'リスクフラグ（利益率閾値・供給制約・法令チェック）',
	]

	const pricingLogicSteps = [
		'原価構成の集計（品目原価 + 工数 + 外注 + 物流 + 間接費配賦）',
		'利益率/利益額の初期算出（標準利益率テーブル参照）',
		'条件/数量/期間に応じた利益率/単価の再計算',
		'最低利益率・利益額閾値チェック（警告/再調整）',
		'競合価格/市場価格帯の参考値補正（オプション）',
		'承認フロー（例: 営業 < 15% 粗利 → 管理 10–15% → 役員 < 10%）',
		'バージョン確定と提出物生成（PDF/Excel/顧客ポータル）',
	]

	const operationalPoints = [
		'テンプレート更新のガバナンス（定期レビューと差分承認）',
		'最低利益率閾値の年次見直し（原価変動/市場環境反映）',
		'承認 SLA の設定（遅延が案件機会を損なわないように）',
		'例外案件（戦略案件/大型受注/在庫処分）の別管理ルート',
		'為替・仕入価格の自動更新（外部 API or ERP 連携）',
		'監査対応のための改訂履歴完全保持',
	]

	const kpis = [
		'見積作成リードタイム（初回案 / 最終版）',
		'粗利率中央値 / 閾値割れ件数',
		'承認ステップごとの平均滞留時間',
		'提出後受注転換率（Win Rate）',
		'テンプレート利用率（標準 vs 例外）',
		'再見積発生率（仕様変更 / ミス / 価格調整）',
	]

	const risks = [
		{ risk: '最低利益率割れの常態化', control: '自動警告 + 承認強制 + 月次レビュー' },
		{ risk: 'バージョン混同による誤提出', control: '版番号自動付番 + 廃止版ロック + 差分比較 UI' },
		{ risk: '属人的な価格調整', control: '調整履歴の全記録 + 権限ロールの明確化' },
		{ risk: '原価更新遅れによる利益乖離', control: '原価マスタ更新リマインダー + 更新日付監査' },
		{ risk: '承認遅延による機会損失', control: 'SLA アラート + 代替承認者設定' },
		{ risk: '不正な条件適用', control: '条件適用ルールの事前定義 + 例外理由強制入力' },
	]

	const checklist = [
		'原価マスタは最新か（更新日付確認）',
		'利益率閾値を下回っていないか',
		'数量・型番・構成整合性はあるか',
		'例外条件（特価/キャンペーン）の承認記録はあるか',
		'提出フォーマット（レイアウト/用語）が標準か',
		'顧客要件の漏れ（納期/支払条件/保守範囲）がないか',
		'過去類似案件との差異（価格/構成）が説明可能か',
	]

	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] text-center">見積管理システム（Quotation）</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						受注獲得確度を高めつつ、利益確保と統制を両立する見積管理の標準プラットフォームです。スピード・精度・再利用性・監査性を一体で強化します。
					</p>

					{/* ギャラリー プレースホルダー */}
					{/* <div className="mt-10">
						{galleryImages.length > 0 ? (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{galleryImages.map((src, idx) => (
									<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
										<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
											<img src={src} alt={`Quotation 画像 ${idx + 1}`} className="h-full max-h-full w-auto max-w-full object-contain" />
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
								{Array.from({ length: 3 }).map((_, i) => (
									<div
										key={i}
										className="rounded-xl border-2 border-dashed border-gray-300 bg-white text-center text-gray-500 h-56 sm:h-64 lg:h-72 flex flex-col items-center justify-center"
									>
										<p className="font-medium">画像なし</p>
										<p className="text-sm mt-1">/images/quotation/ に追加し、配列を編集してください</p>
									</div>
								))}
							</div>
						)}
					</div> */}
				</div>
			</section>

			{/* 主な機能 */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">主な機能</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					{functions.map(f => (
						<div key={f.title} className="bg-white rounded-xl border p-6">
							<h3 className="font-semibold mb-2">{f.title}</h3>
							<p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* データモデル */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">データモデル</h2>

				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{dataModel.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</section>

			{/* 価格決定ロジック */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">価格決定ロジック</h2>
				<ol className="mt-6 space-y-3 text-gray-800 list-decimal list-inside">
					{pricingLogicSteps.map(step => (
						<li key={step}>{step}</li>
					))}
				</ol>
			</section>

			{/* 運用ポイント */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">運用上の重要ポイント</h2>
				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{operationalPoints.map(p => (
						<li key={p}>{p}</li>
					))}
				</ul>
			</section>

			{/* KPI */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">KPI</h2>
				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{kpis.map(k => (
						<li key={k}>{k}</li>
					))}
				</ul>
			</section>

			{/* リスクとコントロール */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">リスクとコントロール</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					{risks.map(r => (
						<div key={r.risk} className="bg-white rounded-xl border p-6">
							<h3 className="font-semibold mb-1">{r.risk}</h3>
							<p className="text-gray-700 text-sm">対策: {r.control}</p>
						</div>
					))}
				</div>
			</section>

			{/* チェックリスト */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">提出前チェックリスト</h2>
				<ul className="mt-6 space-y-2 list-disc list-inside text-gray-800">
					{checklist.map(c => (
						<li key={c}>{c}</li>
					))}
				</ul>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#31B4A8]">見積管理システムの詳細資料・デモのご依頼</h3>
					<p className="text-gray-700 mb-6">貴社の営業プロセス・製品構成に合わせて、テンプレート設計と原価連携の最適化をご提案します。</p>
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

