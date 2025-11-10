import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export type ServicesDropdownProps = {
  label?: string
  className?: string
  buttonClassName?: string
}

/**
 * ServicesDropdown
 * - Desktop: hover or click to open; two-column grouped menu
 * - Mobile: click to toggle
 */
export default function ServicesDropdown({
  label = 'Services',
  className = '',
  buttonClassName = '',
}: ServicesDropdownProps) {
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
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#3C7FE6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3C7FE6] ${buttonClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-white text-lg">{label}</span>
        <svg
           aria-label="サービス"
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

      {/* Panel */}
      <div
        className={`absolute z-[9999] mt-2 ${alignClass} ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity transform`}
        role="menu"
        aria-label="サービス"
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
      >
        <div className="w-[min(92vw,30rem)] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-10 p-6 sm:p-8 md:grid-cols-2">
            {/* 開発モデル（左） */}
            <div className='ms-5'>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0a58a3]">開発モデル</h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <MenuLink
                    to="/services/development/project-based"
                    title="請負型"
                    onClick={() => setOpen(false)}
                  />
                </li>
                <li>
                  <MenuLink
                    to="/services/development/lab-based"
                    title="ラボ型"
                    onClick={() => setOpen(false)}
                  />
                </li>
              </ul>
            </div>

            {/* デリバリーモデル（右） */}
            <div className='ms-10 me-5'>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0a58a3]">デリバリーモデル</h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <MenuLink to="/services/delivery/offshore" title="オフショア" onClick={() => setOpen(false)} />
                </li>
                <li>
                  <MenuLink to="/services/delivery/onsite" title="オンサイト" onClick={() => setOpen(false)} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuLink({
  to,
  title,
  subtitle,
  onClick,
}: {
  to: string
  title: string
  subtitle?: string
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-md px-2 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
      role="menuitem"
    >
      <div className="text-sm font-medium text-gray-900">{title}</div>
      {subtitle ? <div className="text-[12px] text-gray-500">{subtitle}</div> : null}
    </Link>
  )
}
