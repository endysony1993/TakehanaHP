import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../../hooks/useT'

export type AchievementsDropdownProps = {
  label?: string
  className?: string
  buttonClassName?: string
}

export default function AchievementsDropdown({
  label = 'Achievements',
  className = '',
  buttonClassName = '',
}: AchievementsDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
        closeTimer.current = null
      }
    }
  }, [])

  // Center panel to the trigger on desktop
  const alignClass = 'left-1/2 -translate-x-1/2'

  const openNow = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpen(true)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 180)
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      { /* ensure i18n accessible */ }
      { (() => { const { locale } = useT(); (window as any).__locale = locale; return null })() }
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#3C7FE6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3C7FE6] ${buttonClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-white text-lg">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute z-[9999] mt-2 ${alignClass} ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity transform`}
        role="menu"
        aria-label="実績事例"
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
      >
        <div className="w-[min(92vw,24rem)] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <ul className="p-2 sm:p-3">
            <li>
              <MenuLink to="/achievements/ai" title={useT().locale === 'vi' ? 'AI' : 'AI'} onClick={() => setOpen(false)} />
            </li>
            <li>
              <MenuLink to="/achievements/iot" title={useT().locale === 'vi' ? 'IoT' : 'IoT'} onClick={() => setOpen(false)} />
            </li>
            <li>
              <MenuLink to="/achievements/smart-manufacturing" title={useT().locale === 'vi' ? 'Giải pháp cho sản xuất' : useT().locale === 'en' ? 'Smart Manufacturing' : '製造業向けソリューション'} onClick={() => setOpen(false)} />
            </li>
            <li>
              <MenuLink to="/achievements/others" title={useT().locale === 'vi' ? 'Khác' : useT().locale === 'en' ? 'Others' : 'その他'} onClick={() => setOpen(false)} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function MenuLink({ to, title, onClick }: { to: string; title: string; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
      role="menuitem"
    >
      {title}
    </Link>
  )
}
