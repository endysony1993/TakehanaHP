// 製品選定支援システム（概要）
// 画像の追加方法: `client/public/images/product-selection/` に配置し、必要に応じて後でギャラリー領域を拡張可能。

import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function ProductSelectionIntro() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'
	const functions = [
		{
			title: vi ? 'Tích hợp dữ liệu & phân tích' : t('pages.achievements.sm.productSelectionPage.features.integrate.title', 'Data Integration & Analytics'),
			desc: vi ? 'Tích hợp doanh số, khách hàng, thông số sản phẩm, case trước và lịch sử lỗi; định lượng quyết định lựa chọn bằng phân tích chéo.' : t('pages.achievements.sm.productSelectionPage.features.integrate.desc', 'Integrate sales, customers, product specs, past cases, and defect history; quantify selection decisions via cross-analysis.'),
		},
		{
			title: vi ? 'Tăng hiệu quả lựa chọn' : t('pages.achievements.sm.productSelectionPage.features.efficiency.title', 'Improve Selection Efficiency'),
			desc: vi ? 'Bán tự động: nhập yêu cầu → thu hẹp ứng viên → so sánh → khuyến nghị; rút ngắn thời gian đề xuất.' : t('pages.achievements.sm.productSelectionPage.features.efficiency.desc', 'Semi-automate requirements input → candidate narrowing → comparison → recommendation to shorten proposal lead time.'),
		},
		{
			title: vi ? 'Tăng cường bán hàng & phản ứng thị trường' : t('pages.achievements.sm.productSelectionPage.features.sales.title', 'Strengthen Sales & Market Response'),
			desc: vi ? 'Tham chiếu xu hướng nhu cầu, đối thủ, khung giá; đề xuất cấu hình tối ưu và cơ hội up‑sell/cross‑sell.' : t('pages.achievements.sm.productSelectionPage.features.sales.desc', 'Reference demand trends, competitors, and price bands; propose optimal configurations and upsell/cross-sell opportunities.'),
		},
		{
			title: vi ? 'Cải thiện trải nghiệm khách hàng' : t('pages.achievements.sm.productSelectionPage.features.cx.title', 'Improve Customer Experience'),
			desc: vi ? 'Trình bày ứng viên phù hợp cao và tiêu chí so sánh rõ ràng để tăng tin cậy và tốc độ quyết định.' : t('pages.achievements.sm.productSelectionPage.features.cx.desc', 'Present high-fit candidates and clear comparison criteria to boost confidence and decision speed.'),
		},
		{
			title: vi ? 'Giảm lỗi & rủi ro' : t('pages.achievements.sm.productSelectionPage.features.risk.title', 'Reduce Errors & Risk'),
			desc: vi ? 'Cảnh báo sớm thiếu thông số, không tương thích và hạn chế tồn kho/cung ứng để tránh chi phí làm lại.' : t('pages.achievements.sm.productSelectionPage.features.risk.desc', 'Early-warn spec omissions, incompatibilities, and stock/supply constraints to prevent rework costs.'),
		},
		{
			title: vi ? 'Ghép kỹ thuật & thẩm định' : t('pages.achievements.sm.productSelectionPage.features.tech.title', 'Technical Matching & Validation'),
			desc: vi ? 'Kiểm tra phù hợp kỹ thuật và khả năng mở rộng; giảm rủi ro từ PoC đến sản xuất hàng loạt.' : t('pages.achievements.sm.productSelectionPage.features.tech.desc', 'Check technical fit and future extensibility; reduce risks from PoC to mass production.'),
		},
	]

	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] text-center">{vi ? 'Hệ thống chọn sản phẩm' : t('pages.achievements.sm.productSelectionPage.title', 'Product Selection Support System')}</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						{vi ? 'Nền tảng tích hợp yêu cầu, thông số và xu hướng thị trường để nhanh chóng lựa chọn sản phẩm/cấu hình tối ưu. Cho phép kinh doanh, kỹ thuật và mua hàng ra quyết định theo chỉ số chung.' : t('pages.achievements.sm.productSelectionPage.intro', 'A platform that integrates diverse requirements, specs, and market trends to quickly select optimal products/configurations. Enables sales, engineering, and procurement to decide using shared indicators.')}
					</p>
				</div>
			</section>

			{/* 6つの機能 */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? '6 chức năng chính' : t('pages.achievements.sm.productSelectionPage.features.title', 'Six Key Functions')}</h2>
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
					<h3 className="text-xl font-semibold mb-3 text-[#0066c5]">{vi ? 'Trao đổi chi tiết & áp dụng' : t('pages.achievements.sm.productSelectionPage.cta.title', 'Details & Adoption Consultation')}</h3>
					<p className="text-gray-700 mb-6">{vi ? 'Hỗ trợ áp dụng theo giai đoạn từ định nghĩa yêu cầu → dựng môi trường đánh giá → triển khai vận hành. Liên hệ để bắt đầu.' : t('pages.achievements.sm.productSelectionPage.cta.desc', 'We support phased adoption from requirements definition to evaluation environment setup to production rollout. Contact us to start.')}</p>
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

