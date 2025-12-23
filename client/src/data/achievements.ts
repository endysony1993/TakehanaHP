import type { CaseItem } from '../components/ui/CaseGrid'
// import { title } from '../utils/seo'

export const aiCases: CaseItem[] = [
  {
    title: 'Tự động hóa kiểm tra ngoại quan bằng AI',
    // i18n keys (components can use these):
    // pages.achievements.ai.inspection.title, pages.achievements.ai.inspection.desc
    titleKey: 'pages.achievements.ai.inspection.title',
    descriptionKey: 'pages.achievements.ai.inspection.desc',
    description: 'Nâng cao độ chính xác và rút ngắn thời gian đánh giá bằng mô hình phát hiện lỗi sử dụng học sâu.',
    tags: ['Computer Vision', 'Quality Inspection', 'PyTorch'],
    link: '/achievements/ai-inspection',
  },
  {
    title: 'Nhận diện kệ hàng bằng AI',
    titleKey: 'pages.achievements.ai.shelf.title',
    descriptionKey: 'pages.achievements.ai.shelf.desc',
    description: 'AI phân tích ảnh cửa hàng, định lượng sơ đồ kệ, kho và trưng bày. Tự động hóa, chuẩn hóa và tăng tốc kiểm tra.',
    tags: ['Retail', 'Computer Vision', 'Shelf Analysis'],
    link: '/achievements/product-shelf-recognition',
  },
  {
    title: 'Car GPT cho dịch vụ ô tô',
    titleKey: 'pages.achievements.ai.carGpt.title',
    descriptionKey: 'pages.achievements.ai.carGpt.desc',
    description: 'Hợp nhất dữ liệu xe, AI hỗ trợ người lái bằng ngôn ngữ tự nhiên.\nTích hợp với hệ thống trên xe và ứng dụng để tự động hóa dịch vụ.',
    tags: ['Large Language Model', 'NLP', 'AI Assistant'],
    link: '/achievements/car-gpt',
  },
  {
    title: 'AI Visa | Hướng dẫn visa Nhật đa ngôn ngữ',
    titleKey: 'pages.achievements.ai.visa.title',
    descriptionKey: 'pages.achievements.ai.visa.desc',
    description: 'Kết hợp tìm kiếm thông minh với AI để tăng độ chính xác trả lời câu hỏi, tự động hóa hướng dẫn theo tiêu chuẩn mới nhất.',
    tags: ['RAG', 'Vector Search', 'Multilingual'],
    link: '/achievements/ai-visa',
  },

]

export const iotCases: CaseItem[] = [
  {
    title: 'Chia sẻ pin di động',
    titleKey: 'pages.achievements.iot.battery.title',
    descriptionKey: 'pages.achievements.iot.battery.desc',
    description: 'Thu thập dữ liệu sử dụng, cho thuê/trả pin qua IoT; trực quan hóa tỷ lệ hoạt động và xu hướng sử dụng theo điểm đặt.',
    tags: ['IoT', 'Sharing', 'Visualization'],
    link: '/achievements/mobile-battery-share',

  },
  {
    title: 'Bãi đỗ xe thông minh',
    titleKey: 'pages.achievements.iot.smartParking.title',
    descriptionKey: 'pages.achievements.iot.smartParking.desc',
    description: 'Tự động hóa vào/ra, nhận diện chỗ trống bằng AI/cảm biến, thanh toán online, trực quan hóa hiệu quả.',
    tags: ['ANPR', 'Operations', 'Payments', 'IoT Integration'],
    link: '/achievements/smart-parking-system',

  },
  {
    title: 'Hệ thống quản lý bãi đỗ',
    titleKey: 'pages.achievements.iot.parkingMgmt.title',
    descriptionKey: 'pages.achievements.iot.parkingMgmt.desc',
    description: 'Quản lý tích hợp phát hiện chỗ trống, đặt chỗ, tối ưu giá và thanh toán online, nâng cao tỷ lệ khai thác và trải nghiệm khách hàng.',
    tags: ['Parking', 'Reservations', 'Dynamic Pricing', 'Payments'],
    link: '/achievements/parking-management-system',
  },
  {
    title: 'Giám sát ngập lụt sông',
    titleKey: 'pages.achievements.iot.flood.title',
    descriptionKey: 'pages.achievements.iot.flood.desc',
    description: 'Giám sát mực nước và lượng mưa theo thời gian thực bằng cảm biến; phát hiện bất thường và cảnh báo sớm để giảm rủi ro lũ lụt.',
    tags: ['Flood Monitoring', 'IoT Sensors', 'Early Warning'],
    link: '/achievements/flood-monitoring',
  },
  {
    title: 'Phân tích biển số xe',
    titleKey: 'pages.achievements.iot.plate.title',
    descriptionKey: 'pages.achievements.iot.plate.desc',
    description: 'Nhận diện biển số chính xác bằng AI, hỗ trợ tự động hóa và nâng cao hiệu quả trong bãi đỗ, logistics và an ninh.',
    tags: ['ANPR', 'Computer Vision', 'Automation'],
    link: '/achievements/car-license-plate-analysis',
  },
     
]

export const smartManufacturingCases: CaseItem[] = [
    {
    title: 'APS（生産スケジューリング）',
    titleKey: 'pages.achievements.smart.aps.title',
    descriptionKey: 'pages.achievements.smart.aps.desc',
    description: '需要予測と制約条件を考慮したスケジューリングで、納期遵守率と在庫回転率を両立。',
    tags: ['APS', 'Scheduling', 'Optimization'],
    link: '/achievements/aps',
  },
  {
    title: 'MES（製造実行システム）',
    titleKey: 'pages.achievements.smart.mes.title',
    descriptionKey: 'pages.achievements.smart.mes.desc',
    description: '設備稼働データを用いたボトルネック分析で、段取り替え時間を短縮しOEEを改善。',
    tags: ['OEE', 'Production', 'Analytics'],
    link: '/achievements/mes',
  },

  {
    title: 'WMS（倉庫管理システム）',
    titleKey: 'pages.achievements.smart.wms.title',
    descriptionKey: 'pages.achievements.smart.wms.desc',
    description: '入出庫・在庫・ロケーションを一元管理し、トレーサビリティと棚卸精度を向上。',
    tags: ['WMS', 'Inventory', 'Logistics'],
    link: '/achievements/wms',
  },
   {
   title: '製品選定システム',
   titleKey: 'pages.achievements.smart.productSelection.title',
   descriptionKey: 'pages.achievements.smart.productSelection.desc',
  description: '要件に合った製品を自動マッチングし、データ分析・比較検討を効率化。選定精度向上と提案業務の標準化を支援します。',
  tags: ['Recommendation', 'Product Selection', 'Configurator'],
  link: '/achievements/product-selection',
  },
   {
    title: '見積管理システム',
    titleKey: 'pages.achievements.smart.quotation.title',
    descriptionKey: 'pages.achievements.smart.quotation.desc',
    description: '原価と粗利を加味した見積作成・版管理・承認ワークフローを実装。履歴参照とテンプレート化で提案スピードを向上。',
    tags: ['Quotation', 'Sales', 'Pricing Management'],
    link: '/achievements/quotation',
  },
]

export const otherCases: CaseItem[] = [
  {
    title: 'SAP導入・運用最適化',
    titleKey: 'pages.achievements.other.sap.title',
    descriptionKey: 'pages.achievements.other.sap.desc',
    description: 'FI/CO・SD・MMなどの要件整理から設計・導入・運用までを支援。周辺システム連携とデータ連携基盤も構築。',
    tags: ['SAP', 'ERP', 'System Integration'],
  },
  {
    title: 'Salesforce導入・活用支援',
    titleKey: 'pages.achievements.other.salesforce.title',
    descriptionKey: 'pages.achievements.other.salesforce.desc',
    description: 'Sales Cloud／Service Cloudの設計・実装・運用定着化を支援。MA連携やダッシュボード可視化で営業生産性を向上。',
    tags: ['Salesforce', 'CRM', 'Automation'],
  },
 
]
