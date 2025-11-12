import { useEffect } from 'react';
import { assetPath } from '../../../utils/assetPath';

export default function ParkingManagementSystem() {
		useEffect(() => {
			document.title = '駐車場管理システム';
		let meta = document.querySelector(`meta[name="description"]`);
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', 'description');
			document.head.appendChild(meta);
		}
		meta.setAttribute('content', '駐車場管理システム: 無人化運営・収益性向上・顧客体験改善・セキュアな車主向け付加価値サービスを提供');
	}, []);

	return (
		<div className="font-sans text-gray-800">
            {/* Hero Section */}
                  <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                      <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-4">
                          駐車場管理システム
                        </h1>
                       
                        <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                          データ化・精緻化・標準化を軸に、無人化運営・資源利用率向上・電子決済率向上を推進し、<br className="hidden sm:block" />
					車主中心の付加価値サービス（予約・長期契約・整備予約・保険/金融）を統合管理します。
                        </p>
                        
                        <br />
                      </div>
                      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
                        <img src={assetPath('Iot/ParkingManagementSystem/hero.png')} alt="Parking Management System Hero" className="w-full max-w-md md:max-w-2xl rounded-2xl shadow-md object-cover transition-transform duration-200 hover:scale-105" />
                      </div>
                    </div>
                  </section>

		

			{/* 概要 */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">概要</h2>
				<p className="leading-relaxed text-gray-700 text-sm sm:text-base">
					本システムは駐車場運営の中核情報（入出庫・契約・料金・決済・設備状態）を一元化し、標準化されたデータ構造で分析・最適化を可能にします。無人化を支える自動認識（ANPR/センサー）とキャッシュレス決済連携により収益性を強化し、利用率向上・コスト削減・不正抑止を同時に実現。さらに、予約・長期契約・整備/洗車・保険/金融など車主向け高付加価値サービスをアプリ / Web ポータルで提供し顧客体験を継続的に改善します。
				</p>
			</section>

			{/* 導入効果 */}
			<section className="py-12 sm:py-16 bg-gray-50 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#0066c5]">導入効果</h2>
					<div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ title: '収益性向上', desc: '動的料金・電子決済・回転率最適化で売上増加' },
							{ title: '運営効率化', desc: '無人化・自動認識・集中管理で人件費/工数削減' },
							{ title: '顧客体験改善', desc: '予約・ナビ・履歴照会・付加価値サービスで満足度向上' },
							{ title: '不正/漏れ防止', desc: 'ANPR・センサー連携と監査ログで不正駐車/収受漏れを抑止' },
						].map((c, i) => (
							<div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:shadow-md transition">
								<h3 className="font-semibold text-lg mb-2 text-[#0066c5]">{c.title}</h3>
								<p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 主な機能 */}
			<section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#0066c5]">主な機能</h2>
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h3 className="text-xl font-semibold mb-4 text-[#0066c5]">運営側（管理端）</h3>
						<ul className="space-y-3 text-sm sm:text-base text-gray-700">
							{['料金徴収','会員/契約管理','車両検索','レポート/ダッシュボード','アラート通知','権限/ロール管理'].map((f,i)=>(
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{f}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-4 text-[#0066c5]">車主側（ユーザー）</h3>
						<ul className="space-y-3 text-sm sm:text-base text-gray-700">
							{['キャッシュレス決済','駐車場検索/ナビ','予約/長期契約','明細・利用履歴','整備/洗車予約','クーポン/プロモ'].map((f,i)=>(
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{f}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* システム構成 */}
		
      <section className="py-16 px-6 bg-gray-50" id="endpoints">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#0066c5] mb-3">システム構成</h3>
          <p className="text-gray-600 mb-10">
						三層クラウド（政府・企業・個人）連携により法令適合と拡張性を両立。ゲート/センサー/ANPR で入出庫を自動認識し、第三者決済（各種QR/カード）と API 経由で統合。疎結合設計で将来の機能追加を容易化します。
          </p>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center place-items-center">
            {[1,2,3,4].map(n => (
							<img key={n} src={assetPath(`Iot/ParkingManagementSystem/${n}.png`)} alt={`Parking Management System 画面 ${n}`} className="rounded-lg shadow-md mx-auto" loading="lazy" />
            ))}
          </div>

        </div>
      </section>


			{/* 連携・拡張 */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">連携・拡張</h2>
				<ul className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
					{['サードパーティ決済ゲートウェイ','既存POS/会計システム','CRM/BI/分析基盤','公開API・SDK提供','Webhook/イベント連携','SFTP/バッチ連携'].map((item,i)=>(
						<li key={i} className="flex items-start gap-2">
							<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{item}
						</li>
					))}
				</ul>
			</section>

			{/* セキュリティ/コンプライアンス */}
			<section className="py-12 sm:py-16 bg-gray-50 px-4">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">セキュリティ / コンプライアンス</h2>
					<ul className="space-y-3 text-sm sm:text-base text-gray-700">
						{[
							'通信暗号化（TLS）と保存データの暗号化オプション',
							'操作/認証/料金処理等の詳細ログと監査証跡',
							'権限分離（管理/監査/運営/外部API）',
							'個人情報保護（最小権限・マスキング・保持期間管理）'
						].map((item,i)=>(
							<li key={i} className="flex items-start gap-2">
								<span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#0066c5]"></span>{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* 提供形態 */}
			<section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0066c5]">提供形態</h2>
				<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
					クラウド/SaaS を基本提供。オンプレミスは要件定義後に個別相談。PoC で機能フィットと運営フローを検証し、段階的なスケールアウトで本番展開・最適化を進めます。
				</p>
				<ol className="space-y-3 text-sm sm:text-base text-gray-700 list-decimal list-inside">
					<li>ヒアリング / 現状分析</li>
					<li>PoC（自動認識・料金モデル検証）</li>
					<li>本番構築（統合・移行・教育）</li>
					<li>運用最適化（レポート分析 / 機能拡張）</li>
				</ol>
			</section>

            
      {/* CTA */}
      <div className=" px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              お問い合わせ
            </a>
            <a
              href={`${import.meta.env.BASE_URL}achievements/iot`}
              className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-center text-white font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              他の事例を見る
            </a>
          </div>
        </div>
      </div>
		</div>

        
	);
}

