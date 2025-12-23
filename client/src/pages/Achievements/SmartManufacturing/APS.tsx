// APS（高度生産計画）
// 画像の使い方:
// 1) 画像を `client/public/images/aps/` に追加します。
// 2) 下の `galleryImages` にパスを追記します（例: "/images/aps/hero.png"）。
// 3) ギャラリーに自動で表示されます。

import { assetPath } from "../../../utils/assetPath";
import { useT } from '../../../hooks/useT'

const galleryImages: string[] = [1,2,3].map(n => assetPath(`SmartManufacturing/aps/${n}.png`));

export default function ApsIntro() {
  const { t } = useT()
  return (
    <main className="min-h-screen bg-white text-gray-900">
  {/* ヒーロー */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] text-center">
            {t('pages.achievements.sm.apsPage.title', 'APS — Advanced Production Scheduling')}
          </h1>
          <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
            {t('pages.achievements.sm.apsPage.intro', 'APS provides intelligent planning tools to improve accuracy and efficiency in production scheduling.')}
          </p>

          {/* ギャラリー */}
          <div className="mt-10">
        
            {galleryImages.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => (
                  <div key={src + idx} className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="h-56 sm:h-64 lg:h-72 flex items-center justify-center bg-white p-2">
                      <img src={src} alt={t('pages.achievements.sm.apsPage.galleryAlt', `APS image ${idx + 1}`)} className="h-full max-h-full w-auto max-w-full object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border-2 border-dashed border-gray-300 bg-white text-center text-gray-500 h-56 sm:h-64 lg:h-72 flex flex-col items-center justify-center"
                  >
                    <p className="font-medium">{t('pages.achievements.sm.apsPage.noImage', 'No image')}</p>
                    <p className="text-sm mt-1">{t('pages.achievements.sm.apsPage.addHint', 'Add files under /SmartManufacturing/aps/ and list them in the array above.')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 主な機能 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-2xl font-semibold text-center text-[#0066c5]">{t('pages.achievements.sm.apsPage.features.title', 'Key Features')}</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.order.title', 'Order List Management')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.order.desc', 'Prioritize orders by due date, quantity, and business rules to support fast, sound planning decisions.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.stock.title', 'Stock Matching & Shortage Detection')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.stock.desc', 'Match demand and stock in real time to detect shortages early and prevent shop-floor issues.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.report.title', 'Matching Result Reports')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.report.desc', 'Generate reports clarifying actions for fulfillments, shortages, procurement, and substitutes.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.shortageSummary.title', 'Shortage Summary')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.shortageSummary.desc', 'Consolidate shortages by item/series to streamline replenishment and supplier coordination.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.plan.title', 'Production Plan Management')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.plan.desc', 'Create feasible plans considering constraints and smoothly deploy instructions to the shop floor.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.capacity.title', 'Capacity Board (Visualization)')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.capacity.desc', 'Visualize equipment/process loads to identify bottlenecks and level across lines/shifts.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.orderCheck.title', 'Order Feasibility Check')}</h3>
            <p className="text-gray-700">{t('pages.achievements.sm.apsPage.features.orderCheck.desc', 'Validate feasibility and priority for on-time delivery, with alerts to prevent delays.')}</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-2">{t('pages.achievements.sm.apsPage.features.stockAlert.title', 'Stock Alert Rules')}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>{t('pages.achievements.sm.apsPage.features.stockAlert.item1', 'Common/non-common item logic')}</li>
              <li>{t('pages.achievements.sm.apsPage.features.stockAlert.item2', 'Consider sales history')}</li>
              <li>{t('pages.achievements.sm.apsPage.features.stockAlert.item3', 'Auto notifications under threshold')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目的
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
  <h2 className="text-2xl font-semibold text-center text-[#0066c5]">主な目的</h2>
        <p className="mt-4 text-gray-800 text-center max-w-3xl mx-auto">
          生産計画を最適化し、資材の備えを高め、遅延を削減します。
        </p>
      </section> */}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border p-8 text-center">
          <h3 className="text-xl font-semibold mb-3 text-[#0066c5]">{t('pages.achievements.sm.apsPage.cta.title', 'Request APS materials & demo')}</h3>
          <p className="text-gray-700 mb-6">{t('pages.achievements.sm.apsPage.cta.desc', 'We tailor scope and rollout steps to your product mix and operations.')}</p>
       				<div className="mt-12 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                {t('cta.contact', 'Contact Us')}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}achievements/smart-manufacturing`}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                {t('cta.moreCases', 'See More Cases')}
              </a>
						</div>
					</div>
				</div>
        </div>
      </section>
    </main>
  )
}
