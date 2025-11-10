import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#034a8c] mb-8 text-center">会社概要</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
          {/* 会社イメージ画像（後で差し替え） */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              会社イメージ
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold text-[#034a8c] mb-3">竹華ジャパン株式会社について</h2>
          
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>会社名：竹華ジャパン株式会社</li>
              <li>設立：2021年</li>
              <li>資本金：1000万円</li>
              <li>代表者：贺建</li>
              <li>所在地：〒220-0004 神奈川県横浜市西区北幸一丁目11番1号 水信ビル7階</li>
              <li>事業内容：AI・IoT・業務システム開発、DXコンサルティング、オフショア/オンサイト開発</li>
              <li>関連会社：大連竹華科技有限公司（中国本社）</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#034a8c] mb-3">企業理念</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            「技術で未来をつなぐ」——私たちは、最先端のIT技術とグローバルな視点で、お客様・社会・社員の持続的な成長に貢献します。
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#034a8c] mb-3">沿革</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>2016年：中国本社（大連竹華科技有限公司）設立</li>
            <li>2018年：AI・IoT分野の開発体制強化</li>
            <li>2021年：DX推進・コンサルティング事業拡大</li>
            <li>2024年：新オフィスへ移転</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
