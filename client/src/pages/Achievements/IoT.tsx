
import CaseGrid from '../../components/ui/CaseGrid'
import { iotCases } from '../../data/achievements'

export default function IoT() {
  return (
    <>
      <CaseGrid
        items={iotCases}
        headerTitle="IoT事例"
        headerDescription="IoTデバイスとクラウドを連携した監視・分析の事例をご紹介します。"
      />
   
    </>
  )
}
