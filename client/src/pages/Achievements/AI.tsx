
import CaseGrid from '../../components/ui/CaseGrid'
import { useT } from '../../hooks/useT'
import { aiCases } from '../../data/achievements'

export default function AI() {
  const { t } = useT()
  return (
    <CaseGrid
      items={aiCases}
      headerTitle={t('pages.achievements.sections.ai.title', 'Các dự án AI')}
      headerDescription={t('pages.achievements.sections.ai.desc', 'Một số ví dụ triển khai tận dụng AI.')}
    />
  )
}
