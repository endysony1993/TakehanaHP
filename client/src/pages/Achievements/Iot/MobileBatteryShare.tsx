import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'
import { useI18n } from '../../../context/I18nContext'
export default function MobileBatteryShare() {
  const { t } = useT()
  const { locale } = useI18n()
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-6">
          {t('pages.achievements.iot.batteryPage.title', 'Hệ thống chia sẻ pin di động')}
        </h2>
        
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t('pages.achievements.iot.batteryPage.intro', 'Hệ thống quản lý, trạm sạc và ứng dụng di động liên kết qua IoT để quản lý thời gian thực việc cho thuê, hoàn trả và trạng thái hoạt động của pin di động, mang lại dịch vụ sạc tiện lợi cho người dùng và cơ hội kinh doanh mới cho nhà vận hành.')}
        </p>
      </div>

      {/* Client Request / Solution / Skills Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6">
        {/* Client Request */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{t('pages.achievements.iot.batteryPage.client.title', 'Yêu cầu từ khách hàng')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.iot.batteryPage.client.item1', 'Triển khai dịch vụ cho thuê pin di động tại khu đô thị và trung tâm thương mại')}</li>
            <li>{t('pages.achievements.iot.batteryPage.client.item2', 'Cung cấp quy trình mượn/trả đơn giản cho người dùng')}</li>
            <li>{t('pages.achievements.iot.batteryPage.client.item3', 'Cho phép nhà vận hành giám sát vận hành và tồn kho theo thời gian thực')}</li>
          </ul>
        </div>
        {/* Our Solution */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{t('pages.achievements.iot.batteryPage.solution.title', 'Giải pháp của chúng tôi')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.iot.batteryPage.solution.item1', 'Xây dựng nền tảng quản lý thời gian thực qua liên kết IoT')}</li>
            <li>{t('pages.achievements.iot.batteryPage.solution.item2', 'Thiết kế trải nghiệm liền mạch giữa app, web và trạm sạc')}</li>
            <li>{t('pages.achievements.iot.batteryPage.solution.item3', 'Triển khai phân tích và tối ưu vận hành trong hệ thống quản trị')}</li>
          </ul>
        </div>
        {/* Skills & Techniques */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#0066c5] mb-3 text-center">{t('pages.achievements.iot.batteryPage.skills.title', 'Công nghệ & kỹ năng')}</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>{t('pages.achievements.iot.batteryPage.skills.item1', 'Điều khiển thiết bị IoT và liên kết dữ liệu')}</li>
            <li>{t('pages.achievements.iot.batteryPage.skills.item2', 'Phát triển front-end với React/TypeScript')}</li>
            <li>{t('pages.achievements.iot.batteryPage.skills.item3', 'API/hệ thống quản trị với Node.js/Express')}</li>
            <li>{t('pages.achievements.iot.batteryPage.skills.item4', 'Hạ tầng đám mây (AWS/Azure)')}</li>
            <li>{t('pages.achievements.iot.batteryPage.skills.item5', 'Thiết kế UI/UX và hỗ trợ đa ngôn ngữ')}</li>
          </ul>
        </div>
      </div>

      {/* System Overview */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <div className="w-full h-80 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/battery.png')} alt={t('pages.achievements.iot.batteryPage.images.overviewAlt', 'Tổng quan hệ thống chia sẻ pin')} className="h-80 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-4 text-center">{t('pages.achievements.iot.batteryPage.overview.title', 'Tổng quan hệ thống')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.achievements.iot.batteryPage.overview.desc', 'Hệ thống gồm hệ thống quản trị, ứng dụng di động và trạm sạc, đồng bộ dữ liệu thời gian thực để cân bằng tiện ích người dùng và hiệu quả vận hành.')}
          </p>
        </div>
      </div>

      {/* Section: 管理システム */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-4 text-center">{t('pages.achievements.iot.batteryPage.management.title', 'Hệ thống quản trị')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.achievements.iot.batteryPage.management.desc', 'Nền tảng quản trị là “bộ não” của hệ thống, giám sát trạng thái mượn/trả, mức pin và phân bố tủ theo thời gian thực; quản lý người dùng, phân tích và cảnh báo để vận hành ổn định.')}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/management-side.png')} alt={t('pages.achievements.iot.batteryPage.images.managementAlt', 'Màn hình hệ thống quản trị')} className="h-80 object-contain" />
          </div>
        </div>
      </div>

      {/* Section: 充電スタンド */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/cabinet-side.png')} alt={t('pages.achievements.iot.batteryPage.images.cabinetAlt', 'Thiết bị trạm sạc')} className="h-80 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-4 text-center">{t('pages.achievements.iot.batteryPage.cabinet.title', 'Trạm sạc')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.achievements.iot.batteryPage.cabinet.desc', 'Thiết bị vật lý đảm nhiệm mượn/trả pin. Dung lượng lớn, sạc nhanh, thiết kế chống trộm; nhận diện thông minh để tự động quản lý trạng thái sạc, luôn cung cấp pin đầy cho người dùng.')}
          </p>
        </div>
      </div>

      {/* Section: モバイルアプリ */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-4 text-center">{t('pages.achievements.iot.batteryPage.mobile.title', 'Ứng dụng di động')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.achievements.iot.batteryPage.mobile.desc', 'Ứng dụng di động là điểm chạm trực tiếp với người dùng. Qua app hoặc mini-program, người dùng có thể tìm tủ gần nhất, đặt mượn, quét để sử dụng và trả mượt mà, cùng hỗ trợ trực tuyến và phản hồi.')}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/mobile-side.png')} alt={t('pages.achievements.iot.batteryPage.images.mobileAlt', 'Mobile app screen')} className="h-80 object-contain" />
          </div>
        </div>
      </div>



      {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              {t('cta.contact', 'Liên hệ')}
            </a>
            <a
              href={`/achievements/iot?lang=${locale}`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              {t('cta.moreCases', 'Xem thêm các dự án khác')}
            </a>
          </div>
        </div>
      </div>

    </section>

    
  );
}
