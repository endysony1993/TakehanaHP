import Section from '../../../components/common/Section'
import SectionTitle from '../../../components/ui/SectionTitle'
import Card from '../../../components/ui/Card'
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function Offshore() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'
  const VI = {
    title: 'Phát triển Offshore',
    hero:
      'Tối ưu chi phí và tốc độ bằng đội ngũ ở nước ngoài. PM/BrSE phía Nhật phụ trách yêu cầu và chất lượng, kết hợp năng lực triển khai của kỹ sư nước ngoài để đảm bảo kết quả.',
    reasonsTitle: 'Lý do lựa chọn',
    reasonsSubtitle: 'Tối ưu cân bằng giữa chất lượng, tốc độ và chi phí',
    costTitle: 'Tối ưu chi phí',
    costDesc:
      'Tận dụng nhân lực nước ngoài, vẫn đảm bảo tiêu chuẩn chất lượng Nhật Bản. Giảm TCO và duy trì phát triển liên tục.',
    speedTitle: 'Tốc độ và linh hoạt',
    speedDesc: 'Đa điểm giúp tăng thông lượng. Vận hành Agile phản hồi nhanh thay đổi yêu cầu.',
    jpTitle: 'Giao tiếp tiếng Nhật',
    jpDesc:
      'BrSE/PM đồng hành từ yêu cầu tới nghiệm thu. Tài liệu và cuộc họp đều bằng tiếng Nhật, thúc đẩy tiến độ trôi chảy.',
    modelTitle: 'Mô hình tổ chức và cách vận hành',
    modelSubtitle: 'Mô hình vận hành gắn liền với kết quả',
    commTitle: 'Thiết kế giao tiếp',
    comm1: 'Scrum hàng tuần (Review/Retro)',
    comm2: 'Standup hằng ngày (15 phút)',
    comm3: 'Minh bạch task (Jira/Backlog)',
    qaTitle: 'Đảm bảo chất lượng',
    qa1: 'Double review (Dev/QA)',
    qa2: 'Test tự động và CI/CD',
    qa3: 'Cổng phát hành và Definition of Done',
    secTitle: 'Bảo mật/Governance',
    sec1: 'Tách quyền và log kiểm toán',
    sec2: 'Chống mang thông tin ra ngoài (DLP)',
    sec3: 'Hợp đồng/NDA và bảo vệ dữ liệu cá nhân',
    scopeTitle: 'Phạm vi hỗ trợ',
    scopeSubtitle: 'Từ Web/Mobile/Cloud/Data/AI',
    scope: [
      'Front‑end (React/Next.js)',
      'Back‑end (Node.js/Java)',
      'Mobile (iOS/Android)',
      'Cloud (AWS/Azure/GCP)',
      'Kỹ sư dữ liệu',
      'MLOps/Ứng dụng LLM',
      'QA/kiểm thử tự động',
      'Vận hành/giám sát/SRE',
    ],
    ctaTitle: 'Khởi động nhỏ để kiểm chứng',
    ctaDesc:
      'Có thể bắt đầu bằng sprint thử nghiệm 2 tuần. Thực hiện trọn vẹn từ định nghĩa phạm vi → triển khai → review.',
    contact: 'Liên hệ',
  }
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero */}
      <Section>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0066c5] to-teal-500 text-white py-10 sm:py-14 px-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{vi ? VI.title : t('pages.services.delivery.offshore.title', 'オフショア開発')}</h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
              {vi ? VI.hero : t('pages.services.delivery.offshore.hero', 'コスト最適化とスピード両立のために、海外拠点を活用したチームでの開発体制をご提供します。日本側PM/BrSEによる要件整理・品質管理と、海外の優秀なエンジニアの実装力を組み合わせます。')}
            </p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        </div>
      </Section>

      {/* Value props */}
      <Section>
        <SectionTitle title={vi ? VI.reasonsTitle : t('pages.services.delivery.offshore.reasons.title', '選ばれる理由')} subtitle={vi ? VI.reasonsSubtitle : t('pages.services.delivery.offshore.reasons.subtitle', '品質・スピード・コストのバランスを最適化')} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.costTitle : t('pages.services.delivery.offshore.reasons.cost.title', 'コスト最適化')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.costDesc : t('pages.services.delivery.offshore.reasons.cost.desc', '海外人件費を活用しつつ、日本品質の基準でレビューを実施。TCOを抑えながら継続開発を実現。')}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.speedTitle : t('pages.services.delivery.offshore.reasons.speed.title', 'スピードと柔軟性')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.speedDesc : t('pages.services.delivery.offshore.reasons.speed.desc', '多拠点体制でスループットを確保。アジャイル運用により仕様変更にも迅速に対応。')}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.jpTitle : t('pages.services.delivery.offshore.reasons.jp.title', '日本語コミュニケーション')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.jpDesc : t('pages.services.delivery.offshore.reasons.jp.desc', 'BrSE/PMが要件定義から受け入れまで伴走。ドキュメント・会議体も日本語で円滑に推進。')}</p>
          </Card>
        </div>
      </Section>
      <Section>
        <SectionTitle title={vi ? VI.modelTitle : t('pages.services.delivery.offshore.model.title', '体制と進め方')} subtitle={vi ? VI.modelSubtitle : t('pages.services.delivery.offshore.model.subtitle', '成果に直結する運営モデル')} />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.commTitle : t('pages.services.delivery.offshore.model.comm.title', 'コミュニケーション設計')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.comm1 : t('pages.services.delivery.offshore.model.comm.item1', '週次スクラム（レビュー/レトロ）')}</li>
              <li>{vi ? VI.comm2 : t('pages.services.delivery.offshore.model.comm.item2', '日次スタンドアップ（15分）')}</li>
              <li>{vi ? VI.comm3 : t('pages.services.delivery.offshore.model.comm.item3', 'タスク可視化（Jira/Backlog）')}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.qaTitle : t('pages.services.delivery.offshore.model.qa.title', '品質保証')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.qa1 : t('pages.services.delivery.offshore.model.qa.item1', 'レビュー二重化（開発/QA）')}</li>
              <li>{vi ? VI.qa2 : t('pages.services.delivery.offshore.model.qa.item2', '自動テストとCI/CD')}</li>
              <li>{vi ? VI.qa3 : t('pages.services.delivery.offshore.model.qa.item3', 'リリースゲートとDefinition of Done')}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.secTitle : t('pages.services.delivery.offshore.model.sec.title', 'セキュリティ/ガバナンス')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.sec1 : t('pages.services.delivery.offshore.model.sec.item1', '権限分離と監査ログ')}</li>
              <li>{vi ? VI.sec2 : t('pages.services.delivery.offshore.model.sec.item2', '情報持ち出し対策（DLP）')}</li>
              <li>{vi ? VI.sec3 : t('pages.services.delivery.offshore.model.sec.item3', '契約/秘密保持・個人情報保護')}</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Typical scope */}
      <Section>
        <SectionTitle title={vi ? VI.scopeTitle : t('pages.services.delivery.offshore.scope.title', '対応領域')} subtitle={vi ? VI.scopeSubtitle : t('pages.services.delivery.offshore.scope.subtitle', 'Web/モバイル/クラウド/データ/AIまで')} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {(vi ? VI.scope : [
            t('pages.services.delivery.offshore.scope.item1', 'フロントエンド（React/Next.js）'),
            t('pages.services.delivery.offshore.scope.item2', 'バックエンド（Node.js/Java）'),
            t('pages.services.delivery.offshore.scope.item3', 'モバイル（iOS/Android）'),
            t('pages.services.delivery.offshore.scope.item4', 'クラウド（AWS/Azure/GCP）'),
            t('pages.services.delivery.offshore.scope.item5', 'データエンジニアリング'),
            t('pages.services.delivery.offshore.scope.item6', 'MLOps/LLMアプリケーション'),
            t('pages.services.delivery.offshore.scope.item7', 'QA・自動テスト'),
            t('pages.services.delivery.offshore.scope.item8', '運用/監視/SRE'),
          ]).map((item) => (
            <Card key={item} className="py-5">
              <p className="text-sm text-gray-800">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-xl border bg-white p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900">{vi ? VI.ctaTitle : t('pages.services.delivery.offshore.cta.title', 'まずは小さく始めて、確かめる')}</h3>
          <p className="mt-2 text-gray-600 text-sm">
            {vi ? VI.ctaDesc : t('pages.services.delivery.offshore.cta.desc', '2週間のトライアルスプリントからご提供可能です。スコープ定義〜実装〜レビューまで一気通貫で実施します。')}
          </p>
         	<div className="flex flex-col pt-5 sm:flex-row gap-3 justify-center">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                {vi ? VI.contact : t('cta.contact', 'お問い合わせ')}
              </a>
            
						</div>
        </div>
      </Section>
    </div>
  )
}
