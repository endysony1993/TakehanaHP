
import CaseGrid from '../../components/ui/CaseGrid'
import { useT } from '../../hooks/useT'
import { iotCases } from '../../data/achievements'

export default function IoT() {
  const { t } = useT()
  return (
    <>
      <CaseGrid
        items={iotCases}
        headerTitle={t('pages.achievements.sections.iot.title', 'Các dự án IoT')}
        headerDescription={t('pages.achievements.sections.iot.desc', 'Giới thiệu các dự án kết nối thiết bị IoT với đám mây để giám sát và phân tích dữ liệu.')}
      />
   
    </>
  )
}
