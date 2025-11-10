
import CaseGrid from '../../components/ui/CaseGrid'
import { otherCases } from '../../data/achievements'

export default function Others() {
  return (
    <CaseGrid
      items={otherCases}
      headerTitle="その他の事例"
      headerDescription="業界横断で取り組んだ多様なプロジェクトの事例をご紹介します。"
    />
  )
}
