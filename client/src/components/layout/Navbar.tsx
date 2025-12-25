import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ServicesDropdown from '../ui/ServicesDropdown'
import AchievementsDropdown from '../ui/AchievementsDropdown'
import CompanyDropdown from '../ui/CompanyDropdown'
import { useT } from '../../hooks/useT'
import ContactModal from '../ui/ContactModal'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [openAchievements, setOpenAchievements] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const closeAll = () => {
    setMobileOpen(false)
    setOpenServices(false)
    setOpenAchievements(false)
    setOpenCompany(false)
  }

  // Disable background scroll and interactions when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY
      const html = document.documentElement
      const body = document.body as HTMLBodyElement
      // Prevent scroll
      html.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overscrollBehavior = 'none'
      return () => {
        html.style.overflow = ''
        body.style.position = ''
        const top = body.style.top
        body.style.top = ''
        body.style.left = ''
        body.style.right = ''
        body.style.width = ''
        body.style.overscrollBehavior = ''
        // Restore scroll position
        const y = top ? -parseInt(top, 10) : 0
        window.scrollTo(0, y)
      }
    }
  }, [mobileOpen])

  // Direct hash link navigation to embedded contact section on homepage
  // Also listen for a global event to open the contact modal from anywhere
  useEffect(() => {
    const handler = () => setContactOpen(true)
    window.addEventListener('open-contact-modal', handler as EventListener)
    return () => window.removeEventListener('open-contact-modal', handler as EventListener)
  }, [])

  // Intercept any link clicks to ...#contact and open the modal instead
  useEffect(() => {
    const onCaptureClick = (e: Event) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      const anchor = t.closest('a') as HTMLAnchorElement | null
      const href = anchor?.getAttribute('href') || ''
      if (anchor && /#contact$/.test(href)) {
        e.preventDefault()
        e.stopPropagation()
        setContactOpen(true)
      }
    }
    document.addEventListener('click', onCaptureClick, true)
    return () => document.removeEventListener('click', onCaptureClick, true)
  }, [])

  return (
    <>
      {/* use translations */}
      { /* eslint-disable-next-line @typescript-eslint/no-unused-vars */ }
      { (() => { const { t } = useT(); return null })() }
      { /* locale helper */ }
      { (() => { const { locale } = useT(); (window as any).__locale = locale; return null })() }
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center justify-end gap-4 text-white">
        {/* <Link to="/" className="text-white hover:text-[#3C7FE6] text-lg">
          ホーム
        </Link> */}
        <ServicesDropdown label={useT().locale === 'vi' ? 'Dịch vụ' : useT().t('nav.services', 'サービス')} buttonClassName="text-lg" />
        <AchievementsDropdown label={useT().locale === 'vi' ? 'Dự án' : useT().locale === 'en' ? 'Our Work' : useT().t('nav.achievements', '実績事例')} buttonClassName="text-lg" />
        <CompanyDropdown label={useT().locale === 'vi' ? 'Giới thiệu công ty' : useT().locale === 'en' ? 'About Us' : useT().t('nav.company', '会社概要')} buttonClassName="text-lg" />
        <div className="mr-3">
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          onClick={() => { closeAll(); setContactOpen(true) }}
           className="ml-1 inline-flex items-center justify-center bg-gradient-to-r from-[#3C7FE6] via-[#4FC3F7] to-[#1976D2] text-white font-semibold rounded-full shadow-lg hover:from-[#1976D2] hover:to-[#3C7FE6] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]/60 w-32 min-w-[8rem] h-11 transition-all duration-200 transform hover:scale-110"
          aria-label="お問い合わせフォームを開く"
        >
          {useT().t('cta.contact', 'お問い合わせ')}
        </button>
      </nav>

      {/* Mobile nav */}
      <div className="sm:hidden flex justify-end">
        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center rounded-md p-2 text-white hover:bg-[#3C7FE6]/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
          </svg>
        </button>

        {mobileOpen && (
          <div className="fixed inset-0 z-[9999] bg-[#034a8c] text-white">
            <div className="flex items-end justify-end px-4 py-3 border-b border-white/10">
              {/* <span className="text-base font-semibold">メニュー</span> */}
              <button
                type="button"
                aria-label="メニューを閉じる"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-md p-2 text-white hover:bg-[#3C7FE6]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ul className="divide-y divide-white/10 overflow-y-auto h-[calc(100vh-3.25rem)]">
              <li className="px-5 py-3">
                <LanguageSwitcher />
              </li>
              <li>
                <Link
                  to="/"
                  onClick={closeAll}
                  className="block px-5 py-4 text-white hover:bg-[#3C7FE6]/20"
                >
                  {useT().t('nav.home', 'ホーム')}
                </Link>
              </li>

              {/* Services submenu */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-white hover:bg-[#3C7FE6]/20"
                  aria-expanded={openServices}
                  onClick={() => setOpenServices((v) => !v)}
                >
                  <span>{useT().locale === 'en' ? 'Services' : useT().t('nav.services', 'サービス')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${openServices ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                  </svg>
                </button>
                {openServices && (
                  <div className="bg-[#034a8c]/80">
                    {/* Delivery Models (top) */}
                    <div className="px-5 pt-2 pb-1 text-xs font-semibold text-[#3C7FE6]">
                      {useT().locale === 'vi' ? 'Mô hình triển khai' : useT().locale === 'en' ? 'Delivery Models' : useT().t('nav.delivery.header', 'デリバリーモデル')}
                    </div>
                    <ul className="px-3 pb-2">
                      <li>
                        <Link to="/services/delivery/offshore" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Offshore' : useT().locale === 'en' ? 'Offshore' : useT().t('nav.delivery.offshore', 'オフショア')}</Link>
                      </li>
                      <li>
                        <Link to="/services/delivery/onsite" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Onsite' : useT().locale === 'en' ? 'Onsite' : useT().t('nav.delivery.onsite', 'オンサイト')}</Link>
                      </li>
                    </ul>
                    {/* Development Models (bottom) */}
                    <div className="px-5 pt-2 pb-1 text-xs font-semibold text-[#3C7FE6] mt-4">
                      {useT().locale === 'vi' ? 'Mô hình phát triển' : useT().locale === 'en' ? 'Development Models' : useT().t('nav.dev.header', '開発モデル')}
                    </div>
                    <ul className="px-3 pb-3">
                      <li>
                        <Link to="/services/development/project-based" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Dự án' : useT().locale === 'en' ? 'Project-based' : useT().t('nav.dev.project', 'プロジェクト型')}</Link>
                      </li>
                      <li>
                        <Link to="/services/development/lab-based" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Mô hình Lab' : useT().locale === 'en' ? 'Lab-based' : useT().t('nav.dev.lab', 'ラボ型')}</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Achievements submenu */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-white hover:bg-[#3C7FE6]/20"
                  aria-expanded={openAchievements}
                  onClick={() => setOpenAchievements((v) => !v)}
                >
                  <span>{useT().locale === 'en' ? 'Our Work' : useT().t('nav.achievements', '実績事例')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${openAchievements ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                  </svg>
                </button>
                {openAchievements && (
                    <ul className="bg-[#034a8c]/80 px-2 py-2">
                      <li><Link to="/achievements/ai" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'AI' : useT().locale === 'en' ? 'AI' : useT().t('nav.ach.ai', 'AI')}</Link></li>
                      <li><Link to="/achievements/iot" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'IoT' : useT().locale === 'en' ? 'IoT' : useT().t('nav.ach.iot', 'IoT')}</Link></li>
                      <li><Link to="/achievements/smart-manufacturing" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Giải pháp cho sản xuất' : useT().locale === 'en' ? 'Smart Manufacturing' : useT().t('nav.ach.smart', '製造業向けソリューション')}</Link></li>
                      <li><Link to="/achievements/others" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Khác' : useT().locale === 'en' ? 'Others' : useT().t('nav.ach.others', 'その他')}</Link></li>
                    </ul>
                )}
              </li>

              {/* Company submenu */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-white hover:bg-[#3C7FE6]/20"
                  aria-expanded={openCompany}
                  onClick={() => setOpenCompany((v) => !v)}
                >
                  <span>{useT().locale === 'vi' ? 'Về chúng tôi' : useT().locale === 'en' ? 'About Us' : useT().t('nav.company', '会社概要')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${openCompany ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                  </svg>
                </button>
                {openCompany && (
                  <ul className="bg-[#034a8c]/80 px-2 py-2">
                    <li><Link to="/company/about" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Giới thiệu công ty' : useT().locale === 'en' ? 'Company Profile' : useT().t('nav.company.about', '会社概要')}</Link></li>
                    {/* <li><Link to="/company/team" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">チーム紹介</Link></li> */}
                    <li><Link to="/company/partners" onClick={closeAll} className="block rounded-md px-2 py-2 text-sm text-white hover:bg-[#3C7FE6]/20">{useT().locale === 'vi' ? 'Đối tác' : useT().locale === 'en' ? 'Partners' : useT().t('nav.company.partners', 'パートナー')}</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => { setContactOpen(true); closeAll() }}
                  className="block w-full text-left px-5 py-4 text-white hover:bg-[#3C7FE6]/20 focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
                  aria-label="お問い合わせフォームを開く"
                >
                  {useT().t('cta.contact', 'Contact')}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
