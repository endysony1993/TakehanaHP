import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { assetPath } from '../../utils/assetPath'

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-[#031C35] to-[#053461] text-white sticky top-0 z-[1050]">
  <div className="container mx-auto px-3 py-3 min-h-16 grid grid-cols-[auto_1fr_auto] items-center">
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

        {/* Right: Placeholder (keeps center perfectly centered regardless of left width) */}
        <div />
      </div>
    </header>
  )
}
