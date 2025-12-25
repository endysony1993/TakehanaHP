
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function RiverFloodMonitoring() {
	const { t } = useT()
	const { locale } = useI18n()
	const vi = locale === 'vi'

	const VI = {
		title: 'Giám sát mực nước sông (IoT)',
		overview: {
			title: 'Tổng quan',
			points: [
				'Phát hiện bề mặt nước bằng AI',
				'Cho phép chỉ định trên ảnh khu vực mực nước nguy hiểm và vùng tràn theo từng đối tượng giám sát',
				'Phán đoán mực nước nguy hiểm và tràn',
				'Phát triển AI tự động nhận diện bờ kè và tự đặt vùng nguy hiểm/tràn',
			],
		},
		system: {
			title: 'Cấu trúc hệ thống',
			desc: 'Hệ thống gồm (1) Đăng ký ID thiết bị, (2) Quản lý cài đặt camera, (3) Lấy snapshot mới nhất; tích hợp Web quản trị, Edge, máy chủ Web/API, cơ sở dữ liệu, và Object Storage.',
			block1: {
				title: '① Chức năng đăng ký ID thiết bị',
				points: ['Yêu cầu ID thiết bị / đối chiếu ID', 'API đăng ký ID thiết bị', 'Đăng ký vào bảng quản lý thiết bị'],
			},
			block2: {
				title: '② Quản lý cài đặt camera',
				points: ['Hiển thị/danh sách chọn camera', 'API lấy/cập nhật cài đặt camera', 'Lưu và áp dụng cài đặt'],
			},
			block3: {
				title: '③ Lấy snapshot mới nhất',
				points: ['Yêu cầu/nhận snapshot', 'API tìm snapshot mới nhất', 'Lưu/tra cứu trên Object Storage'],
			},
		},
		benefits: {
			title: 'Hiệu quả kỳ vọng',
			points: [
				'Phát hiện sớm tràn và mực nước nguy hiểm để ứng phó nhanh',
				'Giảm tải vận hành nhờ AI tự động thiết lập vùng',
				'Thiết kế mở rộng nhờ liên kết Web quản trị, API và lưu trữ',
			],
		},
	}
	return (
		<section className="container mx-auto px-4 py-8 space-y-8">
			<header className="space-y-2">
				<h2 className="text-xl font-bold text-center text-sky-700">{vi ? VI.title : t('pages.flood.title', '河川汚濁監視IoT')}</h2>
			</header>

			<article className="grid md:grid-cols-2 gap-8 items-start">
				<div className="space-y-3">
					<h3 className="text-lg font-semibold">{vi ? VI.overview.title : t('pages.flood.overview.title', '概要')}</h3>
					<ul className="list-disc pl-6 space-y-2 leading-relaxed">
						{(vi ? VI.overview.points : [
							t('pages.flood.overview.point1', 'AIで水面を検出'),
							t('pages.flood.overview.point2', '監視対象ごとに危険水位と、越水を検出するエリアを画像上で指定できる'),
							t('pages.flood.overview.point3', '危険水準および越水を判定'),
							t('pages.flood.overview.point4', '護岸を自動検出して、危険・越水エリアを自動セットするAI機能を開発する'),
						]).map((p,i)=>(<li key={i}>{p}</li>))}
					</ul>
				</div>

				<figure className="">
					<img
						className=" h-auto rounded-lg border"
						src="/Iot/RiverFloodMonitoring/1.png"
						alt="河川汚濁監視IoT 概要図"
						loading="lazy"
					/>
					
				</figure>
			</article>

			<section className="space-y-4">
				<h3 className="text-lg font-semibold">{vi ? VI.system.title : t('pages.flood.system.title', 'システム構成')}</h3>
				<p className="text-gray-700 leading-relaxed">
					{vi ? VI.system.desc : t('pages.flood.system.desc', '本システムは「①デバイスID登録機能」「②カメラ設定管理機能」「③最新のスナップショット取得機能」で構成され、管理Web・エッジ・Web/APIサーバ・データベース・オブジェクトストレージが連携します。')}
				</p>

				<div className="grid md:grid-cols-3 gap-6">
					<div className="p-4 border rounded-lg space-y-2">
						<h4 className="font-semibold">{vi ? VI.system.block1.title : t('pages.flood.system.block1.title', '① デバイスID登録機能')}</h4>
						<ul className="list-disc pl-6 space-y-1 text-gray-700">
							{(vi ? VI.system.block1.points : [
								t('pages.flood.system.block1.point1', 'デバイスIDリクエスト／ID照合'),
								t('pages.flood.system.block1.point2', 'デバイスID登録API'),
								t('pages.flood.system.block1.point3', 'デバイス管理テーブルへの登録'),
							]).map((p,i)=>(<li key={i}>{p}</li>))}
						</ul>
					</div>

					<div className="p-4 border rounded-lg space-y-2">
						<h4 className="font-semibold">{vi ? VI.system.block2.title : t('pages.flood.system.block2.title', '② カメラ設定管理機能')}</h4>
						<ul className="list-disc pl-6 space-y-1 text-gray-700">
							{(vi ? VI.system.block2.points : [
								t('pages.flood.system.block2.point1', 'カメラ一覧表示／選択'),
								t('pages.flood.system.block2.point2', 'カメラ設定取得API／更新API'),
								t('pages.flood.system.block2.point3', '設定の保存と反映'),
							]).map((p,i)=>(<li key={i}>{p}</li>))}
						</ul>
					</div>

					<div className="p-4 border rounded-lg space-y-2">
						<h4 className="font-semibold">{vi ? VI.system.block3.title : t('pages.flood.system.block3.title', '③ 最新スナップショット取得機能')}</h4>
						<ul className="list-disc pl-6 space-y-1 text-gray-700">
							{(vi ? VI.system.block3.points : [
								t('pages.flood.system.block3.point1', 'スナップショット要求／受信'),
								t('pages.flood.system.block3.point2', '最新スナップショット検索API'),
								t('pages.flood.system.block3.point3', 'オブジェクトストレージ保存／参照'),
							]).map((p,i)=>(<li key={i}>{p}</li>))}
						</ul>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h3 className="text-lg font-semibold">{vi ? VI.benefits.title : t('pages.flood.benefits.title', '期待効果')}</h3>
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					{(vi ? VI.benefits.points : [
						t('pages.flood.benefits.point1', '越水・危険水位の早期検知による迅速な対応'),
						t('pages.flood.benefits.point2', 'AIによる自動エリア設定で運用負荷を削減'),
						t('pages.flood.benefits.point3', 'Web管理・API・ストレージ連携で拡張性の高い設計'),
					]).map((p,i)=>(<li key={i}>{p}</li>))}
				</ul>
			</section>

			{/* CTA */}
			<div className="px-6">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<a
							href={`${import.meta.env.BASE_URL}#contact`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
						>
							{t('cta.contact', 'お問い合わせ')}
						</a>
						<a
							href={`/achievements/iot?lang=${locale}`}
							className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
						>
							{t('cta.moreCases', '他の事例を見る')}
						</a>
					</div>
				</div>
			</div>
            
		</section>
        



	)
}
