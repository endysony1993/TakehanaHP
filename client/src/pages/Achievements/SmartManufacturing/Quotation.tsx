// 見積管理システム（Quotation）概要ページ
// 画像の追加方法: `client/public/images/quotation/` に配置し、必要に応じて後でギャラリー領域を拡張可能。

import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function QuotationIntro() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'

	const VI = {
		title: 'Hệ thống quản lý báo giá',
		intro:
			'Nền tảng báo giá tiêu chuẩn giúp tăng khả năng trúng thầu đồng thời đảm bảo lợi nhuận và kiểm soát. Tăng tốc độ, độ chính xác, khả năng tái sử dụng và kiểm toán.',
		featuresTitle: 'Tính năng chính',
		features: [
			{
				title: 'Chuẩn hóa cấu trúc báo giá',
				desc:
					'Chuẩn hóa cấu trúc, thành phần chi phí, tỷ suất lợi nhuận từ dữ liệu thắng/thua trước đây để tăng tốc độ và độ chính xác.',
			},
			{
				title: 'Tự động tính chi phí & lợi nhuận',
				desc:
					'Tổng hợp vật tư, nhân công, thuê ngoài, logistics để tính tỷ suất lợi nhuận và lợi nhuận theo thời gian thực.',
			},
			{
				title: 'Quản lý phiên bản & quy trình phê duyệt',
				desc:
					'Lưu lịch sử chỉnh sửa, so sánh chênh lệch và quản lý phê duyệt theo vai trò (Kinh doanh → Quản lý → Lãnh đạo).',
			},
			{
				title: 'Điều chỉnh giá & mô phỏng điều kiện',
				desc:
					'Điều chỉnh số lượng/kỳ hạn/thanh toán/tỷ giá/khuyến mãi để tìm ra mức giá tối ưu.',
			},
			{
				title: 'Phát hiện rủi ro/ngoại lệ',
				desc:
					'Cảnh báo vượt ngưỡng lợi nhuận, hạn chế tồn kho, thời gian cung ứng, và vấn đề tuân thủ.',
			},
			{
				title: 'Chuẩn hóa chất lượng hồ sơ gửi',
				desc:
					'Thống nhất bố cục/thuật ngữ và checklist tài liệu đính kèm để chuẩn hóa hồ sơ gửi cho khách hàng.',
			},
		],
		dataTitle: 'Mô hình dữ liệu',
		dataModel: [
			'Cơ hội (khách hàng, ngành, trạng thái, thời điểm kỳ vọng)',
			'Hạng mục (mã, model, SL, đơn giá, giá vốn, tồn kho)',
			'Thành phần chi phí (vật tư, nhân công, thuê ngoài, logistics, chi phí chung)',
			'Yếu tố điều chỉnh (loại chiết khấu, tỷ lệ, thời hạn áp dụng)',
			'Lịch sử phê duyệt (giai đoạn, người duyệt, thời gian, ghi chú)',
			'Phiên bản báo giá (số, người tạo, đánh dấu so sánh)',
			'Cờ rủi ro (ngưỡng lợi nhuận, hạn chế cung ứng, tuân thủ)',
		],
		logicTitle: 'Logic định giá',
		logicSteps: [
			'Tổng hợp thành phần chi phí (giá vốn hạng mục + nhân công + thuê ngoài + logistics + chi phí chung)',
			'Tính ban đầu lợi nhuận/tỷ suất (tham chiếu bảng tỷ suất chuẩn)',
			'Tính lại theo điều kiện/số lượng/kỳ hạn',
			'Kiểm tra ngưỡng lợi nhuận (cảnh báo/điều chỉnh)',
			'Điều chỉnh tham chiếu giá thị trường/cạnh tranh (tuỳ chọn)',
			'Luồng phê duyệt (VD: Kinh doanh <15% → Quản lý 10–15% → Lãnh đạo <10%)',
			'Chốt phiên bản và tạo tài liệu gửi (PDF/Excel/portal)',
		],
		opsTitle: 'Điểm vận hành quan trọng',
		ops: [
			'Quản trị cập nhật template (review định kỳ và duyệt chênh lệch)',
			'Rà soát hàng năm ngưỡng lợi nhuận (biến động chi phí/thị trường)',
			'Thiết lập SLA phê duyệt (tránh mất cơ hội do chậm trễ)',
			'Luồng riêng cho ngoại lệ (chiến lược/đơn hàng lớn/xả hàng)',
			'Tự động cập nhật tỷ giá và giá mua (API ngoài hoặc ERP)',
			'Lưu toàn bộ lịch sử chỉnh sửa phục vụ kiểm toán',
		],
		kpiTitle: 'KPIs',
		kpis: [
			'Thời gian tạo báo giá (bản đầu / cuối)',
			'Trung vị tỷ suất lợi nhuận / số lượng dưới ngưỡng',
			'Thời gian lưu trung bình theo bước phê duyệt',
			'Tỷ lệ thắng sau khi gửi',
			'Tỷ lệ dùng template (chuẩn vs ngoại lệ)',
			'Tỷ lệ báo giá lại (đổi yêu cầu / lỗi / điều chỉnh giá)',
		],
		risksTitle: 'Rủi ro & Kiểm soát',
		risks: [
			{ risk: 'Vượt ngưỡng lợi nhuận kéo dài', control: 'Cảnh báo tự động + buộc phê duyệt + review hàng tháng' },
			{ risk: 'Nhầm lẫn phiên bản dẫn đến gửi sai', control: 'Đánh số tự động + khoá phiên bản cũ + UI so sánh chênh lệch' },
			{ risk: 'Điều chỉnh giá mang tính chủ quan', control: 'Ghi nhận toàn bộ điều chỉnh + rõ ràng quyền hạn' },
			{ risk: 'Sai lệch lợi nhuận do cập nhật chi phí chậm', control: 'Nhắc cập nhật master chi phí + kiểm tra ngày cập nhật' },
			{ risk: 'Mất cơ hội do chậm phê duyệt', control: 'Cảnh báo SLA + thiết lập người duyệt thay thế' },
			{ risk: 'Áp dụng điều kiện không hợp lệ', control: 'Quy tắc định trước + bắt buộc lý do ngoại lệ' },
		],
		checkTitle: 'Checklist trước khi gửi',
		check: [
			'Master chi phí mới nhất (kiểm tra ngày cập nhật)?',
			'Không dưới ngưỡng lợi nhuận?',
			'Nhất quán về số lượng/model/cấu hình?',
			'Có bản ghi phê duyệt cho ngoại lệ (giá đặc biệt/khuyến mãi)?',
			'Định dạng gửi chuẩn (bố cục/thuật ngữ)?',
			'Không thiếu yêu cầu khách hàng (giao hàng/thanh toán/phạm vi hỗ trợ)?',
			'Giải thích được khác biệt so với case tương tự trước đây (giá/cấu hình)?',
		],
		ctaTitle: 'Yêu cầu tài liệu & demo hệ thống báo giá',
		ctaDesc:
			'Đề xuất thiết kế template và tối ưu liên kết chi phí phù hợp quy trình kinh doanh và cơ cấu sản phẩm của bạn.',
	}
// ギャラリーに後で画像を追加するためのプレースホルダー（現在未使用）
// const galleryImages: string[] = []

	const functions = vi
		? VI.features
		: [
		{
			title: t('pages.achievements.sm.quotationPage.features.template.title', 'Template Quotation Structure'),
			desc: t('pages.achievements.sm.quotationPage.features.template.desc', 'Template structure, cost elements, and margin rates based on past wins/losses to boost speed and accuracy.'),
		},
		{
			title: t('pages.achievements.sm.quotationPage.features.calc.title', 'Auto Cost & Margin Calculation'),
			desc: t('pages.achievements.sm.quotationPage.features.calc.desc', 'Aggregate materials, labor, outsourcing, logistics to compute margin rate and profit in real time.'),
		},
		{
			title: t('pages.achievements.sm.quotationPage.features.workflow.title', 'Versioning & Approval Workflow'),
			desc: t('pages.achievements.sm.quotationPage.features.workflow.desc', 'Keep revision history; compare diffs and manage role-based approvals (Sales → Manager → Executive).'),
		},
		{
			title: t('pages.achievements.sm.quotationPage.features.sim.title', 'Price Adjustment & Simulation'),
			desc: t('pages.achievements.sm.quotationPage.features.sim.desc', 'Adjust quantity/term/payment/FX/campaigns to explore optimal price bands.'),
		},
		{
			title: t('pages.achievements.sm.quotationPage.features.risk.title', 'Risk/Exception Detection'),
			desc: t('pages.achievements.sm.quotationPage.features.risk.desc', 'Warn on margin threshold breaches, stock constraints, supply lead time, and compliance issues.'),
		},
		{
			title: t('pages.achievements.sm.quotationPage.features.standard.title', 'Standardize Submission Quality'),
			desc: t('pages.achievements.sm.quotationPage.features.standard.desc', 'Unify layout/terminology and include attachment checklists to standardize customer-facing deliverables.'),
		},
	]

	const dataModel = vi
		? VI.dataModel
		: [
			t('pages.achievements.sm.quotationPage.data.case', 'Case (customer, industry, status, expected close)'),
			t('pages.achievements.sm.quotationPage.data.items', 'Items (sku, model, qty, unit price, cost, stock)'),
			t('pages.achievements.sm.quotationPage.data.costs', 'Cost elements (materials, labor, outsourcing, logistics, overhead)'),
			t('pages.achievements.sm.quotationPage.data.adjust', 'Adjustment factors (discount type, rate, applicable term)'),
			t('pages.achievements.sm.quotationPage.data.approvals', 'Approval history (stage, approver, datetime, comment)'),
			t('pages.achievements.sm.quotationPage.data.version', 'Quotation version (number, author, compare marker)'),
			t('pages.achievements.sm.quotationPage.data.risk', 'Risk flags (margin threshold, supply constraints, compliance)'),
		]

	const pricingLogicSteps = vi
		? VI.logicSteps
		: [
			t('pages.achievements.sm.quotationPage.logic.sum', 'Sum cost components (item cost + labor + outsourcing + logistics + overhead)'),
			t('pages.achievements.sm.quotationPage.logic.initial', 'Initial margin/profit calc (refer standard margin table)'),
			t('pages.achievements.sm.quotationPage.logic.recalc', 'Recalculate margin/unit price by conditions/qty/term'),
			t('pages.achievements.sm.quotationPage.logic.threshold', 'Check margin/profit thresholds (warn/re-adjust)'),
			t('pages.achievements.sm.quotationPage.logic.market', 'Optional competitor/market price band reference adjustments'),
			t('pages.achievements.sm.quotationPage.logic.flow', 'Approval flow (e.g., Sales <15% → Manager 10–15% → Executive <10%)'),
			t('pages.achievements.sm.quotationPage.logic.final', 'Finalize version and generate deliverables (PDF/Excel/portal)'),
		]

	const operationalPoints = vi
		? VI.ops
		: [
			t('pages.achievements.sm.quotationPage.ops.governance', 'Template governance (periodic reviews and diff approvals)'),
			t('pages.achievements.sm.quotationPage.ops.marginReview', 'Annual review of margin thresholds (cost changes/market conditions)'),
			t('pages.achievements.sm.quotationPage.ops.sla', 'Set approval SLAs (avoid opportunity loss due to delays)'),
			t('pages.achievements.sm.quotationPage.ops.exception', 'Separate route for exceptions (strategic/large deals/stock clearance)'),
			t('pages.achievements.sm.quotationPage.ops.fx', 'Auto-update FX and purchase prices (external API or ERP)'),
			t('pages.achievements.sm.quotationPage.ops.audit', 'Full retention of revision history for audits'),
		]

	const kpis = vi
		? VI.kpis
		: [
			t('pages.achievements.sm.quotationPage.kpi.leadTime', 'Quotation lead time (first draft / final)'),
			t('pages.achievements.sm.quotationPage.kpi.margin', 'Median margin rate / count below threshold'),
			t('pages.achievements.sm.quotationPage.kpi.stay', 'Average stay per approval step'),
			t('pages.achievements.sm.quotationPage.kpi.win', 'Post-submission win rate'),
			t('pages.achievements.sm.quotationPage.kpi.template', 'Template usage (standard vs exception)'),
			t('pages.achievements.sm.quotationPage.kpi.requote', 'Re-quotation rate (spec change / errors / price adjustments)'),
		]

	const risks = vi
		? VI.risks
		: [
			{ risk: t('pages.achievements.sm.quotationPage.risks.margin', 'Chronic margin threshold breaches'), control: t('pages.achievements.sm.quotationPage.controls.margin', 'Auto alerts + enforced approvals + monthly reviews') },
			{ risk: t('pages.achievements.sm.quotationPage.risks.version', 'Mis-submission due to version confusion'), control: t('pages.achievements.sm.quotationPage.controls.version', 'Auto numbering + lock deprecated versions + diff UI') },
			{ risk: t('pages.achievements.sm.quotationPage.risks.subjective', 'Subjective price adjustments'), control: t('pages.achievements.sm.quotationPage.controls.subjective', 'Record all adjustments + clarify role permissions') },
			{ risk: t('pages.achievements.sm.quotationPage.risks.costUpdate', 'Profit deviation due to delayed cost updates'), control: t('pages.achievements.sm.quotationPage.controls.costUpdate', 'Cost master reminders + update date audits') },
			{ risk: t('pages.achievements.sm.quotationPage.risks.delay', 'Opportunity loss due to approval delays'), control: t('pages.achievements.sm.quotationPage.controls.delay', 'SLA alerts + alternate approver setup') },
			{ risk: t('pages.achievements.sm.quotationPage.risks.invalid', 'Invalid condition application'), control: t('pages.achievements.sm.quotationPage.controls.invalid', 'Predefined rules + require exception reasons') },
		]

	const checklist = vi
		? VI.check
		: [
			t('pages.achievements.sm.quotationPage.check.cost', 'Is cost master latest (check update date)?'),
			t('pages.achievements.sm.quotationPage.check.margin', 'Not below margin thresholds?'),
			t('pages.achievements.sm.quotationPage.check.consistency', 'Consistency in quantity/model/config?'),
			t('pages.achievements.sm.quotationPage.check.exception', 'Approval records for exceptions (special price/campaign)?'),
			t('pages.achievements.sm.quotationPage.check.format', 'Standard submission format (layout/terminology)?'),
			t('pages.achievements.sm.quotationPage.check.requirements', 'No missing customer requirements (delivery/payment/support scope)?'),
			t('pages.achievements.sm.quotationPage.check.diff', 'Explainable differences vs past similar cases (price/config)?'),
		]

	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* ヒーロー */}
			<section className="bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-6xl mx-auto px-6 py-16">
					  <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] text-center">{vi ? VI.title : t('pages.achievements.sm.quotationPage.title', 'Quotation Management System')}</h1>
					<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
						{vi ? VI.intro : t('pages.achievements.sm.quotationPage.intro', 'A standard quotation platform that increases win probability while securing profits and control. Strengthens speed, accuracy, reusability, and auditability together.')}
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
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.featuresTitle : t('pages.achievements.sm.quotationPage.features.title', 'Key Features')}</h2>
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
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.dataTitle : t('pages.achievements.sm.quotationPage.data.title', 'Data Model')}</h2>

				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{dataModel.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</section>

			{/* 価格決定ロジック */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.logicTitle : t('pages.achievements.sm.quotationPage.logic.title', 'Pricing Logic')}</h2>
				<ol className="mt-6 space-y-3 text-gray-800 list-decimal list-inside">
					{pricingLogicSteps.map(step => (
						<li key={step}>{step}</li>
					))}
				</ol>
			</section>

			{/* 運用ポイント */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.opsTitle : t('pages.achievements.sm.quotationPage.ops.title', 'Operational Key Points')}</h2>
				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{operationalPoints.map(p => (
						<li key={p}>{p}</li>
					))}
				</ul>
			</section>

			{/* KPI */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.kpiTitle : t('pages.achievements.sm.quotationPage.kpi.title', 'KPIs')}</h2>
				<ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-800">
					{kpis.map(k => (
						<li key={k}>{k}</li>
					))}
				</ul>
			</section>

			{/* リスクとコントロール */}
			<section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{vi ? VI.risksTitle : t('pages.achievements.sm.quotationPage.risks.title', 'Risks & Controls')}</h2>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					{risks.map(r => (
						<div key={r.risk} className="bg-white rounded-xl border p-6">
							<h3 className="font-semibold mb-1">{r.risk}</h3>
							  <p className="text-gray-700 text-sm">{r.control}</p>
						</div>
					))}
				</div>
			</section>

			{/* チェックリスト */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-center text-[#0066c5]">{t('pages.achievements.sm.quotationPage.check.title', 'Pre-submission Checklist')}</h2>
				<ul className="mt-6 space-y-2 list-disc list-inside text-gray-800">
					{checklist.map(c => (
						<li key={c}>{c}</li>
					))}
				</ul>
			</section>

			{/* CTA */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="rounded-2xl border p-8 text-center">
							  <h3 className="text-xl font-semibold mb-3 text-[#0066c5]">{vi ? VI.ctaTitle : t('pages.achievements.sm.quotationPage.cta.title', 'Request Quotation Materials & Demo')}</h3>
						<p className="text-gray-700 mb-6">{vi ? VI.ctaDesc : t('pages.achievements.sm.quotationPage.cta.desc', 'We propose template design and cost linkage optimization tailored to your sales process and product mix.')}</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
									<a
										href={`${import.meta.env.BASE_URL}#contact`}
										onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
										className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
									>
							  {t('cta.contact', 'Contact Us')}
						</a>
							<a
								href={`/achievements/smart-manufacturing?lang=${locale}`}
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

