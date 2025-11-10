// MES（製造実行システム） Introduction Page
// 画像の使い方:
// 1) 画像を `client/public/images/mes/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/mes/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";
const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/mes/${n}.png`));

export default function MesIntro() {
	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] text-center">MES（製造実行システム）</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						MESは生産プロセスの透明性を高め、品質と生産性の向上を支援します。
					</p>

					{/* ギャラリー */}
					<div className="mt-10">
						
						{galleryImages.length > 0 ? (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{galleryImages.map((src, idx) => (
									<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
										<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
											<img src={src} alt={`MES 画像 ${idx + 1}`} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
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
										<p className="text-sm mt-1">/images/mes/ にファイルを追加し、上の配列にパスを記載してください</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</section>

			{/* MESの効果 */}
			{/* <section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">MESの効果</h2>
				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					<li>プロセス制御の強化</li>
					<li>製品品質の向上</li>
					<li>設備管理の強化</li>
					<li>トレーサビリティの完全化</li>
					<li>生産効率の改善</li>
					<li>継続的改善の推進</li>
				</ul>
			</section> */}

			{/* 主な機能 */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#31B4A8]">主な機能</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">工程ルート管理</h3>
						<p className="text-gray-700">品目ごとの標準ルートと代替ルートを管理し、工程の流れを可視化。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">工程仕様・SOP</h3>
						<p className="text-gray-700">作業手順・基準値・注意点を標準化し、現場のブレを抑制。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">品質検査管理・ワークベンチ</h3>
						<p className="text-gray-700">工程内/出荷検査を一元管理し、判定・記録・不適合処置を効率化。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">資材供給・裁断</h3>
						<p className="text-gray-700">現場へのタイムリーな資材投入と裁断ロスの最小化を支援。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">設備点検計画（日次／年次）</h3>
						<p className="text-gray-700">日次・年次点検の計画と履歴を管理し、稼働安定と故障予防を実現。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">工位・パラメータ管理</h3>
						<p className="text-gray-700">各工程・工位の条件やパラメータを管理し、品質の再現性を担保。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">受注処理・遅延レポート</h3>
						<p className="text-gray-700">受注の進捗と滞留/遅延を可視化し、早期の是正対応を促進。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">稼働ボード（リアルタイム状況）</h3>
						<p className="text-gray-700">ライン/工位のリアルタイム状況を見える化し、現場の即応を支援。</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#31B4A8]">MESの詳細資料・デモのご依頼</h3>
					<p className="text-gray-700 mb-6">貴社の生産形態・品質要件に合わせて、適用範囲と導入ステップをご提案します。</p>
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
			</section>
		</main>
	)
}

