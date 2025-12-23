
import CaseGrid from '../../components/ui/CaseGrid'
import { useT } from '../../hooks/useT'
import { useI18n } from '../../context/I18nContext'
import { otherCases } from '../../data/achievements'

export default function Others() {
  const { t } = useT()
  const { locale } = useI18n()
  const vi = locale === 'vi'
  const VI = {
    title: 'Các dự án khác',
    desc: 'Các dự án đa dạng thực hiện xuyên nhiều ngành.'
  }
  return (
    <CaseGrid
      items={otherCases}
      headerTitle={vi ? VI.title : t('pages.achievements.sections.other.title', 'その他の事例')}
      headerDescription={vi ? VI.desc : t('pages.achievements.sections.other.desc', '業界横断で取り組んだ多様なプロジェクトの事例をご紹介します。')}
    />
  )
}
