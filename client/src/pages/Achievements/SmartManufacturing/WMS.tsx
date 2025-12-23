// WMS（倉庫管理システム） Introduction Page
// 画像の使い方:
// 1) 画像を `client/public/images/wms/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/wms/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'
const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/wms/${n}.png`));

export default function WmsIntro() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'
	const VI = {
		title: 'WMS — Hệ thống quản lý kho',
		intro: 'WMS hợp nhất vận hành kho để nâng độ chính xác tồn kho và hiệu quả vận hành.',
		galleryAltBase: 'Ảnh WMS',
		featuresTitle: 'Tính năng chính',
		inventoryTitle: 'Quản lý tồn kho',
		inventoryDesc: 'Quản lý lô/sê‑ri/vị trí; đảm bảo nhập/xuất chính xác và minh bạch tồn kho.',
		stocktakeTitle: 'Kiểm kê',
		stocktakeDesc: 'Hỗ trợ kiểm kê vòng và kiểm kê toàn bộ; phát hiện chênh lệch sớm và giảm công sức.',
		layoutTitle: 'Bố cục kho & giấy điện tử',
		layoutDesc: 'Tối ưu bố trí qua vùng/kệ/vị trí; tích hợp hiển thị bằng e‑paper.',
		pdaTitle: 'Vận hành hiện trường bằng PDA',
		pdaDesc: 'Tăng tốc nhập, xuất, di chuyển và picking qua PDA; giảm thao tác sai.',
		ctaTitle: 'Yêu cầu tài liệu & demo WMS',
		ctaDesc: 'Điều chỉnh bước triển khai và cấu hình phù hợp quy mô kho và vận hành của bạn.',
	}
	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] text-center">{vi ? VI.title : t('pages.achievements.sm.wmsPage.title', 'WMS — Warehouse Management System')}</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						{vi ? VI.intro : t('pages.achievements.sm.wmsPage.intro', 'WMS unifies warehouse operations to improve inventory accuracy and operational efficiency.')}
					</p>

					{/* ギャラリー（3枚まで推奨） */}
					<div className="mt-10">
					
						{galleryImages.length > 0 ? (
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
								{galleryImages.slice(0, 3).map((src, idx) => (
									<div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
										<div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
											<img src={src} alt={vi ? `${VI.galleryAltBase} ${idx + 1}` : t('pages.achievements.sm.wmsPage.galleryAlt', `WMS image ${idx + 1}`)} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
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
										<p className="font-medium">{vi ? 'Chưa có ảnh' : t('pages.achievements.sm.wmsPage.noImage', 'No image')}</p>
										<p className="text-sm mt-1">{vi ? 'Thêm ảnh vào /SmartManufacturing/wms/ và liệt kê đường dẫn trong mảng phía trên.' : t('pages.achievements.sm.wmsPage.addHint', 'Add files under /SmartManufacturing/wms/ and list them in the array above.')}</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</section>

			{/* 主な機能 */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.featuresTitle : t('pages.achievements.sm.wmsPage.features.title', 'Key Features')}</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{vi ? VI.inventoryTitle : t('pages.achievements.sm.wmsPage.features.inventory.title', 'Inventory Management')}</h3>
						<p className="text-gray-700">{vi ? VI.inventoryDesc : t('pages.achievements.sm.wmsPage.features.inventory.desc', 'Manage lot/serial/location; ensure accurate inbound/outbound and inventory visibility.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{vi ? VI.stocktakeTitle : t('pages.achievements.sm.wmsPage.features.stocktake.title', 'Stocktaking')}</h3>
						<p className="text-gray-700">{vi ? VI.stocktakeDesc : t('pages.achievements.sm.wmsPage.features.stocktake.desc', 'Support cycle counts and full counts; correct discrepancies early and reduce effort.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{vi ? VI.layoutTitle : t('pages.achievements.sm.wmsPage.features.layout.title', 'Warehouse Layout & E‑paper')}</h3>
						<p className="text-gray-700">{vi ? VI.layoutDesc : t('pages.achievements.sm.wmsPage.features.layout.desc', 'Optimize placement and display via zone/shelf/location settings integrated with e‑paper.')}</p>
					</div>
					<div className="bg-white rounded-xl border p-6">
						<h3 className="font-semibold mb-2">{vi ? VI.pdaTitle : t('pages.achievements.sm.wmsPage.features.pda.title', 'On‑site Operations via PDA')}</h3>
						<p className="text-gray-700">{vi ? VI.pdaDesc : t('pages.achievements.sm.wmsPage.features.pda.desc', 'Streamline receiving, shipping, movements, and picking via PDA; reduce mis‑operations.')}</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
					<h3 className="text-xl font-semibold mb-3 text-[#0066c5]">{vi ? VI.ctaTitle : t('pages.achievements.sm.wmsPage.cta.title', 'Request WMS materials & demo')}</h3>
					<p className="text-gray-700 mb-6">{vi ? VI.ctaDesc : t('pages.achievements.sm.wmsPage.cta.desc', 'We tailor rollout steps and configurations to your warehouse scale and operations.')}</p>
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

