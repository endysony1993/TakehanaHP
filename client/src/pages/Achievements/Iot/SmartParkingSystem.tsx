
import { assetPath } from "../../../utils/assetPath";

const galleryImages: string[] = [1,2,3].map(n => assetPath(`Iot/SmartParkingSystem/${n}.png`));

export default function SmartParkingSystem() {
	return (
		<section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-6xl mx-auto px-6">
				{/* Title */}
				<h2 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] mb-6 text-center">
					スマートパーキング
				</h2>

				{/* Intro (short) */}
				<div className="text-center">
					<p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
						AI車番認識とセンサーで入出庫・空車状況を自動化し、料金計時から多様な決済までをシームレスに提供するスマートパーキングです。運営はダッシュボードで稼働・売上を可視化し、未払い抑止や運用標準化を実現。待ち時間の削減、回転率向上、利用者にとってスムーズで透明な体験をもたらします。
					</p>
				</div>

				{/* Gallery */}
				<div className="mt-14">
					
					{galleryImages.length > 0 ? (
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{galleryImages.map((src, idx) => (
								<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
									<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
										<img
											src={src}
											alt={`SmartParkingSystem ギャラリー画像 ${idx + 1}`}
											className="h-full max-h-full w-auto max-w-full object-contain"
											loading="lazy"
										/>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="mt-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{Array.from({ length: 3 }).map((_, i) => (
									<div
										key={i}
										className="rounded-xl border-2 border-dashed border-gray-300 bg-white text-center text-gray-500 h-56 sm:h-64 lg:h-72 flex flex-col items-center justify-center"
									>
										<p className="font-medium">No Image</p>
										<p className="text-sm mt-1">/Iot/SmartParkingSystem/ に画像を追加してください</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Sections (3 cards) */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* 現状と課題 */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col">
						<h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">駐車場の現状と課題</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							<li>人工コストが高い／人力管理によるミス・非効率</li>
							<li>料金の回収漏れ・未払いが発生しやすく、正確な収益管理が困難となるケースがあります。</li>
							<li>空車情報のリアルタイム把握が困難</li>
							<li>行政・交通システムと連携できない</li>
							<li>車室探索に時間を要し、満足度が低い</li>
						</ul>
					</div>

					{/* 解決策 */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col">
						<h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">スマートパーキングの解決策</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							<li>ALPRで入出庫を自動化、カメラ・地磁気で車室監視</li>
							<li>自動計時・自動課金と複数決済方式に対応</li>
							<li>Web/アプリ/ミニアプリで案内・料金確認・決済</li>
							<li>管理プラットフォームで分析・料金管理・可視化</li>
							<li>行政システムとAPI連携（未払い通知・データ共有）</li>
							<li>オペレーション自動化で人件費削減と精度向上</li>
						</ul>
					</div>

					{/* 導入効果 */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col">
						<h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">導入効果</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							<li>入出場時の待ち時間を大幅に削減し、利用者をスムーズに誘導できる環境を実現します。</li>
							<li>徴収の完全自動化で売上最大化・漏れ防止</li>
							<li>運用省力化・標準化とKPIの継続改善</li>
							<li>簡単・透明・迅速なユーザー体験</li>
							<li>都市交通データと統合しスマートシティに貢献</li>
						</ul>
					</div>
				</div>

				{/* CTA */}
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
								href={`${import.meta.env.BASE_URL}achievements/iot`}
								className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								他の事例を見る
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

