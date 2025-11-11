import Section from '../../../components/common/Section'
import SectionTitle from '../../../components/ui/SectionTitle'
import Card from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'

export default function Offshore() {
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero */}
      <Section>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#31B4A8] to-teal-500 text-white py-10 sm:py-14 px-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">オフショア開発</h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
              コスト最適化とスピード両立のために、海外拠点を活用したチームでの開発体制をご提供します。
              日本側PM/BrSEによる要件整理・品質管理と、海外の優秀なエンジニアの実装力を組み合わせます。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button className="bg-white text-[#31B4A8] hover:bg-white/90" onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>お問い合わせ</Button>
              <Button variant="secondary" className="bg-teal-50 text-teal-900 hover:bg-teal-100">事例を見る</Button>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        </div>
      </Section>

      {/* Value props */}
      <Section>
        <SectionTitle title="選ばれる理由" subtitle="品質・スピード・コストのバランスを最適化" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">コスト最適化</h3>
            <p className="mt-2 text-sm text-gray-600">海外人件費を活用しつつ、日本品質の基準でレビューを実施。TCOを抑えながら継続開発を実現。</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">スピードと柔軟性</h3>
            <p className="mt-2 text-sm text-gray-600">多拠点体制でスループットを確保。アジャイル運用により仕様変更にも迅速に対応。</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">日本語コミュニケーション</h3>
            <p className="mt-2 text-sm text-gray-600">BrSE/PMが要件定義から受け入れまで伴走。ドキュメント・会議体も日本語で円滑に推進。</p>
          </Card>
        </div>
      </Section>

      {/* Engagement models */}
      <Section>
        <SectionTitle title="体制と進め方" subtitle="成果に直結する運営モデル" />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <Card>
            <h3 className="font-semibold text-gray-900">コミュニケーション設計</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>週次スクラム（レビュー/レトロ）</li>
              <li>日次スタンドアップ（15分）</li>
              <li>タスク可視化（Jira/Backlog）</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">品質保証</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>レビュー二重化（開発/QA）</li>
              <li>自動テストとCI/CD</li>
              <li>リリースゲートとDefinition of Done</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900">セキュリティ/ガバナンス</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>権限分離と監査ログ</li>
              <li>情報持ち出し対策（DLP）</li>
              <li>契約/秘密保持・個人情報保護</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Typical scope */}
      <Section>
        <SectionTitle title="対応領域" subtitle="Web/モバイル/クラウド/データ/AIまで" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            'フロントエンド（React/Next.js）',
            'バックエンド（Node.js/Java）',
            'モバイル（iOS/Android）',
            'クラウド（AWS/Azure/GCP）',
            'データエンジニアリング',
            'MLOps/LLMアプリケーション',
            'QA・自動テスト',
            '運用/監視/SRE',
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
          <h3 className="text-xl font-bold text-gray-900">まずは小さく始めて、確かめる</h3>
          <p className="mt-2 text-gray-600 text-sm">
            2週間のトライアルスプリントからご提供可能です。スコープ定義〜実装〜レビューまで一気通貫で実施します。
          </p>
          <div className="mt-5">
            <Button className="bg-[#31B4A8] hover:bg-teal-600">無料相談する</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
