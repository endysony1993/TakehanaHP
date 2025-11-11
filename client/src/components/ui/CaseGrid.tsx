export type CaseItem = {
  title: string
  description: string
  tags: string[]
  link?: string
}

import { Link } from 'react-router-dom';

export default function CaseGrid({
  items,
  headerTitle,
  headerDescription,
}: {
  items: CaseItem[]
  headerTitle?: string
  headerDescription?: string
}) {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      {(headerTitle || headerDescription) && (
        <header className="mb-6 sm:mb-10 text-center">
          {headerTitle ? (
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0066c5]">{headerTitle}</h1>
          ) : null}
          {headerDescription ? (
            <p className="mt-2 text-gray-600 text-sm sm:text-base">{headerDescription}</p>
          ) : null}
        </header>
      )}
      <section aria-label="ケーススタディ一覧">
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#0066c5] rounded-t-xl" />
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#0066c5] transition-colors">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t, i) => (
                    <li
                      key={i}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-[#0066c5]/10 text-[#0066c5] border border-[#0066c5]/30"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {item.link ? (
                  <div className="mt-4 flex justify-end">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0066c5] text-white text-sm font-semibold shadow transition-transform duration-200 transform hover:scale-110"
                    >
                      <span>詳細を見る</span>
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        <circle cx="12" cy="12" r="11" fill="#fff" />
                        <path d="M10 8l4 4-4 4" stroke="#0066c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
