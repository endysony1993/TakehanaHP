export default function ProjectBased() {
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#034a8c] mb-8 text-center">Project型開発</h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          Project型開発は、明確な要件・納期・予算に基づき、システムやアプリケーションを一括で受託開発するモデルです。要件定義から設計・開発・テスト・納品まで、ワンストップで高品質な成果物を提供します。
        </p>
        <div className="bg-gray-50 rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#034a8c] mb-2">特徴</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>要件・スケジュール・コストが明確なプロジェクトに最適</li>
            <li>経験豊富なPM・エンジニアによる一括管理</li>
            <li>品質・納期・コストのコミットメント</li>
            <li>納品後の保守・運用サポートも対応可能</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#034a8c] mb-2">Project型開発の流れ</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>要件ヒアリング・見積もり・ご提案</li>
            <li>要件定義・設計</li>
            <li>システム開発・テスト</li>
            <li>納品・リリース・運用サポート</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
