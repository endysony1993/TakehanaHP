

import { Link, useLocation } from "react-router-dom";
import { assetPath } from "../utils/assetPath";
import { useEffect } from "react";
// import ContactSection from "../components/ui/ContactSection"; // Removed unused import
import { RiBrainLine, RiWifiLine, RiBuilding2Line, RiAppsLine, RiContractLine, RiTeamLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiCss3,
  SiElectron,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiKotlin,
  SiXcode,
  SiReact,
  SiSwift,
  SiTypescript,
  SiVuedotjs,
  SiC,
  SiCplusplus,
  SiNodedotjs,
  SiRedis,
  SiSpringboot,
  SiMongodb,
  SiOracle,
  SiPostgresql,
} from "react-icons/si";
import {
  TbCode,
  TbApps,
  TbTopologyStar3,
  TbPlugConnected,
  TbCloudCog,
  TbRocket,
  TbDatabase,
  TbApi,
  TbCoffee,
} from "react-icons/tb";

// Dummy reference to satisfy TypeScript noUnusedLocals in certain incremental builds
// (icons are also used within JSX skill arrays below, but some build modes were flagging them)
void [SiC, SiCplusplus];

const achievementsLinks = [
  {
    title: "AI関連",
    desc: "AI画像解析・予測システムなどの導入支援",
    to: "/achievements/ai",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#5A45D6] shadow-sm mb-4 mx-auto">
        <RiBrainLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "IoT関連",
    desc: "IoT連携による生産効率化",
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
    desc: "CRM、業務管理システムなど多様な開発実績",
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
    desc: "要件定義から納品まで一貫対応",
    to: "/services/development/project-based",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#475569] to-[#64748B] shadow-sm mb-4 mx-auto">
        <RiContractLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "ラボ型開発",
    desc: "専属チーム体制で柔軟・安定した開発支援",
    to: "/services/development/lab-based",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#84CC16] to-[#A3E635] shadow-sm mb-4 mx-auto">
        <RiTeamLine size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "オフショア",
    desc: "海外拠点活用でコスト最適化と体制強化",
    to: "/services/delivery/offshore",
    icon: () => (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] shadow-sm mb-4 mx-auto">
        <FaGlobe size={26} color="#fff" />
      </div>
    ),
  },
  {
    title: "オンサイト",
    desc: "日本側リーダーが品質・進行を直接管理",
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
          className="relative w-screen max-w-none left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] text-white text-center min-h-[60svh] sm:min-h-[60vh] flex items-center justify-center bg-center bg-cover bg-no-repeat overflow-hidden shadow-none"
          style={{ backgroundImage: `url(${assetPath('banner.png')})` }}
        >
        <div className="absolute inset-0 bg-black/40 w-full"></div>
        <div className="relative z-10 px-6 w-full">

          
           <h1 className="text-3xl sm:text-3xl lg:text-2xl font-semibold mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            竹華ジャパン株式会社は、AI・IoT・製造業向けソリューションで<br />
            グローバルなDX推進を支援します。
          </h1>
         		<div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                  href={`${import.meta.env.BASE_URL}#contact`}
                  onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')) }}
                  className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
                >
                  お問い合わせ
                </a>
						
						</div>
        </div>
      </section>

      {/* Why Us Section */}
  <section className="pt-4 sm:pt-8 pb-10 sm:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:flex items-center gap-4 sm:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5 text-[#0066c5]">
              私たちの強み
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-5 leading-relaxed">
        日本と海外の両拠点を活かし、先端技術を用いた多様なソリューションを展開しています。
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
              src={assetPath('about-image.png')}
              alt="About Zhuhua"
              className="rounded-2xl shadow-xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#0066c5]">
            実績
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievementsLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="block bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066c5]"
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="w-full flex flex-col items-center text-center"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  tabIndex={-1}
                >
                  {item.icon()}
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 whitespace-nowrap">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#0066c5]">
            サービス
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesLinks.map((service, i) => (
              <Link
                key={i}
                to={service.to}
                className="block text-center p-6 sm:p-8 border-t-4 border-[#0066c5] rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-[#0066c5]"
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="w-full"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  tabIndex={-1}
                >
                  {service.icon()}
                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 whitespace-nowrap">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

  {/* Skills Section */}
      <section className="py-12 sm:py-20 bg-gray-50" id="skills">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#0066c5]">技術スタック</h2>
          {/* Categories */}
          <div className="space-y-12">
            {/* Front-End */}
            <div>
              <h3 className="group text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-4 relative">
                <span className="relative">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0ea5e9] via-[#0066c5] to-[#312e81] opacity-70 group-hover:opacity-90 transition-opacity"></span>
                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur shadow-lg ring-1 ring-white/30 group-hover:scale-[1.04] group-hover:shadow-xl transition-all">
                    <span className="text-2xl">🧩</span>
                  </span>
                </span>
                <span className="relative inline-flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#0066c5] to-[#312e81] font-extrabold tracking-wide">
                    フロントエンド
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 bg-gradient-to-r from-[#0ea5e9] via-[#27a4ff] to-transparent rounded-full origin-left scale-x-75 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {(
                  [
                    { name: 'Android', Icon: SiAndroid, color: '#3DDC84' },
                    { name: 'ArkTS', Icon: TbCode, color: '#6366F1' }, // fallback
                    { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
                    { name: 'Electron', Icon: SiElectron, color: '#47848F' },
                    { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
                    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
                    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
                    { name: 'jQuery', Icon: SiJquery, color: '#0769AD' },
                    { name: 'Kotlin', Icon: SiKotlin, color: '#0095D5' },
                    { name: 'Objective-C', Icon: SiXcode, color: '#1575F9' },
                    { name: 'React', Icon: SiReact, color: '#61DAFB' },
                    { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
                    { name: 'Swift', Icon: SiSwift, color: '#FA7343' },
                    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
                    { name: 'UniApp', Icon: TbApps, color: '#10B981' }, // fallback color
                    { name: 'Vue', Icon: SiVuedotjs, color: '#42B883' },
                  ] as { name: string; Icon: IconType; color: string }[]
                ).map(({ name, Icon, color }) => (
                  <div key={name} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Icon style={{ color }} className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Back-End */}
            <div>
              <h3 className="group text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-4 relative">
                <span className="relative">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#4F46E5] to-[#312e81] opacity-70 group-hover:opacity-90 transition-opacity"></span>
                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur shadow-lg ring-1 ring-white/30 group-hover:scale-[1.04] group-hover:shadow-xl transition-all">
                    <span className="text-2xl">⚙️</span>
                  </span>
                </span>
                <span className="relative inline-flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#312e81] font-extrabold tracking-wide">
                    バックエンド
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-transparent rounded-full origin-left scale-x-75 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {(
                  [
                    // { name: 'C', Icon: SiC, color: '#A8B9CC' },
                    // { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
                    { name: 'Java', Icon: TbCoffee, color: '#007396' },
                    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
                    { name: 'Netty', Icon: TbTopologyStar3, color: '#6366F1' },
                    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
                    { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
                    { name: 'Socket', Icon: TbPlugConnected, color: '#4F46E5' },
                    { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
                    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
                  ] as { name: string; Icon: IconType; color: string }[]
                ).map(({ name, Icon, color }) => (
                  <div key={name} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Icon style={{ color }} className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Database / Middleware */}
            <div>
              <h3 className="group text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-4 relative">
                <span className="relative">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D9488] via-[#0066c5] to-[#312e81] opacity-70 group-hover:opacity-90 transition-opacity"></span>
                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur shadow-lg ring-1 ring-white/30 group-hover:scale-[1.04] group-hover:shadow-xl transition-all">
                    <span className="text-2xl">💾</span>
                  </span>
                </span>
                <span className="relative inline-flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#31b8ff] to-[#312e81] font-extrabold tracking-wide">
                    データベース / ミドルウェア
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 bg-gradient-to-r from-[#0D9488] via-[#31b8ff] to-transparent rounded-full origin-left scale-x-75 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {(
                  [
                    { name: 'SQL', Icon: TbDatabase, color: '#4B5563' },
                    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
                    { name: 'Oracle', Icon: SiOracle, color: '#F80000' },
                    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
                    { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
                    { name: 'Dubbo', Icon: TbApi, color: '#0A84FF' },
                    { name: 'Nacos', Icon: TbCloudCog, color: '#2563EB' },
                    { name: 'RocketMQ', Icon: TbRocket, color: '#D9534F' },
                  ] as { name: string; Icon: IconType; color: string }[]
                ).map(({ name, Icon, color }) => (
                  <div key={name} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Icon style={{ color }} className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
