

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ContactSection from "../components/ui/ContactSection";
import { RiBrainLine, RiWifiLine, RiBuilding2Line, RiAppsLine, RiContractLine, RiTeamLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const achievementsLinks = [
  {
    title: "AI関連",
    desc: "AI画像解析・予測システムなどの導入支援。",
    to: "/achievements/ai",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#5A45D6] shadow-sm mb-4 mx-auto">
        <RiBrainLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "IoT関連",
    desc: "IoT連携による生産効率化。",
    to: "/achievements/iot",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#34D399] to-[#059669] shadow-sm mb-4 mx-auto">
        <RiWifiLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "製造業向けソリューション",
    desc: "ERP・MES・APS・WMS カスタマイズ支援",
    to: "/achievements/smart-manufacturing",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] shadow-sm mb-4 mx-auto">
        <RiBuilding2Line size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "その他",
    desc: "CRM、業務管理システムなど多様な開発実績。",
    to: "/achievements/others",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#60A5FA] to-[#2563EB] shadow-sm mb-4 mx-auto">
        <RiAppsLine size={26} color="#fff" />
      </div>
    ),
  },
];

const servicesLinks = [
  {
    title: "請負型開発",
    desc: "要件定義から納品まで一括対応。品質とスケジュール重視のプロジェクト型。",
    to: "/services/development/project-based",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#475569] to-[#64748B] shadow-sm mb-4 mx-auto">
        <RiContractLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "ラボ型開発",
    desc: "専属チーム体制で長期的・柔軟な開発支援を実現。",
    to: "/services/development/lab-based",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#84CC16] to-[#A3E635] shadow-sm mb-4 mx-auto">
        <RiTeamLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "オフショア",
    desc: "海外開発拠点を活用し、コスト最適化とリソース拡充。",
    to: "/services/delivery/offshore",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] shadow-sm mb-4 mx-auto">
        <FaGlobe size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "オンサイト",
    desc: "日本側リーダーによる品質・進行の直接管理。",
    to: "/services/delivery/onsite",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#FB7185] shadow-sm mb-4 mx-auto">
        <MdLocationOn size={26} color="#fff" />
      </div>
    ),
  },
];

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact') {
      // Defer a tick in case layout still rendering, then jump instantly (no animation)
      requestAnimationFrame(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      });
    }
  }, [hash]);

  return (
  <div className="space-y-0 font-sans text-gray-800" style={{marginTop: 0}}>
      {/* Hero Section */}
        <section
          className="w-full relative text-white text-center pb-20 sm:pb-32 min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center bg-center bg-cover bg-no-repeat overflow-hidden shadow-none"
          style={{ backgroundImage: 'url(/banner.png)' }}
        >
        <div className="absolute inset-0 bg-black/40 w-full"></div>
        <div className="relative z-10 px-6 w-full">

          
           <h1 className="text-3xl sm:text-3xl lg:text-2xl font-semibold mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            竹華ジャパン株式会社は、AI・IoT・製造業向けソリューションで<br />
            グローバルなDX推進を支援します。
          </h1>
         		<div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                  href="/#contact"
                  className="inline-block px-8 py-3 rounded-xl bg-[#034a8c] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
                >
                  お問い合わせ
                </a>
						
						</div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:flex items-center gap-8 sm:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#034a8c]">
              私たちの強み
            </h2>
            <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed">
        日本と中国の両拠点を活かし、先端技術を用いた多様なソリューションを展開しています。
            </p>
            <ul className="space-y-4 text-gray-800 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6EC1E4] to-[#3C7FE6] text-white text-2xl font-bold shadow-lg animate-bounce">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M7 11.5L10 14.5L15 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6EC1E4" />
                        <stop offset="1" stopColor="#3C7FE6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-semibold">オンサイトリード</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6EC1E4] to-[#3C7FE6] text-white text-2xl font-bold shadow-lg animate-bounce">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M7 11.5L10 14.5L15 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6EC1E4" />
                        <stop offset="1" stopColor="#3C7FE6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-semibold">オフショア推進</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6EC1E4] to-[#3C7FE6] text-white text-2xl font-bold shadow-lg animate-bounce">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M7 11.5L10 14.5L15 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6EC1E4" />
                        <stop offset="1" stopColor="#3C7FE6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-semibold">高パフォーマンス</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6EC1E4] to-[#3C7FE6] text-white text-2xl font-bold shadow-lg animate-bounce">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M7 11.5L10 14.5L15 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6EC1E4" />
                        <stop offset="1" stopColor="#3C7FE6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-semibold">低リスク</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 sm:mt-10 md:mt-0">
            <img
              src="/about-image.png"
              alt="About Zhuhua"
              className="rounded-2xl shadow-xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#034a8c]">
            主な実績
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievementsLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="block bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#034a8c]"
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="w-full flex flex-col items-center text-center"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  tabIndex={-1}
                >
                  {item.icon()}
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 ">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

  {/* Services Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#034a8c]">
            サービス
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesLinks.map((service, i) => (
              <Link
                key={i}
                to={service.to}
                className="block text-center p-6 sm:p-8 border-t-4 border-[#034a8c] rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-[#034a8c]"
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="w-full"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  tabIndex={-1}
                >
                  {service.icon()}
                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section (embedded) */}
      <ContactSection />
  
    </div>
  );
}
