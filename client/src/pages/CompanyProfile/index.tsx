import { Link } from 'react-router-dom'
import { useT } from '../../hooks/useT'

export default function CompanyProfile() {
  const { t } = useT()
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">{t('pages.company.title', '会社概要')}</h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          {t('pages.company.index.desc', '当社の概要・チーム・パートナーをご紹介します。')}
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <Link to="about" className="block rounded-xl border shadow-sm p-5 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-[#0066c5] mb-1">{t('pages.company.index.about', '会社概要')}</h2>
            <p className="text-sm text-gray-600">{t('pages.company.index.aboutDesc', '会社情報・理念・沿革')}</p>
          </Link>
          <Link to="team" className="block rounded-xl border shadow-sm p-5 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-[#0066c5] mb-1">{t('pages.company.index.team', 'チーム紹介')}</h2>
            <p className="text-sm text-gray-600">{t('pages.company.index.teamDesc', '多様な専門性を持つメンバー')}</p>
          </Link>
          <Link to="partners" className="block rounded-xl border shadow-sm p-5 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-[#0066c5] mb-1">{t('pages.company.index.partners', 'パートナー')}</h2>
            <p className="text-sm text-gray-600">{t('pages.company.index.partnersDesc', '協業企業・団体')}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
