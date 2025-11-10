export default function LabBased() {
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#034a8c] mb-8 text-center">Lab型開発</h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          Lab型開発は、クライアント専属の開発チームを編成し、柔軟かつ継続的なシステム開発・運用を実現するモデルです。要件の変化や新規機能追加にも迅速に対応でき、長期的なパートナーシップ構築に最適です。
        </p>
        <div className="bg-gray-50 rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#034a8c] mb-2">特徴</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>専属チームによる継続的な開発・運用サポート</li>
            <li>要件変更や追加開発への柔軟な対応</li>
            <li>クライアントとの密なコミュニケーションと透明性</li>
            <li>コストの最適化とリソースの効率的活用</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#034a8c] mb-2">Lab型開発の流れ</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>要件ヒアリング・チーム体制のご提案</li>
            <li>専属チームの立ち上げ・キックオフ</li>
            <li>アジャイル開発による継続的な開発・運用</li>
            <li>定期的な進捗報告・レビュー・改善提案</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
