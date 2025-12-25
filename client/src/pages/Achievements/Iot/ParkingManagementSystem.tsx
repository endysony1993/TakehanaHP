import { useEffect } from 'react';
import { useT } from '../../../hooks/useT';
import { useI18n } from '../../../context/I18nContext';
import { assetPath } from '../../../utils/assetPath';

export default function ParkingManagementSystem() {
		const { t } = useT();
		const { messages, locale } = useI18n();
		const vi = locale === 'vi'

		const VI = {
			title: 'Hệ thống quản lý bãi đỗ xe',
			intro: 'Tích hợp phát hiện chỗ trống, đặt chỗ, định giá động và thanh toán trực tuyến để cải thiện tỷ lệ sử dụng và trải nghiệm khách hàng.',
			current: {
				title: 'Thực trạng & Thách thức',
				items: [
					'Tracking chỗ trống thủ công và đặt chỗ giấy tờ dễ lỗi',
					'Giá cố định không phản ánh nhu cầu, giảm doanh thu',
					'Quy trình thanh toán rời rạc, thiếu minh bạch',
					'Hạn chế trong việc theo dõi KPI sử dụng và xu hướng',
					'Quy trình vận hành chưa chuẩn hóa giữa các điểm',
				],
			},
			effects: {
				title: 'Hiệu quả đạt được',
				items: [
					'Tăng tỷ lệ sử dụng, giảm thời gian tìm chỗ',
					'Tối ưu doanh thu với định giá theo nhu cầu',
					'Chuẩn hóa quy trình, giảm công việc thủ công',
					'Mang lại trải nghiệm minh bạch, nhanh và đơn giản',
				],
			},
			features: {
				title: 'Tính năng chính',
				adminTitle: 'Quản trị',
				driverTitle: 'Người dùng',
			},
			architecture: {
				title: 'Kiến trúc hệ thống',
				desc: 'Tích hợp cổng/cảm biến/ANPR cho tự động vào/ra, kết nối thanh toán bên thứ ba (QR/thẻ) qua API, thiết kế loosely-coupled để mở rộng linh hoạt.',
			},
			integrations: {
				title: 'Tích hợp & Mở rộng',
			},
			security: {
				title: 'Bảo mật / Tuân thủ',
			},
			offering: {
				title: 'Mô hình triển khai',
				desc: 'Mặc định sử dụng Cloud/SaaS. On-premise khả dụng theo yêu cầu. Bắt đầu bằng PoC để xác thực nhận diện tự động và mô hình định giá, sau đó triển khai theo giai đoạn để vận hành và tối ưu.',
			},
		}

		const currentItems = vi
			? VI.current.items
			: [
				t('pages.achievements.iot.parkingMgmtPage.current.item1', 'Manual spot tracking and paper-based reservations cause errors'),
				t('pages.achievements.iot.parkingMgmtPage.current.item2', 'Static pricing fails to reflect demand and reduces revenue'),
				t('pages.achievements.iot.parkingMgmtPage.current.item3', 'Payment processes are fragmented with low transparency'),
				t('pages.achievements.iot.parkingMgmtPage.current.item4', 'Limited visibility into utilization KPIs and trends'),
				t('pages.achievements.iot.parkingMgmtPage.current.item5', 'Operations are not standardized across locations'),
			]

		const effectsCards = vi
			? VI.effects.items.map(title => ({ title, desc: '' }))
			: [
				{ title: t('pages.achievements.iot.parkingMgmtPage.effects.item1', 'Increase utilization and reduce search time'), desc: '' },
				{ title: t('pages.achievements.iot.parkingMgmtPage.effects.item2', 'Improve revenue via demand-based pricing'), desc: '' },
				{ title: t('pages.achievements.iot.parkingMgmtPage.effects.item3', 'Standardize operations and reduce manual workload'), desc: '' },
				{ title: t('pages.achievements.iot.parkingMgmtPage.effects.item4', 'Deliver a simple, fast, transparent user experience'), desc: '' },
			]
		useEffect(() => {
			document.title = vi ? VI.title : t('pages.achievements.iot.parkingMgmtPage.title', 'Parking Management System');
		let meta = document.querySelector(`meta[name="description"]`);
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', 'description');
			document.head.appendChild(meta);
		}
		meta.setAttribute('content', vi ? VI.intro : t('pages.achievements.iot.parkingMgmtPage.intro', 'Integrate vacancy detection, reservations, dynamic pricing, and online payments to improve utilization and customer experience.'));
	}, []);

	return (
		<div className="font-sans text-gray-800">
            {/* Hero Section */}
                  <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
											<div className="flex-1 text-center md:text-left">
												<h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-4">
													{vi ? VI.title : t('pages.achievements.iot.parkingMgmtPage.title', 'Parking Management System')}
												</h1>
												<p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
													{vi ? VI.intro : t('pages.achievements.iot.parkingMgmtPage.intro', 'Integrate vacancy detection, reservations, dynamic pricing, and online payments to improve utilization and customer experience.')}
												</p>
                        
                        <br />
                      </div>
                      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
                        <img src={assetPath('Iot/ParkingManagementSystem/hero.png')} alt="Parking Management System Hero" className="w-full max-w-md md:max-w-2xl rounded-2xl shadow-md object-cover transition-transform duration-200 hover:scale-105" />
                      </div>
                    </div>
                  </section>

		

			{/* Current Status & Challenges */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">{vi ? VI.current.title : t('pages.achievements.iot.parkingMgmtPage.current.title', 'Current Status & Challenges')}</h2>
				<ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
						{currentItems.map((item, i) => (
							<li key={i}>{item}</li>
						))}
				</ul>
			</section>

			{/* Effects */}
			<section className="py-12 sm:py-16 bg-gray-50 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#0066c5]">{vi ? VI.effects.title : t('pages.achievements.iot.parkingMgmtPage.effects.title', 'Outcomes')}</h2>
					<div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{effectsCards.map((c, i) => (
							<div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:shadow-md transition">
								<h3 className="font-semibold text-lg mb-2 text-[#0066c5]">{c.title}</h3>
								<p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Key Features */}
			<section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#0066c5]">{vi ? VI.features.title : t('pages.achievements.iot.parkingMgmtPage.features.title', 'Key Features')}</h2>
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h3 className="text-xl font-semibold mb-4 text-[#0066c5]">{vi ? VI.features.adminTitle : t('pages.achievements.iot.parkingMgmtPage.features.adminTitle', 'Admin')}</h3>
						<ul className="space-y-3 text-sm sm:text-base text-gray-700">
							{((messages.pages?.achievements?.iot?.parkingMgmtPage?.features?.admin) as string[] || []).map((f,i)=>(
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{f}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-4 text-[#0066c5]">{vi ? VI.features.driverTitle : t('pages.achievements.iot.parkingMgmtPage.features.driverTitle', 'Driver')}</h3>
						<ul className="space-y-3 text-sm sm:text-base text-gray-700">
							{((messages.pages?.achievements?.iot?.parkingMgmtPage?.features?.driver) as string[] || []).map((f,i)=>(
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{f}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* システム構成 */}
		
			<section className="py-16 px-6 bg-gray-50" id="endpoints">
				<div className="max-w-7xl mx-auto text-center">
					<h3 className="text-2xl font-semibold text-[#0066c5] mb-3">{vi ? VI.architecture.title : t('pages.achievements.iot.parkingMgmtPage.architecture.title', 'System Architecture')}</h3>
					<p className="text-gray-600 mb-10">
												{vi ? VI.architecture.desc : t('pages.achievements.iot.parkingMgmtPage.architecture.desc', 'Integrate gate/sensor/ANPR for automated entry/exit, connect third-party payments (QR/cards) via APIs, and adopt a loosely coupled design for easy future expansion.')}
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center place-items-center">
            {[1,2,3,4].map(n => (
							<img key={n} src={assetPath(`Iot/ParkingManagementSystem/${n}.png`)} alt={`Parking Management System 画面 ${n}`} className="rounded-lg shadow-md mx-auto" loading="lazy" />
            ))}
          </div>

        </div>
      </section>


			{/* Integrations & Extensions */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">{vi ? VI.integrations.title : t('pages.achievements.iot.parkingMgmtPage.integrations.title', 'Integrations & Extensions')}</h2>
				<ul className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
					{((messages.pages?.achievements?.iot?.parkingMgmtPage?.integrations?.items) as string[] || []).map((item,i)=>(
						<li key={i} className="flex items-start gap-2">
							<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{item}
						</li>
					))}
				</ul>
			</section>

			{/* Security / Compliance */}
			<section className="py-12 sm:py-16 bg-gray-50 px-4">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">{vi ? VI.security.title : t('pages.achievements.iot.parkingMgmtPage.security.title', 'Security / Compliance')}</h2>
					<ul className="space-y-3 text-sm sm:text-base text-gray-700">
						{((messages.pages?.achievements?.iot?.parkingMgmtPage?.security?.items) as string[] || []).map((item,i)=>(
							<li key={i} className="flex items-start gap-2">
								<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Offering Model */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">{vi ? VI.offering.title : t('pages.achievements.iot.parkingMgmtPage.offering.title', 'Offering Model')}</h2>
				<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
					{vi ? VI.offering.desc : t('pages.achievements.iot.parkingMgmtPage.offering.desc', 'Default offering is Cloud/SaaS. On-premise is available upon requirements definition. Start with a PoC to validate automatic recognition and pricing models, then scale in phases for production rollout and optimization.')}
				</p>
				<ol className="space-y-3 text-sm sm:text-base text-gray-700 list-decimal list-inside">
										{((messages.pages?.achievements?.iot?.parkingMgmtPage?.offering?.steps) as string[] || []).map((step, i) => (
					  <li key={i}>{step}</li>
					))}
				</ol>
			</section>

            
      {/* CTA */}
      <div className=" px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
						<a
							href={`${import.meta.env.BASE_URL}#contact`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
						>
							{t('cta.contact', 'Contact')}
						</a>
						<a
							href={`/achievements/iot?lang=${locale}`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
						>
							{t('cta.moreCases', 'See Other Cases')}
						</a>
          </div>
        </div>
      </div>
		</div>

        
	);
}

