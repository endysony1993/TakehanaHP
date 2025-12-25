import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'

export default function CarGpt() {
  const { t } = useT()
  const { locale } = useI18n()
  // Debug: log current locale and translation result
  console.log('DEBUG CarGpt:', { locale, title: t('pages.achievements.ai.carGptPage.title') })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-4">
              {t('pages.achievements.ai.carGptPage.title', 'Car Service GPT')}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              {t('pages.achievements.ai.carGptPage.subtitle', 'LLM-powered in-car service assistant')}
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              {t('pages.achievements.ai.carGptPage.heroDesc', 'Multi-end connectivity (Mini App / App / In-car), feature guide, masked vehicle data integration')}
            </p>
            <br />
          </div>
        </div>

      {/* Three Boxes in a Row Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenges Box */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-[#0066c5] mb-4 text-center">{t('pages.achievements.ai.carGptPage.challenges.title', 'Challenges')}</h3>
              <ul className="list-disc list-inside space-y-2 flex-1">
                <li>{t('pages.achievements.ai.carGptPage.challenges.item1', 'Driver information is fragmented and hard to search')}</li>
                <li>{t('pages.achievements.ai.carGptPage.challenges.item2', 'Low efficiency in after-sales support')}</li>
                <li>{t('pages.achievements.ai.carGptPage.challenges.item3', 'Services across channels are not unified')}</li>
              </ul>
            </div>
            {/* Key Features Box */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-[#0066c5] mb-4 text-center">{t('pages.achievements.ai.carGptPage.features.title', 'Key features')}</h3>
              <ul className="list-disc list-inside space-y-2 flex-1">
                <li>{t('pages.achievements.ai.carGptPage.features.item1', 'Multi-round QA and intent recognition')}</li>
                <li>{t('pages.achievements.ai.carGptPage.features.item2', 'Vehicle feature search and usage guide')}</li>
                <li>{t('pages.achievements.ai.carGptPage.features.item3', 'Secure integration with masked data')}</li>
                <li>{t('pages.achievements.ai.carGptPage.features.item4', 'Automated service booking and ticket management')}</li>
              </ul>
            </div>
            {/* Adoption Impact Box */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-[#0066c5] mb-4 text-center">{t('pages.achievements.ai.carGptPage.effects.title', 'Adoption impact (examples)')}</h3>
              <ul className="list-disc list-inside space-y-2 flex-1">
                <li>{t('pages.achievements.ai.carGptPage.effects.searchTime', 'Search time')}: -42%</li>
                <li>{t('pages.achievements.ai.carGptPage.effects.selfSolve', 'Self-resolution rate')}: +35%</li>
                <li>{t('pages.achievements.ai.carGptPage.effects.updateRate', 'Update rate')}: +18%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-4">
            {t('pages.achievements.ai.carGptPage.endpoints.title', 'Multi-end support')}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('pages.achievements.ai.carGptPage.endpoints.desc', 'Connects mini app, smartphone app, and in-car system for a unified experience everywhere.')}
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {[1,2,3,4].map(n => (
              <div key={n} className="flex flex-col items-center group transition-transform hover:scale-105">
                <div className="rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200 w-56 h-96 flex items-center justify-center mb-3">
                  <img 
                    src={assetPath(`AI/CarGpt/${n}.png`)} 
                    alt={t(`pages.achievements.ai.carGptPage.endpoints.imgAlt${n}`, `Car GPT Screen ${n}`)} 
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {t(`pages.achievements.ai.carGptPage.endpoints.imgAlt${n}`, `Car GPT Screen ${n}`)}
                </span>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-500 mt-2 font-medium">
            {t('pages.achievements.ai.carGptPage.endpoints.caption', 'Unified UI for mini app / app / in-car app')}
          </p>
        </div>
      </section>

      {/* Effects Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-10 text-center">{t('pages.achievements.ai.carGptPage.effects.title', 'Adoption impact (examples)')}</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {[
              { label: t('pages.achievements.ai.carGptPage.effects.searchTime', 'Search time'), value: "-42%" },
              { label: t('pages.achievements.ai.carGptPage.effects.selfSolve', 'Self-resolution rate'), value: "+35%" },
              { label: t('pages.achievements.ai.carGptPage.effects.updateRate', 'Update rate'), value: "+18%" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md px-10 py-8 text-center transition-transform transform hover:scale-105">
                <div className="text-3xl font-bold text-[#0066c5] mb-2">{item.value}</div>
                <div className="text-gray-700 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              {t('cta.contact', 'Contact')}
            </a>
            <a
              href={`/achievements/ai?lang=${locale}`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              {t('cta.moreCases', 'See Other Cases')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
