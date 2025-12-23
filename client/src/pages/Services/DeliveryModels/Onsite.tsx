import Section from '../../../components/common/Section'
import SectionTitle from '../../../components/ui/SectionTitle'
import Card from '../../../components/ui/Card'
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'
// import Button from '../../../components/ui/Button' // Removed unused import

export default function Onsite() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'
  const VI = {
    title: 'Phát triển Onsite',
    hero:
      'Làm việc trực tiếp tại hiện trường để ra quyết định nhanh và phối hợp chặt chẽ, thúc đẩy phát triển hiệu quả. Phù hợp cho dự án yêu cầu bảo mật cao hoặc cần điều phối nhiều bên liên quan.',
    reasonsTitle: 'Thế mạnh của Onsite',
    reasonsSubtitle: 'Gắn với hiện trường để tạo giá trị nhanh nhất',
    decisionTitle: 'Ra quyết định nhanh',
    decisionDesc:
      'Trao đổi trực tiếp giải quyết thắc mắc ngay. Linh hoạt điều chỉnh ưu tiên và thay đổi yêu cầu.',
    securityTitle: 'Tuân thủ bảo mật cao',
    securityDesc:
      'Vận hành theo chính sách bảo mật của khách hàng như tách mạng, thiết bị chuyên dụng.',
    knowledgeTitle: 'Thu nhận tri thức hiện trường',
    knowledgeDesc:
      'Phối hợp chặt với nghiệp vụ để chuyển hóa tri thức ngầm thành đặc tả, nâng chất lượng.',
    modelTitle: 'Vận hành và chất lượng',
    modelSubtitle: 'Tổ chức, quy trình, governance',
    procTitle: 'Quy trình vận hành',
    proc1: 'Kanban cập nhật hằng ngày',
    proc2: 'Định kỳ hàng tuần (Review/Retro)',
    proc3: 'Báo cáo tiến độ cho các bên liên quan',
    qaTitle: 'Quản lý chất lượng',
    qa1: 'Tiêu chí chấp nhận (DoD) đã định nghĩa',
    qa2: 'Code review/phân tích tĩnh',
    qa3: 'Kiểm thử tự động, E2E/đo tải',
    secTitle: 'Bảo mật/Xác thực',
    sec1: 'Quản lý thiết bị và tài khoản',
    sec2: 'Thiết kế quyền và xác thực đa yếu tố',
    sec3: 'Nhật ký kiểm toán và quản lý thay đổi',
    scopeTitle: 'Nội dung hỗ trợ chính',
    scopeSubtitle: 'Từ PMO, định nghĩa yêu cầu đến vận hành',
    scope: [
      'PM/PMO và quản lý nhà thầu',
      'Định nghĩa yêu cầu / sắp xếp nghiệp vụ / tài liệu hóa',
      'Thiết kế, triển khai, review',
      'Lập kế hoạch kiểm thử, tự động hoá, hỗ trợ UAT',
      'Quản lý phát hành, bàn giao vận hành',
      'Đáp ứng thẩm định bảo mật',
      'Đào tạo người dùng và xây dựng FAQ',
      'Cải tiến hiện trường (Kaizen)',
    ],
    ctaTitle: 'Bắt đầu bằng Discovery',
    ctaDesc:
      'Pha Discovery 1–2 tuần tại hiện trường: đồng hành phân tích vấn đề, kiểm chứng giả thuyết và lập kế hoạch.',
    contact: 'Liên hệ',
  }
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero */}
      <Section>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0066c5] to-teal-500 text-white py-10 sm:py-14 px-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{vi ? VI.title : t('pages.services.delivery.onsite.title', 'オンサイト開発')}</h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
              {vi ? VI.hero : t('pages.services.delivery.onsite.hero', 'お客様先に常駐し、現場の温度感に寄り添いながら迅速な意思決定と高い連携で開発を推進します。セキュリティ要件が厳しい案件や、密な関係者調整が必要なプロジェクトに最適です。')}
            </p>
          
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        </div>
      </Section>

      {/* Value props */}
      <Section>
        <SectionTitle title={vi ? VI.reasonsTitle : t('pages.services.delivery.onsite.reasons.title', 'オンサイトの強み')} subtitle={vi ? VI.reasonsSubtitle : t('pages.services.delivery.onsite.reasons.subtitle', '現場密着で価値創出を最短距離に')} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.decisionTitle : t('pages.services.delivery.onsite.reasons.decision.title', '意思決定の迅速化')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.decisionDesc : t('pages.services.delivery.onsite.reasons.decision.desc', '対面コミュニケーションで疑問点を即時解消。要件変更や優先順位の調整にも素早く対応。')}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.securityTitle : t('pages.services.delivery.onsite.reasons.security.title', '高いセキュリティ適合')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.securityDesc : t('pages.services.delivery.onsite.reasons.security.desc', 'ネットワーク分離・専用端末など、お客様のセキュリティポリシーに準拠して運用可能。')}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.knowledgeTitle : t('pages.services.delivery.onsite.reasons.knowledge.title', '現場知の取り込み')}</h3>
            <p className="mt-2 text-sm text-gray-600">{vi ? VI.knowledgeDesc : t('pages.services.delivery.onsite.reasons.knowledge.desc', '業務担当者や関係部署と密に連携し、暗黙知を仕様に落とし込むことで品質を向上。')}</p>
          </Card>
        </div>
      </Section>

      {/* Engagement models */}
      <Section>
        <SectionTitle title={vi ? VI.modelTitle : t('pages.services.delivery.onsite.model.title', '運営と品質')} subtitle={vi ? VI.modelSubtitle : t('pages.services.delivery.onsite.model.subtitle', '体制・プロセス・ガバナンス')} />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.procTitle : t('pages.services.delivery.onsite.model.proc.title', '運営プロセス')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.proc1 : t('pages.services.delivery.onsite.model.proc.item1', 'カンバン運用（毎日更新）')}</li>
              <li>{vi ? VI.proc2 : t('pages.services.delivery.onsite.model.proc.item2', '定例（週次レビュー/レトロ）')}</li>
              <li>{vi ? VI.proc3 : t('pages.services.delivery.onsite.model.proc.item3', '関係者向け進捗レポート')}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.qaTitle : t('pages.services.delivery.onsite.model.qa.title', '品質管理')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.qa1 : t('pages.services.delivery.onsite.model.qa.item1', '定義済みの受け入れ基準（DoD）')}</li>
              <li>{vi ? VI.qa2 : t('pages.services.delivery.onsite.model.qa.item2', 'コードレビュー/静的解析')}</li>
              <li>{vi ? VI.qa3 : t('pages.services.delivery.onsite.model.qa.item3', '自動テスト・E2E/負荷試験')}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">{vi ? VI.secTitle : t('pages.services.delivery.onsite.model.sec.title', 'セキュリティ/認証')}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>{vi ? VI.sec1 : t('pages.services.delivery.onsite.model.sec.item1', '端末・アカウント管理')}</li>
              <li>{vi ? VI.sec2 : t('pages.services.delivery.onsite.model.sec.item2', '権限設計・多要素認証')}</li>
              <li>{vi ? VI.sec3 : t('pages.services.delivery.onsite.model.sec.item3', '監査ログ・変更管理')}</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Typical scope */}
      <Section>
        <SectionTitle title={vi ? VI.scopeTitle : t('pages.services.delivery.onsite.scope.title', '主な支援内容')} subtitle={vi ? VI.scopeSubtitle : t('pages.services.delivery.onsite.scope.subtitle', 'PMO・要件定義から運用まで')} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {(vi ? VI.scope : [
            t('pages.services.delivery.onsite.scope.item1', 'PM/PMO・ベンダーコントロール'),
            t('pages.services.delivery.onsite.scope.item2', '要件定義/業務整理/ドキュメンテーション'),
            t('pages.services.delivery.onsite.scope.item3', '設計・実装・レビュー'),
            t('pages.services.delivery.onsite.scope.item4', 'テスト計画・自動化・UAT支援'),
            t('pages.services.delivery.onsite.scope.item5', 'リリース管理・運用引き継ぎ'),
            t('pages.services.delivery.onsite.scope.item6', 'セキュリティ審査対応'),
            t('pages.services.delivery.onsite.scope.item7', 'ユーザートレーニング・FAQ整備'),
            t('pages.services.delivery.onsite.scope.item8', '現場改善（カイゼン）施策'),
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
          <h3 className="text-xl font-bold text-gray-900">{vi ? VI.ctaTitle : t('pages.services.delivery.onsite.cta.title', 'まずはディスカバリーから')}</h3>
          <p className="mt-2 text-gray-600 text-sm">
            {vi ? VI.ctaDesc : t('pages.services.delivery.onsite.cta.desc', '1〜2週間の現地ディスカバリーフェーズで、課題抽出・仮説検証・計画立案まで伴走します。')}
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
