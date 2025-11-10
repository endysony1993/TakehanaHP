import type { CaseItem } from '../components/ui/CaseGrid'

export const aiCases: CaseItem[] = [
  {
    title: 'AI画像解析による外観検査自動化',
    description: 'ディープラーニングを用いた欠陥検出モデルで検査精度を向上、判定時間を短縮。',
    tags: ['Computer Vision', '品質検査', 'PyTorch'],
    link: '/achievements/ai-inspection',
  },
  {
    title: '自動車サービスGPT',
    description: '車両データを統合し、AIが自然言語でドライバーをサポート。\n車載システムやアプリと連携し、サービスを自動化。',
    tags: ['大規模言語モデル', '自然言語処理', 'AIアシスタント'],
    link: '/achievements/car-gpt',
  },
  {
    title: 'AI Visa｜日本ビザを多言語で案内',
    description: '専用ベクトル検索×生成AIでFAQ精度と一次回答率を向上。最新基準に沿った案内を自動化。',
    tags: ['RAG', 'ベクトル検索', '多言語'],
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
tags: ['IoT', 'シェアリング', '可視化'],
  link: '/achievements/mobile-battery-share',

  },
  {
    title: 'スマートパーキング',
    description: 'AI車番認識とセンサーで入出庫・空車を自動化。オンライン決済・料金計時に対応し、稼働や売上を可視化。',
    tags: ['ALPR', 'Occupancy', 'Payment', 'IoT'],
    link: '/achievements/smart-parking-system',

  },
  {
    title: '予防保全のための振動解析',
    description: '加速度センサーの周波数解析でベアリングの摩耗傾向を早期検知。',
    tags: ['Vibration', 'FFT', 'Anomaly'],
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
    description: '入出庫・在庫・ロケーションを一元管理し、トレーサビリティと棚卸精度を向上。波動や需要に応じた補充・ピッキングを最適化。',
    tags: ['WMS', 'Inventory', 'Logistics'],
    link: '/achievements/wms',
  },
   {
   title: '製品選定システム',
  description: '要件に合った製品を自動マッチングし、データ分析・比較検討を効率化。選定精度向上と提案業務の標準化を支援します。',
  tags: ['Recommendation', 'Selection', 'Configurator'],
  link: '/achievements/product-selection',
  },
   {
    title: '見積管理システム',
    description: '原価と粗利を加味した見積作成・版管理・承認ワークフローを実装。履歴参照とテンプレート化で提案スピードを向上。',
    tags: ['Quotation', 'Sales', 'Pricing'],
    link: '/achievements/quotation',
  },
]

export const otherCases: CaseItem[] = [
  {
    title: 'カスタマーサクセスの離反予兆検知',
    description: '利用状況とサポート履歴から解約リスクをスコアリングし、適切な打ち手を提示。',
    tags: ['Churn', 'Scoring', 'SaaS'],
  },
  {
    title: 'ECレコメンド最適化',
    description: '協調フィルタリングと内容ベースのハイブリッド手法でCVRを改善。',
    tags: ['Recommender', 'Personalization', 'E-commerce'],
  },
  {
    title: 'ドキュメント自動分類・要約',
    description: '大規模言語モデルを活用し、社内文書の分類・要約・検索性を強化。',
    tags: ['NLP', 'Summarization', 'LLM'],
  },
]
