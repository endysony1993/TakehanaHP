
import CaseGrid from '../../components/ui/CaseGrid'
import { smartManufacturingCases } from '../../data/achievements'

export default function SmartManufacturing() {
  return (
    <CaseGrid
      items={smartManufacturingCases}
      headerTitle="製造業向けソリューション"
      headerDescription="製造業の生産性向上・品質改善・業務最適化を実現するソリューションをご紹介します。"
    />
  )
}
