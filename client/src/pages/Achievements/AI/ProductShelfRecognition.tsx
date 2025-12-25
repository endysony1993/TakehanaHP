import { useState } from 'react'
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

function FallbackImage({ src, alt }: { src: string; alt: string }) {
	const [error, setError] = useState(false)
	if (error) {
		return (
			<div className="w-full h-48 border rounded-lg flex items-center justify-center text-sm text-gray-500 bg-gray-50">
				画像が未配置です（{alt}）
			</div>
		)
	}
	return (
		<img
			className="w-full h-auto rounded-lg border"
			src={src}
			alt={alt}
			loading="lazy"
			onError={() => setError(true)}
		/>
	)
}

export default function ProductShelfRecognition() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'

	const VI = {
		title: 'AI nhận diện hàng hóa trên kệ',
		overview: {
			title: 'Tổng quan',
			points: [
				'Nhân viên chụp ảnh quầy/kệ (lạnh, thường, tươi sống)',
				'Ghép nhiều ảnh thành một và dùng nhận diện hình ảnh để định lượng sơ đồ bày kệ',
				'Kiểm chứng nâng cao độ chính xác và tốc độ định lượng',
			],
			imageAlt: 'Sơ đồ tổng quan AI nhận diện kệ hàng',
		},
		asis: {
			title: 'Chi tiết nghiệp vụ (As‑Is)',
			steps: [
				'Bước 1: Chụp ảnh quầy tại siêu thị và tải lên',
				'Bước 2: Định lượng bằng quan sát thủ công từ ảnh',
				'Bước 3: Lập báo cáo bởi phụ trách. Dùng cho đánh giá MD, PDCA hiện trường, và mục đích Marketing (PDCA trụ sở)',
			],
		},
		tobe: {
			title: 'Chi tiết nghiệp vụ (To‑Be)',
			steps: [
				'Bước 1: Chụp ảnh quầy tại siêu thị và tải lên',
				'Bước 2: Tự động hóa định lượng và lập báo cáo bằng hệ thống',
				'Bước 3: Tăng cường liên kết đánh giá MD, PDCA hiện trường, và liên kết POS/báo cáo',
			],
			imageAlt: 'Sơ đồ so sánh As‑Is / To‑Be',
		},
		benefits: {
			title: 'Hiệu quả kỳ vọng',
			points: [
				'Định lượng và trực quan hóa bày kệ để tăng tốc chu trình cải thiện tại cửa hàng',
				'Tự động hóa công việc quan sát thủ công, chuẩn hóa đánh giá và giảm tải',
				'Tăng cường đo lường hiệu quả chiến lược bán hàng nhờ liên kết báo cáo/POS',
			],
		},
	}
	return (
		<section className="px-4 py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
			{/* Hero */}
			<div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
				<h2 className="text-2xl sm:text-3xl font-bold text-sky-700">
					{vi ? VI.title : t('pages.productShelf.title', '商品棚識別AI')}
				</h2>
				<p className="text-gray-600 mt-3 max-w-3xl mx-auto">
					{vi ? VI.overview.title : t('pages.productShelf.overview.title', '概要')}
				</p>
			</div>

			{/* Overview */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
				<div className="bg-white rounded-xl shadow p-6 sm:p-8">
					<h3 className="text-xl font-semibold mb-4 text-sky-700">
						{vi ? VI.overview.title : t('pages.productShelf.overview.title', '概要')}
					</h3>
					<ul className="list-disc pl-6 space-y-2 text-gray-700">
						{(vi ? VI.overview.points : [
							t('pages.productShelf.overview.point1', '現場社員が店頭写真（冷蔵・常温・生鮮）を撮影'),
							t('pages.productShelf.overview.point2', '撮影した複数枚の写真を一枚に結合し、画像認識技術を活用して棚割の定量化を実施'),
							t('pages.productShelf.overview.point3', '定量化の確度向上・速度向上を検証'),
						]).map((p,i)=>(<li key={i}>{p}</li>))}
					</ul>
				</div>
				<figure className="bg-white rounded-xl shadow p-4">
					<FallbackImage src="/AI/ProductShelfRecognition/1.png" alt={vi ? VI.overview.imageAlt : '商品棚識別AI 概要図'} />
				</figure>
			</div>

			{/* As‑Is vs To‑Be (Combined) */}
			<div className="max-w-6xl mx-auto mt-10">
				<div className="bg-white rounded-xl shadow p-6 sm:p-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
						<div>
							<h3 className="text-xl font-semibold mb-4 text-sky-700">
								{vi ? VI.asis.title : t('pages.productShelf.asis.title', '業務詳細（As‑Is）')}
							</h3>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								{(vi ? VI.asis.steps : [
									t('pages.productShelf.asis.step1', 'Step1：量販店頭の写真を撮影し、画像をアップロード'),
									t('pages.productShelf.asis.step2', 'Step2：画像から目検による定量評価'),
									t('pages.productShelf.asis.step3', 'Step3：担当者が帳票化。MDの個人評価・現場PDCA、マーケ用途（本社PDCA）に活用'),
								]).map((p,i)=>(<li key={i}>{p}</li>))}
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4 text-sky-700">
								{vi ? VI.tobe.title : t('pages.productShelf.tobe.title', '業務詳細（To‑Be）')}
							</h3>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								{(vi ? VI.tobe.steps : [
									t('pages.productShelf.tobe.step1', 'Step1：量販店頭の写真を撮影し、画像をアップロード'),
									t('pages.productShelf.tobe.step2', 'Step2：定量評価・帳票化をシステムで自動化'),
									t('pages.productShelf.tobe.step3', 'Step3：MDの評価・現場PDCA・POS等の帳票連携を強化'),
								]).map((p,i)=>(<li key={i}>{p}</li>))}
							</ul>
						</div>
					</div>
					<figure className="mt-6">
						<FallbackImage src="/AI/ProductShelfRecognition/2.png" alt={vi ? VI.tobe.imageAlt : '業務詳細（As‑Is／To‑Be）比較図'} />
					</figure>
				</div>
			</div>

			{/* Benefits */}
			<div className="max-w-6xl mx-auto mt-10">
				<h3 className="text-xl font-semibold mb-4 text-center text-sky-700">
					{vi ? VI.benefits.title : t('pages.productShelf.benefits.title', '期待効果')}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-white rounded-xl shadow p-6">
						<p className="text-gray-700">
							{vi ? VI.benefits.points[0] : t('pages.productShelf.benefits.point1', '棚割の定量化と可視化により、実店舗の改善サイクルを加速')}
						</p>
					</div>
					<div className="bg-white rounded-xl shadow p-6">
						<p className="text-gray-700">
							{vi ? VI.benefits.points[1] : t('pages.productShelf.benefits.point2', '担当者の目検作業を自動化し、評価の標準化と省力化を実現')}
						</p>
					</div>
					<div className="bg-white rounded-xl shadow p-6">
						<p className="text-gray-700">
							{vi ? VI.benefits.points[2] : t('pages.productShelf.benefits.point3', 'POS等の帳票連携で販売施策の効果測定を強化')}
						</p>
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="mt-12">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<a
							href={`${import.meta.env.BASE_URL}#contact`}
							onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
						>
							{t('cta.contact', 'お問い合わせ')}
						</a>
						<a
							href={`/achievements/ai?lang=${locale}`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
						>
							{t('cta.moreCases', '他の事例を見る')}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
