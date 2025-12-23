import { useT } from '../../hooks/useT'
import { useI18n } from '../../context/I18nContext'

export default function About() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'
  const VI = {
    title: 'Hồ sơ công ty',
    aboutTitle: 'Giới thiệu về Takehana Japan Co., Ltd.',
    info: {
      name: 'Tên công ty',
      nameValue: 'Takehana Japan Co., Ltd.',
      founded: 'Thành lập',
      foundedValue: '2022',
      capital: 'Vốn điều lệ',
      capitalValue: '5.000.000 JPY',
      ceo: 'Người đại diện',
      ceoValue: 'He Xin',
      address: 'Địa chỉ',
      addressValue:
        'Tầng 7, Tòa Suishin, 1-11-1 Kitasaiwai, Nishi-ku, Yokohama, Kanagawa 220-0004',
      business: 'Lĩnh vực kinh doanh',
      businessValue: 'AI, IoT, hệ thống doanh nghiệp; tư vấn DX; phát triển offshore/on-site',
      group: 'Công ty liên kết',
      groupValue: 'Dalian Zhuhua Technology Co., Ltd. (Trụ sở Trung Quốc)'
    },
    philosophy: {
      title: 'Triết lý',
      desc:
        'Kết nối tương lai bằng công nghệ — Đồng hành cùng khách hàng, xã hội và nhân viên để gặt hái sự phát triển bền vững, bằng sức mạnh của công nghệ số và tư duy quốc tế.'
    },
    history: {
      title: 'Lịch sử',
      item1: '2016: Thành lập trụ sở Trung Quốc (Dalian Zhuhua Technology Co., Ltd.)',
      item2: '2018: Tăng cường năng lực AI/IoT',
      item3: '2021: Mở rộng tư vấn DX',
      item4: '2022: Thành lập Takehana Japan Co., Ltd.'
    }
  }
  return (
    <section className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">{vi ? VI.title : t('pages.company.title', '会社概要')}</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
          {/* 会社イメージ画像（後で差し替え） */}
          {/* <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              会社イメージ
            </div>
          </div> */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold text-[#0066c5] mb-3">{vi ? VI.aboutTitle : t('pages.company.about.title', '竹華ジャパン株式会社について')}</h2>
          
            {/* 会社情報カード（企業向けクリーンスタイル） */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
              <dl className="space-y-3 text-sm">
                {(vi
                  ? [
                      { label: VI.info.name, value: VI.info.nameValue },
                      { label: VI.info.founded, value: VI.info.foundedValue },
                      { label: VI.info.capital, value: VI.info.capitalValue },
                      { label: VI.info.ceo, value: VI.info.ceoValue },
                      { label: VI.info.address, value: VI.info.addressValue },
                      { label: VI.info.business, value: VI.info.businessValue },
                      { label: VI.info.group, value: VI.info.groupValue }
                    ]
                  : [
                      { label: t('pages.company.info.name', '会社名'), value: t('pages.company.info.nameValue', '竹華ジャパン株式会社') },
                      { label: t('pages.company.info.founded', '設立'), value: t('pages.company.info.foundedValue', '2022年') },
                      { label: t('pages.company.info.capital', '資本金'), value: t('pages.company.info.capitalValue', '500万円') },
                      { label: t('pages.company.info.ceo', '代表者'), value: t('pages.company.info.ceoValue', '贺鑫') },
                      { label: t('pages.company.info.address', '所在地'), value: t('pages.company.info.addressValue', '〒220-0004 神奈川県横浜市西区北幸一丁目11番1号 水信ビル7階') },
                      { label: t('pages.company.info.business', '事業内容'), value: t('pages.company.info.businessValue', 'AI・IoT・業務システム、DXコンサル、オフショア/オンサイト開発') },
                      { label: t('pages.company.info.group', '関連会社'), value: t('pages.company.info.groupValue', '大連竹華科技有限公司（中国本社）') }
                    ])
                .map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[9rem_1fr] md:grid-cols-[8rem_1fr] lg:grid-cols-[7rem_1fr] gap-x-1 items-start"
                  >
                    <dt className="text-gray-700 font-semibold">{item.label}</dt>
                    <dd className="text-gray-700 leading-relaxed">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#0066c5] mb-3">{vi ? VI.philosophy.title : t('pages.company.philosophy.title', '企業理念')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{vi ? VI.philosophy.desc : t('pages.company.philosophy.desc', '「技術で未来をつなぐ」—— 私たちは、最先端のIT技術とグローバルな視点で、お客様・社会・社員の持続的な成長に貢献します。')}</p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#0066c5] mb-3">{vi ? VI.history.title : t('pages.company.history.title', '沿革')}</h2>
          <ul className="pl-5 text-gray-700 text-sm space-y-1">
            {(vi
              ? [VI.history.item1, VI.history.item2, VI.history.item3, VI.history.item4]
              : [
                  t('pages.company.history.item1', '2016年：中国本社（大連竹華科技有限公司）設立'),
                  t('pages.company.history.item2', '2018年：AI・IoT分野の体制強化'),
                  t('pages.company.history.item3', '2021年：DXコンサル事業拡大'),
                  t('pages.company.history.item4', '2022年：竹華ジャパン株式会社設立')
                ])
            .map(text => (
              <li key={text} className="relative">
                <span className="absolute -left-5 text-[#0066c5]">•</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
