import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function CarLicensePlateAnalysis() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'

	const VI = {
		title: 'Nhận diện biển số xe bằng AI',
		hero: 'Tự động hóa quản lý vào/ra bằng AI phát hiện biển số và OCR. Định nghĩa vùng phát hiện trên ảnh, ghi nhận kết quả và tìm kiếm hiệu quả.',
		overview: {
			title: 'Tổng quan',
			points: [
				'Phát hiện biển số bằng AI và nhận dạng bằng OCR',
				'Chỉ định trực tiếp vùng phát hiện biển số trên ảnh',
				'Ghi nhận và tìm kiếm kết quả nhận dạng',
			],
		},
		images: {
			image1Alt: 'Sơ đồ tổng quan nhận diện biển số',
			image2Alt: 'Ví dụ nhận diện biển số trên đường',
		},
		benefits: {
			title: 'Lợi ích',
			points: [
				'Tự động hóa quản lý vào/ra',
				'Nâng cao hiệu quả giám sát và quản lý nhật ký',
				'Dễ dàng tích hợp với hệ thống hiện có',
			],
		},
	}
	return (
		<section className="container mx-auto px-4 py-12 space-y-12">
			{/* Hero */}
			<header className="text-center space-y-3">
				<h2 className="text-2xl md:text-3xl font-bold text-sky-700">{vi ? VI.title : t('pages.licensePlate.title', 'License Plate Recognition AI')}</h2>
				<p className="text-gray-600 max-w-3xl mx-auto">
					{vi ? VI.hero : t(
						'pages.licensePlate.hero',
						'Automate entry/exit management with AI-based plate detection and OCR. Define detection areas on images, record results, and search efficiently.'
					)}
				</p>
			</header>

			{/* Overview + Image */}
			<article className="grid md:grid-cols-2 gap-10 items-start">
				<div className="space-y-4">
					<h3 className="text-xl font-semibold">{vi ? VI.overview.title : t('pages.licensePlate.overview.title', 'Overview')}</h3>
					<ul className="list-disc pl-6 space-y-2 leading-relaxed">
						{(vi ? VI.overview.points : [
							t('pages.licensePlate.overview.point1', 'Detect license plates with AI and recognize via OCR'),
							t('pages.licensePlate.overview.point2', 'Specify license-plate detection areas directly on images'),
							t('pages.licensePlate.overview.point3', 'Record and search recognition results'),
						]).map((p,i)=>(<li key={i}>{p}</li>))}
					</ul>
				</div>

				<figure className="w-full">
					<img
						className="w-full h-auto rounded-xl border"
						src="/Iot/CarLicensePlateAnalysis/1.png"
						alt={vi ? VI.images.image1Alt : t('pages.licensePlate.image1Alt', 'License Plate Recognition overview diagram')}
						loading="lazy"
					/>
				</figure>
			</article>

			{/* Benefits */}
			<section className="space-y-4">
				<h3 className="text-xl font-semibold">{vi ? VI.benefits.title : t('pages.licensePlate.benefits.title', 'Benefits')}</h3>
				<div className="grid md:grid-cols-3 gap-6">
					{(vi ? VI.benefits.points : [
						t('pages.licensePlate.benefits.point1', 'Automate entry/exit management'),
						t('pages.licensePlate.benefits.point2', 'Improve efficiency of monitoring and log management'),
						t('pages.licensePlate.benefits.point3', 'Easy integration with existing systems'),
					]).map((p,i)=>(
						<div key={i} className="p-4 border rounded-xl bg-white shadow-sm">
							<p className="text-gray-800">{p}</p>
						</div>
					))}
				</div>
			</section>

			{/* Gallery image */}
			<figure className="w-full">
				<img
					className="w-full h-auto rounded-xl border"
					src="/Iot/CarLicensePlateAnalysis/2.png"
					alt={vi ? VI.images.image2Alt : t('pages.licensePlate.image2Alt', 'License Plate Recognition road example')}
					loading="lazy"
				/>
			</figure>

			{/* CTA */}
			<div className="px-6">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<a
							href={`${import.meta.env.BASE_URL}#contact`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
						>
							{t('cta.contact', 'Contact Us')}
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
		</section>
	)
}
