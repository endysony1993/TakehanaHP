
export default function Team() {
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#0066c5] mb-8 text-center">チーム紹介</h1>
        <p className="text-gray-700 leading-relaxed mb-10 text-center">
          竹華ジャパン株式会社は、多様なバックグラウンドと専門性を持つメンバーが集い、
          お客様の課題解決と価値創出に取り組んでいます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* チームメンバー例 */}
          <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-4">
              Photo
            </div>
            <h2 className="text-lg font-semibold text-[#0066c5]">何 剣</h2>
            <p className="text-gray-600 text-sm mb-1">代表取締役</p>
            <p className="text-gray-500 text-xs text-center">AI・IoT・DX推進のスペシャリスト。日中両国で豊富な開発・マネジメント経験。</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-4">
              Photo
            </div>
            <h2 className="text-lg font-semibold text-[#0066c5]">李 明</h2>
            <p className="text-gray-600 text-sm mb-1">技術責任者</p>
            <p className="text-gray-500 text-xs text-center">クラウド・AI・IoT領域の技術リーダー。最新技術の導入と品質向上を担当。</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-4">
              Photo
            </div>
            <h2 className="text-lg font-semibold text-[#0066c5]">佐藤 花子</h2>
            <p className="text-gray-600 text-sm mb-1">プロジェクトマネージャー</p>
            <p className="text-gray-500 text-xs text-center">日中プロジェクトの橋渡し役。顧客対応・進行管理・品質保証を担当。</p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          ※他にも多国籍・多様な専門性を持つメンバーが在籍しています。
        </div>
      </div>
    </section>
  );
}
