// WMS（倉庫管理システム） Introduction Page
// 画像の使い方:
// 1) 画像を `client/public/images/wms/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/wms/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";
const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/wms/${n}.png`));

export default function WmsIntro() {
	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] text-center">WMS（倉庫管理システム）</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						WMSは倉庫オペレーションを統合管理し、在庫精度と業務効率を高めます。
					</p>

					{/* ギャラリー（3枚まで推奨） */}
					<div className="mt-10">
					
						{galleryImages.length > 0 ? (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
								{galleryImages.slice(0, 3).map((src, idx) => (
									<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
										<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
											<img src={src} alt={`WMS 画像 ${idx + 1}`} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
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
										<p className="text-sm mt-1">/images/wms/ にファイルを追加し、上の配列にパスを記載してください</p>
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
						<h3 className="font-semibold mb-2">在庫管理</h3>
						<p className="text-gray-700">ロット/シリアル/ロケーションを管理し、入出庫の正確性と在庫可視化を実現。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">棚卸</h3>
						<p className="text-gray-700">循環棚卸・一斉棚卸に対応し、誤差の早期是正と棚卸工数の削減を支援。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">倉庫レイアウト・電子ペーパー連携</h3>
						<p className="text-gray-700">ゾーン/棚/ロケーション設定と電子ペーパー連携で、配置と表示を一元最適化。</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">PDAによる現場作業</h3>
						<p className="text-gray-700">入庫・出庫・移動・ピッキングをPDAで効率化し、誤操作を低減。</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#31B4A8]">WMSの詳細資料・デモのご依頼</h3>
					<p className="text-gray-700 mb-6">貴社の倉庫規模・運用に合わせて、最適な導入ステップと構成をご提案します。</p>
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

