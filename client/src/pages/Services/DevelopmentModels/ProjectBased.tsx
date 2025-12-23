import { useT } from '../../../hooks/useT'

export default function ProjectBased() {
  const { t } = useT()
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">{t('pages.services.development.project.title', 'Project型開発')}</h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          {t('pages.services.development.project.intro', 'プロジェクト型開発は、明確な要件・納期・予算に基づき、システムやアプリを一括受託するモデルです。要件定義から設計・開発・テスト・納品まで、ワンストップで高品質な成果を提供します。')}
        </p>
        <div className="bg-gray-50 rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0066c5] mb-2">{t('pages.services.development.project.features.title', '特徴')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{t('pages.services.development.project.features.item1', '要件・スケジュール・コストが明確なプロジェクトに最適')}</li>
            <li>{t('pages.services.development.project.features.item2', '経験豊富なPM・エンジニアによる一括管理')}</li>
            <li>{t('pages.services.development.project.features.item3', '品質・納期・コストのコミットメント')}</li>
            <li>{t('pages.services.development.project.features.item4', '納品後の保守・運用サポートも対応可能')}</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#0066c5] mb-2">{t('pages.services.development.project.flow.title', 'Project型開発の流れ')}</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>{t('pages.services.development.project.flow.step1', '要件ヒアリング・見積もり・ご提案')}</li>
            <li>{t('pages.services.development.project.flow.step2', '要件定義・設計')}</li>
            <li>{t('pages.services.development.project.flow.step3', 'システム開発・テスト')}</li>
            <li>{t('pages.services.development.project.flow.step4', '納品・リリース・運用サポート')}</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="rounded-xl border bg-white p-6 sm:p-8 text-center mt-10">
          <h3 className="text-xl font-bold text-gray-900">{t('pages.services.development.project.cta.title', 'まずは小規模PoCまたは固定見積から')}</h3>
          <p className="mt-2 text-gray-600 text-sm">
            {t('pages.services.development.project.cta.desc', '2〜4週間のPoCや明確な範囲の固定見積で検証。要件定義→設計→実装→レビューを短期で実施し、最終見積とスケジュールを合意します。')}
          </p>
          <div className="flex flex-col pt-5 sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              {t('pages.services.development.project.cta.contact', 'お問い合わせ')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
