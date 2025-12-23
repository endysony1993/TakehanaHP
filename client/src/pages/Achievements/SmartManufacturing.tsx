
import CaseGrid from '../../components/ui/CaseGrid'
import { useT } from '../../hooks/useT'
import { smartManufacturingCases } from '../../data/achievements'

export default function SmartManufacturing() {
  const { t } = useT()
  return (
    <CaseGrid
      items={smartManufacturingCases}
      headerTitle={t('pages.achievements.sections.sm.title', '製造業向けソリューション')}
      headerDescription={t('pages.achievements.sections.sm.desc', '製造業の生産性向上・品質改善・業務最適化を実現するソリューションをご紹介します。')}
    />
  )
}
