import { assetPath } from "../../../utils/assetPath";
export default function MobileBatteryShare() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] mb-6">
          モバイルバッテリーシェアシステム
        </h2>
        
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
         管理システム・充電スタンド・モバイルアプリが連携し、IoT技術を活用してモバイルバッテリーの貸出・返却・稼働状況をリアルタイムで管理。
        ユーザーにとって便利な充電サービスを提供するとともに、運営者には新たなビジネス機会を創出します。
        </p>
      </div>

      {/* Client Request / Solution / Skills Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6">
        {/* Client Request */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">クライアントのご要望</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>都市部や商業施設でのモバイルバッテリー貸出サービスを新規導入したい</li>
            <li>ユーザーが簡単に借りて返却できる仕組みが必要</li>
            <li>運営側がリアルタイムで稼働状況や在庫を把握したい</li>
          </ul>
        </div>
        {/* Our Solution */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">当社のソリューション</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>IoT連携によるリアルタイム管理システムを構築</li>
            <li>アプリ・Web・充電スタンドを統合したシームレスなユーザー体験を設計</li>
            <li>管理システムでのデータ分析・運用最適化機能を実装</li>
          </ul>
        </div>
        {/* Skills & Techniques */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-[#31B4A8] mb-3 text-center">技術・スキル</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2 flex-1">
            <li>IoTデバイス制御・データ連携</li>
            <li>React/TypeScriptによるフロントエンド開発</li>
            <li>Node.js/ExpressによるAPI・管理システム構築</li>
            <li>クラウドインフラ（AWS/Azure）活用</li>
            <li>UI/UX設計・多言語対応</li>
          </ul>
        </div>
      </div>

      {/* System Overview */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <div className="w-full h-80 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/battery.png')} alt="バッテリーシェア概要" className="h-80 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#31B4A8] mb-4 text-center">システム概要</h3>
          <p className="text-gray-700 leading-relaxed">
            管理システム、モバイルアプリ、充電スタンドの三つの主要部分から構成される共有モバイルバッテリーシステムは、
            データのリアルタイム連携を実現し、利便性と運営効率の両立を目指しています。
          </p>
        </div>
      </div>

      {/* Section: 管理システム */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[#31B4A8] mb-4 text-center">管理システム</h3>
          <p className="text-gray-700 leading-relaxed">
            管理システムはシステム全体の「頭脳」として機能し、貸出状況や電量状態、機柜の分布をリアルタイムで監視。
            また、ユーザー管理、データ統計、故障予警などの機能を通じて、安定した運営を支援します。
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/management-side.png')} alt="管理システム" className="h-80 object-contain" />
          </div>
        </div>
      </div>

      {/* Section: 充電スタンド */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/cabinet-side.png')} alt="充電スタンド" className="h-80 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#31B4A8] mb-4 text-center">充電スタンド</h3>
          <p className="text-gray-700 leading-relaxed">
            充電スタンドはモバイルバッテリーの実際の貸出・返却を担う物理デバイスです。大容量・高速充電・防盗設計を備え、
            内部のスマート認識技術により自動で充電状態を管理し、常に満電のモバイルバッテリーを提供します。
          </p>
        </div>
      </div>

      {/* Section: モバイルアプリ */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[#31B4A8] mb-4 text-center">モバイルアプリ</h3>
          <p className="text-gray-700 leading-relaxed">
            モバイルアプリはユーザーとの直接の接点。アプリやミニプログラムを通じて、
            近くの機柜検索、貸出予約、スキャン利用、返却操作などをスムーズに行えます。
            また、オンラインサポートやフィードバック機能も搭載しています。
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full h-64 flex items-center justify-center">
            <img src={assetPath('Iot/MobileBatteryShare/mobile-side.png')} alt="モバイルアプリ" className="h-80 object-contain" />
          </div>
        </div>
      </div>



      {/* CTA */}
      <div className="mt-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              お問い合わせ
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/iot`}
              className="inline-block px-8 py-3 rounded-xl bg-[#31B4A8] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              他の事例を見る
            </a>
          </div>
        </div>
      </div>

    </section>

    
  );
}
