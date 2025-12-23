import { assetPath } from "../../utils/assetPath";
import { useT } from '../../hooks/useT'
import { useI18n } from '../../context/I18nContext'

export default function Partners() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'
  const VI = { title: 'Đối tác', logoAlt: 'Logo đối tác' }
  const logos: string[] = Array.from({ length: 15 }, (_, i) => assetPath(`PartnerLogo/${i + 1}.png`));
  const headerTitle = vi ? VI.title : t('pages.company.partners.title', t('pages.company.company.partners.title', 'パートナー・提携先'))
  const logoAlt = vi ? VI.logoAlt : t('pages.company.partners.logoAlt', t('pages.company.company.partners.logoAlt', 'パートナーロゴ'))

  return (
    <section className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">{headerTitle}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {logos.map((src, idx) => (
            <div key={idx} className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src={src} alt={logoAlt} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
