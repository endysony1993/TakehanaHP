type Props = { title: string; subtitle?: string }
export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  )
}
