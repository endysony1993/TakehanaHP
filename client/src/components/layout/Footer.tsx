import { Link } from "react-router-dom";

import ReactCountryFlag from "react-country-flag";

export default function Footer() {
  return (
  <footer className="bg-gradient-to-b from-[#053461] to-[#0B0A1F] text-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#053461]/20 pb-10 text-white">
        {/* Company Info */}
        <div>
          {/* <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <ReactCountryFlag countryCode="CN" svg style={{ width: '1.5em', height: '1.5em', borderRadius: '2px', boxShadow: '0 1px 2px #0002' }} title="China" />
            <span style={{ fontFamily: 'Noto Sans SC, SimHei, sans-serif', letterSpacing: '0.02em' }}>大连竹华科技有限公司</span>
            <span className="text-xs ml-1"></span>
          </h2> */}
          {/* <ul className="space-y-2 text-sm leading-relaxed text-white">
            <li>辽宁省大连高新技术产业园区火炬路7号25层666号</li>
            <li>
              ホームページ：{" "}
              <a
                href="https://www.zhuhuakeji.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3C7FE6] text-white"
              >
                https://www.zhuhuakeji.com/
              </a>
            </li>
          </ul> */}
          <div className="">
            <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <ReactCountryFlag countryCode="JP" svg style={{ width: '1.5em', height: '1.5em', borderRadius: '2px', boxShadow: '0 1px 2px #0002' }} title="Japan" />
              <span style={{ fontFamily: 'Noto Sans JP, Meiryo, sans-serif', letterSpacing: '0.02em' }}>竹華ジャパン株式会社</span>
              <span className="text-xs ml-1"></span>
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-white">
              <li className="flex flex-wrap items-center gap-x-4 gap-y-1 whitespace-nowrap">
                <span>〒220-0004 <br />神奈川県横浜市西区北幸一丁目11番1号 水信ビル7階</span>
                <span>E-mail：<a href="mailto:he.jian@zhuhuakeji.com" className="hover:text-[#3C7FE6] text-white">he.jian@zhuhuakeji.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
  <div className="gap-2 md:ml-30">
          <h2 className="text-white font-bold text-lg mb-3">ナビゲーション</h2>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/" className="hover:text-[#3C7FE6] text-white">ホーム</Link></li>
            {/* <li><Link to="/services" className="hover:text-[#3C7FE6] text-white">サービス</Link></li> */}
            <li><Link to="/company/about" className="hover:text-[#3C7FE6] text-white">会社概要</Link></li>
            <li><Link to="/#contact" className="hover:text-[#3C7FE6] text-white">お問い合わせ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-bold text-lg mb-3">サービス</h2>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/achievements/ai" className="hover:text-[#3C7FE6] text-white">AI</Link></li>
            <li><Link to="/achievements/iot" className="hover:text-[#3C7FE6] text-white">IoT</Link></li>
            <li><Link to="/achievements/smart-manufacturing" className="hover:text-[#3C7FE6] text-white">製造業向けソリューション
</Link></li>
            {/* <li><Link to="/achievements" className="hover:text-[#3C7FE6] text-white">開発実績</Link></li> */}
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
  <div className="text-center text-xs mt-6 space-y-2 text-white/80">
        <p>© ZHUHUA TECHNOLOGY 2025 All rights reserved.</p>
        {/* <p>開発、システム開発、Webソリューションの専門企業</p> */}
        <p>
          <Link to="/privacy" className="hover:text-[#3C7FE6] text-white">プライバシーポリシー</Link> ｜{" "}
          <Link to="/terms" className="hover:text-[#3C7FE6] text-white">利用規約</Link>
        </p>
      </div>
    </footer>
  );
}
