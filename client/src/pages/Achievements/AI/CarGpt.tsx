import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'
export default function CarGpt() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'

  const VI = {
    hero: {
      title: 'Car Service GPT',
      subtitle: 'Trợ lý dịch vụ trên xe chạy bằng LLM',
      desc: 'Kết nối đa nền (Mini App / App / Trong xe), hướng dẫn tính năng, tích hợp dữ liệu xe đã che mặt nạ.',
    },
    challenges: {
      title: 'Thách thức',
      items: [
        'Thông tin người lái rời rạc, khó tìm kiếm',
        'Hiệu quả hỗ trợ hậu mãi thấp',
        'Trải nghiệm dịch vụ không thống nhất giữa các kênh',
      ],
    },
    solution: {
      title: 'Giải pháp',
      desc1: 'Car Service GPT cho phép tương tác ngôn ngữ tự nhiên với mô hình ngôn ngữ lớn.',
      desc2: 'Hợp nhất hệ thống trong xe, ứng dụng di động và mini-program.',
      desc3: 'Người dùng nhanh chóng xem giải thích tính năng, hướng dẫn sử dụng và thông tin dịch vụ.',
    },
    endpoints: {
      title: 'Hỗ trợ đa điểm',
      desc: 'Kết nối mini app, ứng dụng smartphone và hệ thống trong xe để mang lại trải nghiệm thống nhất ở mọi nơi.',
      caption: 'UI thống nhất cho mini app / app / app trong xe',
      imgAlt: (n: number) => `Màn hình Car GPT ${n}`,
    },
    features: {
      title: 'Tính năng chính',
      items: [
        'Hỏi đáp đa vòng và nhận diện ý định',
        'Tìm kiếm tính năng xe và hướng dẫn sử dụng',
        'Tích hợp an toàn với dữ liệu che mặt nạ',
        'Đặt lịch dịch vụ và quản lý phiếu tự động',
      ],
    },
    effects: {
      title: 'Tác động khi áp dụng (ví dụ)',
      searchTime: 'Thời gian tìm kiếm',
      selfSolve: 'Tỷ lệ tự giải quyết',
      updateRate: 'Tỷ lệ cập nhật',
    },
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-4">
              {vi ? VI.hero.title : t('pages.achievements.ai.carGptPage.title', 'Car Service GPT')}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              {vi ? VI.hero.subtitle : t('pages.achievements.ai.carGptPage.subtitle', 'LLM-powered in-car service assistant')}
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              {vi ? VI.hero.desc : t('pages.achievements.ai.carGptPage.heroDesc', 'Multi-end connectivity (Mini App / App / In-car), feature guide, masked vehicle data integration')}
            </p>
            <br />
          </div>
          <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
            <img src={assetPath('AI/CarGpt/car-gpt-hero.png')} alt="Car GPT Hero" className="w-full max-w-md md:max-w-2xl rounded-2xl shadow-md object-cover transition-transform duration-200 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 課題 Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-10 text-center">{vi ? VI.challenges.title : t('pages.achievements.ai.carGptPage.challenges.title', 'Challenges')}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {(vi ? VI.challenges.items : [
              t('pages.achievements.ai.carGptPage.challenges.item1', 'Driver information is fragmented and hard to search'),
              t('pages.achievements.ai.carGptPage.challenges.item2', 'Low efficiency in after-sales support'),
              t('pages.achievements.ai.carGptPage.challenges.item3', 'Services across channels are not unified'),
            ]).map((text, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center text-gray-800 font-semibold transition-transform transform hover:scale-105">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section (moved up) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-10 text-center">{vi ? VI.features.title : t('pages.achievements.ai.carGptPage.features.title', 'Key features')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {(vi ? VI.features.items : [
              t('pages.achievements.ai.carGptPage.features.item1', 'Multi-round QA and intent recognition'),
              t('pages.achievements.ai.carGptPage.features.item2', 'Vehicle feature search and usage guide'),
              t('pages.achievements.ai.carGptPage.features.item3', 'Secure integration with masked data'),
              t('pages.achievements.ai.carGptPage.features.item4', 'Automated service booking and ticket management'),
            ]).map((text, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center text-[#0066c5] font-semibold transition-transform transform hover:scale-105">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ソリューション Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-8 text-center">{vi ? VI.solution.title : t('pages.achievements.ai.carGptPage.solution.title', 'Solution')}</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            {vi ? VI.solution.desc1 : t('pages.achievements.ai.carGptPage.solution.desc1', 'Car Service GPT enables natural language interactions powered by large language models.')}
            <br className="hidden sm:inline" />
            {vi ? VI.solution.desc2 : t('pages.achievements.ai.carGptPage.solution.desc2', 'It unifies in-car systems, mobile apps, and mini-programs.')}
            <br className="hidden sm:inline" />
            {vi ? VI.solution.desc3 : t('pages.achievements.ai.carGptPage.solution.desc3', 'Users quickly access feature explanations, usage guides, and service information.')}
          </p>
        </div>
      </section>

      {/* Multi-end support (smaller images) */}
      <section className="py-16 px-6 bg-gray-50" id="endpoints">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-3">{vi ? VI.endpoints.title : t('pages.achievements.ai.carGptPage.endpoints.title', 'Multi-end support')}</h3>
          <p className="text-gray-600 mb-10">
            {vi ? VI.endpoints.desc : t('pages.achievements.ai.carGptPage.endpoints.desc', 'Connect mini apps, smartphone apps, and in-car systems to deliver a consistent experience everywhere.')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center">
            {[1,2,3,4].map(n => (
              <img key={n} src={assetPath(`AI/CarGpt/${n}.png`)} alt={vi ? VI.endpoints.imgAlt(n) : `Car GPT 画面 ${n}`} className="rounded-lg shadow-md w-48 h-64 object-contain mx-auto" loading="lazy" />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">{vi ? VI.endpoints.caption : t('pages.achievements.ai.carGptPage.endpoints.caption', 'Unified UI for mini app / app / in-car app')}</p>
        </div>
      </section>

      {/* 機能 Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-10 text-center">{vi ? VI.features.title : t('pages.achievements.ai.carGptPage.features.title', 'Key features')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {(vi ? VI.features.items : [
              t('pages.achievements.ai.carGptPage.features.item1', 'Multi-round QA and intent recognition'),
              t('pages.achievements.ai.carGptPage.features.item2', 'Vehicle feature search and usage guide'),
              t('pages.achievements.ai.carGptPage.features.item3', 'Secure integration with masked data'),
              t('pages.achievements.ai.carGptPage.features.item4', 'Automated service booking and ticket management'),
            ]).map((text, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center text-[#0066c5] font-semibold transition-transform transform hover:scale-105">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成果 Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066c5] mb-10 text-center">{vi ? VI.effects.title : t('pages.achievements.ai.carGptPage.effects.title', 'Adoption impact (examples)')}</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {[
              { label: vi ? VI.effects.searchTime : t('pages.achievements.ai.carGptPage.effects.searchTime', 'Search time'), value: "-42%" },
              { label: vi ? VI.effects.selfSolve : t('pages.achievements.ai.carGptPage.effects.selfSolve', 'Self-resolution rate'), value: "+35%" },
              { label: vi ? VI.effects.updateRate : t('pages.achievements.ai.carGptPage.effects.updateRate', 'Update rate'), value: "+18%" },
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
              {t('cta.contact', 'お問い合わせ')}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/ai`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              {t('cta.moreCases', '他の事例を見る')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
