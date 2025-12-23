// MES（製造実行システム） Introduction Page
// 画像の使い方:
// 1) 画像を `client/public/images/mes/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/mes/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/mes/${n}.png`));

export default function MesIntro() {
	const { t } = useT()
	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] text-center">{t('pages.achievements.sm.mesPage.title', 'MES — Manufacturing Execution System')}</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						{t('pages.achievements.sm.mesPage.intro', 'MES enhances production transparency and supports improvements in quality and productivity.')}
					</p>

					{/* ギャラリー */}
					<div className="mt-10">
						
						{galleryImages.length > 0 ? (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{galleryImages.map((src, idx) => (
									<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
										<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
											<img src={src} alt={t('pages.achievements.sm.mesPage.galleryAlt', `MES image ${idx + 1}`)} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
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
										<p className="font-medium">{t('pages.achievements.sm.mesPage.noImage', 'No image')}</p>
										<p className="text-sm mt-1">{t('pages.achievements.sm.mesPage.addHint', 'Add files under /SmartManufacturing/mes/ and list them in the array above.')}</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</section>

			{/* MESの効果 */}
			{/* <section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">MESの効果</h2>
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
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{t('pages.achievements.sm.mesPage.features.title', 'Key Features')}</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.route.title', 'Process Route Management')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.route.desc', 'Manage standard and alternative routes per item to visualize process flow.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.sop.title', 'Work Instructions & SOP')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.sop.desc', 'Standardize procedures, control limits, and cautions to reduce variability on the floor.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.qa.title', 'Quality Inspection & Workbench')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.qa.desc', 'Centralize in-process and shipment inspections; streamline judgments, records, and nonconformance handling.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.material.title', 'Material Supply & Cutting')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.material.desc', 'Support timely supply to the shop floor and minimize cutting loss.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.maintenance.title', 'Equipment Inspection Plan (Daily/Annual)')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.maintenance.desc', 'Manage plans and history to stabilize operations and prevent failures.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.params.title', 'Workstation & Parameter Management')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.params.desc', 'Manage conditions and parameters per process/workstation to ensure repeatable quality.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.orders.title', 'Order Progress & Delay Reports')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.orders.desc', 'Visualize progress and backlogs/delays with alerts to drive early corrective actions.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{t('pages.achievements.sm.mesPage.features.operation.title', 'Operations Board (Real-time)')}</h3>
						<p className="text-gray-700">{t('pages.achievements.sm.mesPage.features.operation.desc', 'Visualize real-time status across lines/workstations to support immediate response on the floor.')}</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#0066c5]">{t('pages.achievements.sm.mesPage.cta.title', 'Request MES materials & demo')}</h3>
					<p className="text-gray-700 mb-6">{t('pages.achievements.sm.mesPage.cta.desc', 'We tailor scope and rollout steps to your production model and quality requirements.')}</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<a
								href={`${import.meta.env.BASE_URL}#contact`}
								onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
								className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								{t('cta.contact', 'Contact Us')}
							</a>
							<a
								href={`${import.meta.env.BASE_URL}achievements/smart-manufacturing`}
								className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								{t('cta.moreCases', 'See More Cases')}
							</a>
						</div>
				</div>
			</section>
		</main>
	)
}

