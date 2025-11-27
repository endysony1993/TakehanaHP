import type { CaseItem } from '../components/ui/CaseGrid'

export const aiCases: CaseItem[] = [
  {
    title: 'AI画像解析による外観検査自動化',
    description: 'ディープラーニングを用いた欠陥検出モデルで検査精度を向上、判定時間を短縮。',
    tags: ['Computer Vision', 'Quality Inspection', 'PyTorch'],
    link: '/achievements/ai-inspection',
  },
  {
    title: '自動車サービスGPT',
    description: '車両データを統合し、AIが自然言語でドライバーをサポート。\n車載システムやアプリと連携し、サービスを自動化。',
    tags: ['Large Language Model', 'NLP', 'AI Assistant'],
    link: '/achievements/car-gpt',
  },
  {
    title: 'AI Visa｜日本ビザを多言語で案内',
    description: '専用ベクトル検索×生成AIでFAQ精度と一次回答率を向上。最新基準に沿った案内を自動化。',
    tags: ['RAG', 'Vector Search', 'Multilingual'],
    link: '/achievements/ai-visa',
  },
  // {
  //   title: '設備異常検知（予知保全）',
  //   description: 'センサーデータから異常スコアを算出し、ダウンタイム削減とメンテ計画を最適化。',
  //   tags: ['Anomaly Detection', 'IoT', 'Streaming'],
  // },
]

export const iotCases: CaseItem[] = [
  {
   title: 'モバイルバッテリーシェア',
description: 'モバイルバッテリーの利用状況や貸出・返却データをIoTで収集し、稼働率や設置場所ごとの利用傾向を可視化。',
tags: ['IoT', 'Sharing', 'Visualization'],
  link: '/achievements/mobile-battery-share',

  },
  {
    title: 'スマートパーキング',
    description: 'AI車番認識とセンサーで入出庫・空車を自動化。オンライン決済・料金計時に対応し、稼働や売上を可視化。',
    tags: ['Plate Recognition', 'Utilization', 'Payment', 'IoT Integration'],
    link: '/achievements/smart-parking-system',

  },
  {
    title: '駐車場管理システム',
    description: '空き状況の検知、予約、料金最適化、オンライン決済を統合管理し、稼働率と顧客体験を向上。',
    tags: ['Parking', 'Reservation', 'Pricing Optimization', 'Payment'],
    link: '/achievements/parking-management-system',
  },
]

export const smartManufacturingCases: CaseItem[] = [
    {
    title: 'APS（生産スケジューリング）',
    description: '需要予測と制約条件を考慮したスケジューリングで、納期遵守率と在庫回転率を両立。',
    tags: ['APS', 'Scheduling', 'Optimization'],
    link: '/achievements/aps',
  },
  {
    title: 'MES（製造実行システム）',
    description: '設備稼働データを用いたボトルネック分析で、段取り替え時間を短縮しOEEを改善。',
    tags: ['OEE', 'Production', 'Analytics'],
    link: '/achievements/mes',
  },

  {
    title: 'WMS（倉庫管理システム）',
    description: '入出庫・在庫・ロケーションを一元管理し、トレーサビリティと棚卸精度を向上。',
    tags: ['WMS', 'Inventory', 'Logistics'],
    link: '/achievements/wms',
  },
   {
   title: '製品選定システム',
  description: '要件に合った製品を自動マッチングし、データ分析・比較検討を効率化。選定精度向上と提案業務の標準化を支援します。',
  tags: ['Recommendation', 'Product Selection', 'Configurator'],
  link: '/achievements/product-selection',
  },
   {
    title: '見積管理システム',
    description: '原価と粗利を加味した見積作成・版管理・承認ワークフローを実装。履歴参照とテンプレート化で提案スピードを向上。',
    tags: ['Quotation', 'Sales', 'Pricing Management'],
    link: '/achievements/quotation',
  },
]

export const otherCases: CaseItem[] = [
  {
    title: 'SAP導入・運用最適化',
    description: 'FI/CO・SD・MMなどの要件整理から設計・導入・運用までを支援。周辺システム連携とデータ連携基盤も構築。',
    tags: ['SAP', 'ERP', 'System Integration'],
  },
  {
    title: 'Salesforce導入・活用支援',
    description: 'Sales Cloud／Service Cloudの設計・実装・運用定着化を支援。MA連携やダッシュボード可視化で営業生産性を向上。',
    tags: ['Salesforce', 'CRM', 'Automation'],
  },
 
]
