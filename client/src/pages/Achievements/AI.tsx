
import CaseGrid from '../../components/ui/CaseGrid'
import { aiCases } from '../../data/achievements'

export default function AI() {
  return (
    <CaseGrid
      items={aiCases}
      headerTitle="AI事例"
      headerDescription="AIを活用した実装事例の一部をご紹介します。"
    />
  )
}
