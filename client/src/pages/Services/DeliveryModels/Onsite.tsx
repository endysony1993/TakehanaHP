import Section from '../../../components/common/Section'
import SectionTitle from '../../../components/ui/SectionTitle'
import Card from '../../../components/ui/Card'
// import Button from '../../../components/ui/Button' // Removed unused import

export default function Onsite() {
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero */}
      <Section>
  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0066c5] to-teal-500 text-white py-10 sm:py-14 px-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">オンサイト開発</h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
              お客様先に常駐し、現場の温度感に寄り添いながら迅速な意思決定と高い連携で開発を推進します。
              セキュリティ要件が厳しい案件や、密な関係者調整が必要なプロジェクトに最適です。
            </p>
          
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        </div>
      </Section>

      {/* Value props */}
      <Section>
        <SectionTitle title="オンサイトの強み" subtitle="現場密着で価値創出を最短距離に" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">意思決定の迅速化</h3>
            <p className="mt-2 text-sm text-gray-600">対面コミュニケーションで疑問点を即時解消。要件変更や優先順位の調整にも素早く対応。</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">高いセキュリティ適合</h3>
            <p className="mt-2 text-sm text-gray-600">ネットワーク分離・専用端末など、お客様のセキュリティポリシーに準拠して運用可能。</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">現場知の取り込み</h3>
            <p className="mt-2 text-sm text-gray-600">業務担当者や関係部署と密に連携し、暗黙知を仕様に落とし込むことで品質を向上。</p>
          </Card>
        </div>
      </Section>

      {/* Engagement models */}
      <Section>
        <SectionTitle title="運営と品質" subtitle="体制・プロセス・ガバナンス" />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">運営プロセス</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>カンバン運用（毎日更新）</li>
              <li>定例（週次レビュー/レトロ）</li>
              <li>関係者向け進捗レポート</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">品質管理</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>定義済みの受け入れ基準（DoD）</li>
              <li>コードレビュー/静的解析</li>
              <li>自動テスト・E2E/負荷試験</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">セキュリティ/認証</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>端末・アカウント管理</li>
              <li>権限設計・多要素認証</li>
              <li>監査ログ・変更管理</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Typical scope */}
      <Section>
        <SectionTitle title="主な支援内容" subtitle="PMO・要件定義から運用まで" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            'PM/PMO・ベンダーコントロール',
            '要件定義/業務整理/ドキュメンテーション',
            '設計・実装・レビュー',
            'テスト計画・自動化・UAT支援',
            'リリース管理・運用引き継ぎ',
            'セキュリティ審査対応',
            'ユーザートレーニング・FAQ整備',
            '現場改善（カイゼン）施策',
          ].map((t) => (
            <Card key={t} className="py-5">
              <p className="text-sm text-gray-800">{t}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-xl border bg-white p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900">まずはディスカバリーから</h3>
          <p className="mt-2 text-gray-600 text-sm">
            1〜2週間の現地ディスカバリーフェーズで、課題抽出・仮説検証・計画立案まで伴走します。
          </p>
          	<div className="flex flex-col pt-5 sm:flex-row gap-3 justify-center">
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal'))}}
                className="inline-block px-8 py-3 rounded-xl bg-[#0066c5] text-white font-semibold shadow-md transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
						>
                お問い合わせ
              </a>
            
						</div>
        </div>
      </Section>
    </div>
  )
}
