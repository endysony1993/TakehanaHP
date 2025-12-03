import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { assetPath } from '../../utils/assetPath'
import { useLang } from '../../context/LangContext'
import type { ReactElement } from 'react'

export default function Header() {
  const { lang, setLang } = useLang()
  const labels: Record<'ja'|'en'|'vi', string> = { ja: '日本語', en: 'English', vi: 'Tiếng Việt' }
  const FlagIcon: Record<'ja'|'en'|'vi', ReactElement> = {
    ja: (
      <svg width="20" height="13" viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10">
        <rect width="3" height="2" fill="#fff"/>
        <circle cx="1.5" cy="1" r="0.5" fill="#bc002d"/>
      </svg>
    ),
    en: (
      // Use GB for English to avoid regional ambiguity
      <svg width="20" height="13" viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10">
        <clipPath id="gb-clip"><rect width="3" height="2"/></clipPath>
        <g clipPath="url(#gb-clip)">
          <rect width="3" height="2" fill="#012169"/>
          <path d="M0 0 L3 2 M3 0 L0 2" stroke="#fff" strokeWidth="0.3"/>
          <path d="M0 0 L3 2 M3 0 L0 2" stroke="#C8102E" strokeWidth="0.15"/>
          <path d="M1.5 0 V2 M0 1 H3" stroke="#fff" strokeWidth="0.5"/>
          <path d="M1.5 0 V2 M0 1 H3" stroke="#C8102E" strokeWidth="0.3"/>
        </g>
      </svg>
    ),
    vi: (
      <svg width="20" height="13" viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10">
        <rect width="3" height="2" fill="#da251d"/>
        <polygon points="1.5,0.4 1.7,1.1 2.4,1.1 1.8,1.5 2.0,2.1 1.5,1.7 1.0,2.1 1.2,1.5 0.6,1.1 1.3,1.1" fill="#ffcd00"/>
      </svg>
    ),
  }
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
        <div className="relative ml-3 sm:ml-4">
          <details className="group relative">
            <summary className="list-none inline-flex items-center rounded-full px-2 py-1 bg-white/15 hover:bg-white/25 cursor-pointer">
              <span className="inline-flex items-center" aria-hidden>
                {FlagIcon[lang as 'ja'|'en'|'vi']}
              </span>
              <span className="sr-only">{labels[lang as 'ja'|'en'|'vi']}</span>
            </summary>
            <ul className="hidden group-open:block absolute right-0 mt-1 rounded-xl bg-[#034a8c]/95 backdrop-blur-sm shadow-lg ring-1 ring-white/10 z-50 px-1 py-1">
              {options.map(({ code, label }) => (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    className={`flex items-center justify-center w-9 h-7 rounded-md m-1 ${isActive(code) ? 'bg-white' : 'hover:bg-white/10'} `}
                    aria-label={label}
                    title={label}
                  >
                    <span className="inline-flex items-center" aria-hidden>{FlagIcon[code]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  )
}
