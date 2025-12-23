import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'
export default function AIVisa() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'

  const VI = {
    hero: {
      title: 'AI Visa | Hướng dẫn thị thực Nhật đa ngôn ngữ',
      intro: 'Tổ chức rõ ràng tài liệu cần thiết theo từng tư cách lưu trú bằng đa ngôn ngữ. Với AI Hỏi-Đáp và bộ tính điểm HSP, hỗ trợ thủ tục theo chuẩn mới nhất.',
    },
    challenges: {
      title: 'Thách thức người dùng/vận hành',
      items: [
        'Cung cấp hướng dẫn chính xác, đa ngôn ngữ theo thông tin thị thực Nhật mới nhất',
        'Tăng tỷ lệ tự giải quyết qua AI Hỏi-Đáp',
        'Theo kịp thay đổi chính sách và ngăn hướng dẫn sai',
      ],
    },
    solution: {
      title: 'Giải pháp',
      items: [
        'Cấu trúc yêu cầu/tài liệu theo tư cách lưu trú và cung cấp đa ngôn ngữ',
        'AI Hỏi-Đáp với tự động nhận diện ngôn ngữ để trả lời tức thì',
        'Trực quan hóa điều kiện đủ bằng bộ tính điểm HSP',
      ],
    },
    skills: {
      title: 'Công nghệ & Kỹ năng',
    },
    features: {
      title: 'Tính năng chính',
      items: [
        'AI Hỏi-Đáp (tự nhận diện ngôn ngữ)',
        'Hướng dẫn yêu cầu/tài liệu theo tư cách lưu trú',
        'Template kiểm tra tài liệu',
        'Lịch sử hội thoại giữ ngữ cảnh',
        'Bảng điều khiển quản trị (nội dung/thuật ngữ/vận hành đa ngôn ngữ)',
        'Bộ tính điểm HSP',
      ],
    },
    gallery: {
      title: 'Màn hình',
      imgAlt: (n: number) => `Ảnh màn hình AI Visa ${n}`,
    },
    effects: {
      items: [
        { title: 'Giảm chi phí vận hành', desc: 'Tự động trả lời đa ngôn ngữ và hướng dẫn có cấu trúc giúp giảm tải hỏi đáp.' },
        { title: 'Tăng tỷ lệ tự giải quyết', desc: 'AI Hỏi-Đáp và dữ liệu có cấu trúc thúc đẩy giải quyết ở phản hồi đầu tiên.' },
        { title: 'Ngăn hướng dẫn sai', desc: 'Dẫn nguồn và quản lý cập nhật đảm bảo tuân theo chuẩn mới nhất.' },
      ],
    },
  }
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0066c5] mb-4 whitespace-normal sm:whitespace-nowrap leading-tight">
              {vi ? VI.hero.title : t('pages.achievements.ai.aivisaPage.title', 'AI Visa | Multilingual Guidance for Japan Visa')}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
              {vi ? VI.hero.intro : t('pages.achievements.ai.aivisaPage.intro', 'Clearly organize required documents for each status of residence in multiple languages. With AI Q&A and an HSP Points Calculator, it supports procedures aligned with the latest standards.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {t('cta.contact', 'Contact')}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}achievements/ai`}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {t('cta.moreCases', 'See Other Cases')}
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src={assetPath('AI/AIVisa/1.png')}
              alt={t('pages.achievements.ai.aivisaPage.gallery.image1Alt', 'AI Visa screen image')}
              className="w-full rounded-xl shadow-md object-cover aspect-video"
              loading="eager"
            />
          </div>
        </div>

        {/* 課題 / ソリューション / 技術 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{vi ? VI.challenges.title : t('pages.achievements.ai.aivisaPage.challenges.title', 'User/Operations Challenges')}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              {(vi ? VI.challenges.items : [
                t('pages.achievements.ai.aivisaPage.challenges.item1', 'Provide accurate, multilingual guidance for the latest Japan visa information'),
                t('pages.achievements.ai.aivisaPage.challenges.item2', 'Improve self-resolution rate via AI-based Q&A'),
                t('pages.achievements.ai.aivisaPage.challenges.item3', 'Follow policy changes quickly and prevent incorrect guidance'),
              ]).map((text, i)=>(<li key={i}>{text}</li>))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{vi ? VI.solution.title : t('pages.achievements.ai.aivisaPage.solution.title', 'Solution')}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              {(vi ? VI.solution.items : [
                t('pages.achievements.ai.aivisaPage.solution.item1', 'Structure requirements/documents by status of residence and provide them in multiple languages'),
                t('pages.achievements.ai.aivisaPage.solution.item2', 'AI Q&A with auto language detection for instant answers'),
                t('pages.achievements.ai.aivisaPage.solution.item3', 'Visualize eligibility with the HSP points calculator'),
              ]).map((text, i)=>(<li key={i}>{text}</li>))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 text-left">
            <h2 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{vi ? VI.skills.title : t('pages.achievements.ai.aivisaPage.skills.title', 'Technologies & Skills')}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
              <li>{t('pages.achievements.ai.aivisaPage.skills.item1', 'HTML / CSS')}</li>
              <li>{t('pages.achievements.ai.aivisaPage.skills.item2', 'Tailwind CSS')}</li>
              <li>{t('pages.achievements.ai.aivisaPage.skills.item3', 'React')}</li>
              <li>{t('pages.achievements.ai.aivisaPage.skills.item4', 'TypeScript')}</li>
              <li>{t('pages.achievements.ai.aivisaPage.skills.item5', 'Java')}</li>
              <li>{t('pages.achievements.ai.aivisaPage.skills.item6', 'PostgreSQL')}</li>
            </ul>
          </div>
        </div>

        {/* 機能ハイライト */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0066c5] mb-4 text-center">{vi ? VI.features.title : t('pages.achievements.ai.aivisaPage.features.title', 'Key features')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(vi ? VI.features.items : [
              t('pages.achievements.ai.aivisaPage.features.item1', 'AI Q&A (auto language detection)'),
              t('pages.achievements.ai.aivisaPage.features.item2', 'Guides for requirements/documents by status of residence'),
              t('pages.achievements.ai.aivisaPage.features.item3', 'Templates for document checks'),
              t('pages.achievements.ai.aivisaPage.features.item4', 'Conversation history with context retention'),
              t('pages.achievements.ai.aivisaPage.features.item5', 'Admin console (content/glossary/multilingual operations)'),
              t('pages.achievements.ai.aivisaPage.features.item6', 'HSP points calculator'),
            ]).map((f, idx) => (
              <div key={f} className="p-4 rounded-lg bg-gray-50 text-gray-800 text-center">
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* ギャラリー（プレースホルダ） */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0066c5] mb-4 text-center">{vi ? VI.gallery.title : t('pages.achievements.ai.aivisaPage.gallery.title', 'Screens')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[2,3,4].map((n, idx) => (
              <img
                key={n}
                src={assetPath(`AI/AIVisa/${n}.png`)}
                alt={vi ? VI.gallery.imgAlt(idx+2) : t(`pages.achievements.ai.aivisaPage.gallery.imageAlt${idx+2}`, `AI Visa screen image ${idx+2}`)}
                className="w-full aspect-video rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* 効果 */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          {(vi ? VI.effects.items : [
            { title: t('pages.achievements.ai.aivisaPage.effects.item1.title', 'Reduce operating costs'), desc: t('pages.achievements.ai.aivisaPage.effects.item1.desc', 'Multilingual auto-replies and structured guides reduce inquiry load.') },
            { title: t('pages.achievements.ai.aivisaPage.effects.item2.title', 'Increase self-resolution rate'), desc: t('pages.achievements.ai.aivisaPage.effects.item2.desc', 'AI Q&A and structured data promote first-response resolution.') },
            { title: t('pages.achievements.ai.aivisaPage.effects.item3.title', 'Prevent incorrect guidance'), desc: t('pages.achievements.ai.aivisaPage.effects.item3.desc', 'Source citations and update management ensure compliance with latest standards.') },
          ]).map((b) => (
            <div key={b.t} className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-lg font-semibold text-[#0066c5] mb-2 text-center">{vi ? b.title : b.t}</h3>
              <p className="text-gray-700">{vi ? b.desc : b.d}</p>
            </div>
          ))}
        </div>

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
              href={`${import.meta.env.BASE_URL}achievements/ai`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              {t('cta.moreCases', 'See Other Cases')}
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
