import type { ReactElement } from 'react'
import { useLang } from '../../context/LangContext'
import { useT } from '../../hooks/useT'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const { t } = useT()
  const labels: Record<'ja'|'en'|'vi', string> = {
    ja: t('lang.ja', '日本語'),
    en: t('lang.en', 'English'),
    vi: t('lang.vi', 'Tiếng Việt'),
  }

  const FlagIcon: Record<'ja'|'en'|'vi', ReactElement> = {
    ja: (
      <svg viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <rect width="3" height="2" fill="#fff"/>
        <circle cx="1.5" cy="1" r="0.5" fill="#bc002d"/>
      </svg>
    ),
    en: (
      <svg viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <clipPath id="uk-clip"><rect width="3" height="2"/></clipPath>
        <g clipPath="url(#uk-clip)">
          <rect width="3" height="2" fill="#012169"/>
          <path d="M0 0 L3 2 M3 0 L0 2" stroke="#fff" strokeWidth="0.3"/>
          <path d="M0 0 L3 2 M3 0 L0 2" stroke="#C8102E" strokeWidth="0.15"/>
          <path d="M1.5 0 V2 M0 1 H3" stroke="#fff" strokeWidth="0.5"/>
          <path d="M1.5 0 V2 M0 1 H3" stroke="#C8102E" strokeWidth="0.3"/>
        </g>
      </svg>
    ),
    vi: (
      <svg viewBox="0 0 3 2" aria-hidden className="rounded-[2px] ring-1 ring-black/10 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <rect width="3" height="2" fill="#da251d"/>
        <g transform="translate(1.5 1) scale(0.6)">
          <path
            d="M 0,-1
               L 0.2245,-0.3090
               L 0.9511,-0.3090
               L 0.3633,0.1180
               L 0.5878,0.8090
               L 0,0.3820
               L -0.5878,0.8090
               L -0.3633,0.1180
               L -0.9511,-0.3090
               L -0.2245,-0.3090
               Z"
            fill="#FFDD00"
          />
        </g>
      </svg>
    ),
  }

  const options: Array<{ code: 'ja'|'en'|'vi', label: string }> = [
    { code: 'ja', label: labels.ja },
    { code: 'en', label: labels.en },
    { code: 'vi', label: labels.vi },
  ]

  const switchLang = (next: 'ja'|'en'|'vi') => {
    if (next === lang) return
    // Set language and perform a full reload for guaranteed consistency
    setLang(next as any)
    try { window.location.reload() } catch {}
  }

  return (
    <div className="relative">
      <details className="group relative">
        <summary className="list-none inline-flex items-center justify-center rounded-md overflow-hidden cursor-pointer w-9 h-8 align-middle translate-y-[1px]">
          <span className="inline-flex items-center w-full h-full" aria-hidden>
            {FlagIcon[lang as 'ja'|'en'|'vi']}
          </span>
          <span className="sr-only">{labels[lang as 'ja'|'en'|'vi']}</span>
        </summary>
        {/* Full reload approach: no transitional overlay needed */}
        <ul className="hidden group-open:block absolute right-0 mt-1 rounded-xl bg-[#034a8c]/95 backdrop-blur-sm shadow-lg ring-1 ring-white/10 z-50 px-1 py-1">
          {options.map(({ code, label }) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => switchLang(code)}
                className="flex items-center justify-center w-9 h-7 rounded-md overflow-hidden m-1 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label={label}
                title={label}
              >
                <span className="inline-flex items-center w-full h-full" aria-hidden>{FlagIcon[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
