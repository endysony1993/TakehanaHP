import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

const galleryImages: string[] = [1,2,3].map(n => assetPath(`Iot/SmartParkingSystem/${n}.png`));

export default function SmartParkingSystem() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'

	const VI = {
		title: 'Bãi đỗ xe thông minh',
		intro:
			'Giải pháp bãi đỗ xe thông minh tự động hóa vào/ra và trạng thái trống bằng nhận diện biển số (ALPR) và cảm biến, tính giờ/thu phí tự động, hỗ trợ đa phương thức thanh toán, trực quan hóa vận hành và doanh thu, giảm thất thoát, chuẩn hóa quy trình, mang lại trải nghiệm minh bạch và nhanh chóng.',
		images: {
			galleryAlt: 'Ảnh thư viện bãi đỗ xe thông minh',
			noImage: 'Chưa có ảnh',
			addHint: 'Vui lòng thêm ảnh vào /Iot/SmartParkingSystem/',
		},
		current: {
			title: 'Thực trạng & Thách thức',
			items: [
				'Chi phí nhân công cao; quản lý thủ công gây lỗi/thiếu hiệu quả',
				'Thường xuyên thất thoát/không thanh toán khiến khó quản lý doanh thu chính xác',
				'Khó nắm bắt trạng thái chỗ trống theo thời gian thực',
				'Chưa tích hợp hệ thống giao thông/chính quyền',
				'Tốn thời gian tìm chỗ gây giảm hài lòng người dùng',
			],
		},
		solution: {
			title: 'Giải pháp',
			items: [
				'Tự động hóa vào/ra bằng ALPR; giám sát chỗ trống bằng camera và cảm biến từ trường',
				'Tự động tính giờ/thu phí; hỗ trợ nhiều phương thức thanh toán',
				'Hướng dẫn, tra cứu giá và thanh toán qua web/app/mini app',
				'Nền tảng quản trị phân tích, quản lý giá và trực quan hoá',
				'Tích hợp API với cơ quan quản lý (thông báo chưa trả, chia sẻ dữ liệu)',
				'Tự động hoá vận hành để giảm chi phí nhân công và tăng độ chính xác',
			],
		},
		effects: {
			title: 'Hiệu quả triển khai',
			items: [
				'Giảm thời gian chờ ở cổng vào/ra; dẫn hướng mượt mà',
				'Thu phí tự động để tối đa doanh thu và ngăn thất thoát',
				'Chuẩn hóa quy trình, cải thiện liên tục các KPI vận hành',
				'Trái nghiệm người dùng minh bạch, nhanh và đơn giản',
				'Tích hợp dữ liệu giao thông đô thị, góp phần xây dựng Smart City',
			],
		},
	}

	return (
		<section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-6xl mx-auto px-6">
				{/* Title */}
				<h2 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-6 text-center">
					{vi ? VI.title : t('pages.achievements.iot.smartParkingPage.title', 'Smart Parking')}
				</h2>

				{/* Intro (short) */}
				<div className="text-center">
					<p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
						{vi ? VI.intro : t('pages.achievements.iot.smartParkingPage.intro', 'Smart parking automates entry/exit and vacancy using ALPR and sensors, provides seamless timing and multi-payment support, visualizes operations and revenue, reduces unpaid incidents, standardizes operations, and delivers a smooth, transparent user experience with reduced wait times and improved turnover.')}
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
											  alt={vi ? VI.images.galleryAlt : t('pages.achievements.iot.smartParkingPage.images.galleryAlt', 'Smart Parking gallery image')}
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
										<p className="font-medium">{vi ? VI.images.noImage : t('pages.achievements.iot.smartParkingPage.images.noImage', 'No Image')}</p>
										<p className="text-sm mt-1">{vi ? VI.images.addHint : t('pages.achievements.iot.smartParkingPage.images.addHint', 'Please add images to /Iot/SmartParkingSystem/')}</p>
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
						<h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">
							  {vi ? VI.current.title : t('pages.achievements.iot.smartParkingPage.current.title', 'Current Status & Challenges')}
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							  {(vi ? VI.current.items : [
							  t('pages.achievements.iot.smartParkingPage.current.item1', 'High labor costs and inefficiency/errors from manual management'),
							  t('pages.achievements.iot.smartParkingPage.current.item2', 'Frequent payment leakage/unpaid fees make accurate revenue management difficult'),
							  t('pages.achievements.iot.smartParkingPage.current.item3', 'Hard to obtain real-time vacancy information'),
							  t('pages.achievements.iot.smartParkingPage.current.item4', 'No integration with government/traffic systems'),
							  t('pages.achievements.iot.smartParkingPage.current.item5', 'Time-consuming space search leads to low satisfaction'),
							  ]).map((text, i)=> (<li key={i}>{text}</li>))}
						</ul>
					</div>

					{/* 解決策 */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col">
						<h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">
							  {vi ? VI.solution.title : t('pages.achievements.iot.smartParkingPage.solution.title', 'Solutions')}
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							  {(vi ? VI.solution.items : [
							  t('pages.achievements.iot.smartParkingPage.solution.item1', 'Automate entry/exit via ALPR; monitor spaces by camera and geomagnetic sensors'),
							  t('pages.achievements.iot.smartParkingPage.solution.item2', 'Automatic timing/charging; support multiple payment methods'),
							  t('pages.achievements.iot.smartParkingPage.solution.item3', 'Guide, check rates, and pay via web/app/mini app'),
							  t('pages.achievements.iot.smartParkingPage.solution.item4', 'Admin platform for analytics, fee management, and visualization'),
							  t('pages.achievements.iot.smartParkingPage.solution.item5', 'API integration with government systems (unpaid notices, data sharing)'),
							  t('pages.achievements.iot.smartParkingPage.solution.item6', 'Operational automation to reduce labor costs and improve accuracy'),
							  ]).map((text, i)=> (<li key={i}>{text}</li>))}
						</ul>
					</div>

					{/* 導入効果 */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col">
						<h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">
							  {vi ? VI.effects.title : t('pages.achievements.iot.smartParkingPage.effects.title', 'Outcomes')}
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left flex-1">
							  {(vi ? VI.effects.items : [
							  t('pages.achievements.iot.smartParkingPage.effects.item1', 'Reduce wait times at entry/exit and guide users smoothly'),
							  t('pages.achievements.iot.smartParkingPage.effects.item2', 'Fully automated charging to maximize revenue and prevent leakage'),
							  t('pages.achievements.iot.smartParkingPage.effects.item3', 'Streamline and standardize operations; continuously improve KPIs'),
							  t('pages.achievements.iot.smartParkingPage.effects.item4', 'Simple, transparent, and fast user experience'),
							  t('pages.achievements.iot.smartParkingPage.effects.item5', 'Integrate with urban traffic data to contribute to smart city'),
							  ]).map((text, i)=> (<li key={i}>{text}</li>))}
						</ul>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-12 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<a
								href={`${import.meta.env.BASE_URL}#contact`}
								onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
								className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								{t('cta.contact')}
							</a>
							<a
								href={`${import.meta.env.BASE_URL}achievements/iot`}
								className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
							>
								{t('cta.moreCases')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

