import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function LabBased() {
  const { t } = useT()
  const { locale } = useI18n()

  // Prefer explicit Vietnamese strings when locale is 'vi' to ensure display
  const vi = locale === 'vi'
  const VI = {
    title: 'Phát triển mô hình Lab',
    intro: 'Mô hình Lab với đội ngũ chuyên trách, linh hoạt quy mô, tối ưu chi phí',
    featuresTitle: 'Đặc điểm',
    f1: 'Đội ngũ cố định theo tháng với cam kết năng lực',
    f2: 'Linh hoạt điều chỉnh quy mô và kỹ năng',
    f3: 'Quy trình chuẩn hoá: yêu cầu → thiết kế → phát triển → kiểm thử',
    f4: 'Minh bạch chất lượng và tiến độ qua báo cáo định kỳ',
    flowTitle: 'Quy trình Lab',
    s1: 'Thiết lập đội ngũ và phạm vi',
    s2: 'Vận hành sprint/Kanban',
    s3: 'Đánh giá chất lượng và năng suất',
    s4: 'Tối ưu chi phí và mở rộng kỹ năng',
    ctaTitle: 'Trao đổi mô hình Lab phù hợp',
    ctaDesc: 'Đề xuất đội ngũ và quy mô phù hợp theo mục tiêu, cùng SLA/OKR minh bạch.',
    contact: 'Liên hệ',
  }
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">{vi ? VI.title : t('pages.services.development.lab.title', 'Lab型開発')}</h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          {vi ? VI.intro : t('pages.services.development.lab.intro', 'ラボ型開発は、クライアント専属チームを編成し、柔軟かつ継続的なシステム開発・運用を実現するモデルです。要件変化や新機能追加にも迅速に対応し、長期的なパートナーシップ構築に最適です。')}
        </p>
        <div className="bg-gray-50 rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0066c5] mb-2">{vi ? VI.featuresTitle : t('pages.services.development.lab.features.title', '特徴')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{vi ? VI.f1 : t('pages.services.development.lab.features.item1', '専属チームによる継続的な開発・運用サポート')}</li>
            <li>{vi ? VI.f2 : t('pages.services.development.lab.features.item2', '要件変更や追加開発への柔軟な対応')}</li>
            <li>{vi ? VI.f3 : t('pages.services.development.lab.features.item3', 'クライアントとの密なコミュニケーションと透明性')}</li>
            <li>{vi ? VI.f4 : t('pages.services.development.lab.features.item4', 'コストの最適化とリソースの効率的活用')}</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#0066c5] mb-2">{vi ? VI.flowTitle : t('pages.services.development.lab.flow.title', 'Lab型開発の流れ')}</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>{vi ? VI.s1 : t('pages.services.development.lab.flow.step1', '要件ヒアリング・チーム体制のご提案')}</li>
            <li>{vi ? VI.s2 : t('pages.services.development.lab.flow.step2', '専属チームの立ち上げ・キックオフ')}</li>
            <li>{vi ? VI.s3 : t('pages.services.development.lab.flow.step3', 'アジャイル開発による継続的な開発・運用')}</li>
            <li>{vi ? VI.s4 : t('pages.services.development.lab.flow.step4', '定期的な進捗報告・レビュー・改善提案')}</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="rounded-xl border bg-white p-6 sm:p-8 text-center mt-10">
          <h3 className="text-xl font-bold text-gray-900">{vi ? VI.ctaTitle : t('pages.services.development.lab.cta.title', 'まずは専属チームのトライアルから')}</h3>
          <p className="mt-2 text-gray-600 text-sm">
            {vi ? VI.ctaDesc : t('pages.services.development.lab.cta.desc', '最小2〜3名・1〜2ヶ月のトライアルで開始。要件整理〜開発〜レビューを継続運用の前提で検証し、運用後は人数・スキルを柔軟にスケールします。')}
          </p>
          <div className="flex flex-col pt-5 sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              {vi ? VI.contact : t('pages.services.development.lab.cta.contact', 'お問い合わせ')}
            </a>
          </div>
        </div>
      </div>
    </section>

    
  );
}
