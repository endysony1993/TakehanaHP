import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
export default function AIInspection() {
  const { t } = useT()
  return (
    <section className="text-center py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">{t('pages.achievements.ai.inspectionPage.title', 'Mẫu chụp ảnh bằng AI')}</h2>

      <p className="text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
        {t('pages.achievements.ai.inspectionPage.intro', 'Từ ảnh phong cảnh, ghép cảnh anime cho đến minh họa theo phong cách, mỗi bức ảnh đều trở thành một tác phẩm sáng tạo đầy bất ngờ với mẫu chụp ảnh bằng AI.')}
      </p>

      {/* Client Request / Solution / Skills Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Client Request */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3">{t('pages.achievements.ai.inspectionPage.client.title', 'Yêu cầu từ khách hàng')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.ai.inspectionPage.client.item1', 'Phát triển dịch vụ trải nghiệm chụp ảnh mới dựa trên AI')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.client.item2', 'Cần cơ chế để người dùng có thể tạo ảnh dễ dàng với nhiều mẫu khác nhau')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.client.item3', 'Đạt chất lượng ghép ảnh và chuyển đổi phong cách cao trong thời gian ngắn')}</li>
          </ul>
        </div>
        {/* Our Solution */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3">{t('pages.achievements.ai.inspectionPage.solution.title', 'Giải pháp của chúng tôi')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.ai.inspectionPage.solution.item1', 'Tự phát triển thuật toán ghép ảnh và chuyển đổi phong cách bằng AI')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.solution.item2', 'Thiết kế UI trực quan cho web/app di động')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.solution.item3', 'Xử lý và lưu trữ ảnh tốc độ cao trên đám mây')}</li>
          </ul>
        </div>
        {/* Skills & Techniques */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3">{t('pages.achievements.ai.inspectionPage.skills.title', 'Công nghệ & kỹ năng')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.ai.inspectionPage.skills.item1', 'Xử lý ảnh bằng AI (GAN, chuyển đổi phong cách)')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.skills.item2', 'Phát triển front-end với React/TypeScript')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.skills.item3', 'Xây dựng máy chủ AI bằng Python (FastAPI)')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.skills.item4', 'Khai thác hạ tầng đám mây (AWS/GCP)')}</li>
            <li>{t('pages.achievements.ai.inspectionPage.skills.item5', 'Thiết kế UI/UX và hỗ trợ đa ngôn ngữ')}</li>
          </ul>
        </div>
      </div>
      <br />

      {/* Template Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-12">
        {/* 1. Scenic Photo Template */}
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col">
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[500px]"
            style={{ backgroundImage: `url(${assetPath('AI/AIInspection/fuji-template.jpg')})` }}
            aria-label={t('pages.achievements.ai.inspectionPage.scenic.aria', 'Mẫu ảnh phong cảnh')}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#0066c5]">{t('pages.achievements.ai.inspectionPage.scenic.title', 'Mẫu ảnh phong cảnh')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('pages.achievements.ai.inspectionPage.scenic.desc', 'Tạo ảnh ghép AI với nền là các danh thắng khắp Nhật Bản như núi Phú Sĩ, tháp Tokyo, Nara, Fushimi Inari, v.v.')}
            </p>
          </div>
        </div>

        {/* 2. Cosplay Template */}
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col" >
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[500px]"
            style={{ backgroundImage: `url(${assetPath('AI/AIInspection/cosplay-template.jpg')})` }}
            aria-label={t('pages.achievements.ai.inspectionPage.cosplay.aria', 'Mẫu cosplay')}
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-[#0066c5]">{t('pages.achievements.ai.inspectionPage.cosplay.title', 'Mẫu cosplay')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('pages.achievements.ai.inspectionPage.cosplay.desc', 'AI biến bạn thành nhân vật nổi tiếng hoặc nhân vật trong các tác phẩm kinh điển.')}
            </p>
          </div>
        </div>
      </div>

          {/* 3. Anime Scene Template */}
            <div className="grid grid-cols-1 gap-8 px-6 md:px-12">
            <br />
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition bg-white flex flex-col">
          <div
            className="w-full flex-1 bg-cover bg-center min-h-[200px] sm:min-h-[600px]"
            style={{ backgroundImage: `url(${assetPath('AI/AIInspection/anime-template.jpg')})` }}
            aria-label={t('pages.achievements.ai.inspectionPage.anime.aria', 'Mẫu bối cảnh anime')}
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-[#0066c5]">{t('pages.achievements.ai.inspectionPage.anime.title', 'Mẫu bối cảnh anime')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('pages.achievements.ai.inspectionPage.anime.desc', 'Tạo ảnh ghép như thể chụp cùng nhân vật tại bối cảnh các anime nổi tiếng như “Your Name” hay “Spirited Away”.')}
            </p>
          </div>
        </div>
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
              {t('cta.contact', 'Liên hệ')}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/ai`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
            >
              {t('cta.moreCases', 'Xem thêm các dự án khác')}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
