import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { assetPath } from '../../utils/assetPath'
import { useLang } from '../../context/LangContext'

export default function Header() {
  const { lang, setLang } = useLang()
  const labels: Record<'ja'|'en'|'vi', string> = { ja: '日本語', en: 'English', vi: 'Tiếng Việt' }
  const options: Array<{ code: 'ja'|'en'|'vi', label: string }> = [
    { code: 'ja', label: labels.ja },
    { code: 'en', label: labels.en },
    { code: 'vi', label: labels.vi },
  ]
  const isActive = (code: 'ja'|'en'|'vi') => lang === code
  return (
  <header className="bg-gradient-to-b from-[#031C35] to-[#034a8c] text-white">
  <div className="container mx-auto px-3 py-3 grid grid-cols-[auto_1fr_auto] items-center">
        {/* Left: Logo + Brand */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-white" aria-label="Home">
          <img
            src={assetPath('logo.png')}
            alt="Zhuhua Japan Logo"
            className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-extrabold text-sm sm:text-base md:text-lg">竹華ジャパン</span>
            <span className="text-[9px] sm:text-[11px] md:text-xs tracking-wide">ZHUHUA TECHNOLOGY</span>
          </div>
        </Link>

        {/* Center: Navbar */}
        <div className="flex w-full justify-end sm:justify-end">
          <Navbar />
        </div>

        {/* Right: Language dropdown */}
        <div className="relative">
          <details className="group">
            <summary className="list-none inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs sm:text-sm bg-white/10 hover:bg-white/20 cursor-pointer">
              <span>{labels[lang as 'ja'|'en'|'vi']}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-40 rounded-md bg-[#034a8c] shadow-lg ring-1 ring-white/10 divide-y divide-white/10">
              {options.map(({ code, label }) => (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    className={`block w-full text-left px-3 py-2 text-xs sm:text-sm ${isActive(code) ? 'bg-white text-[#034a8c] font-semibold' : 'text-white hover:bg-white/10'}`}
                  >{label}</button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  )
}
