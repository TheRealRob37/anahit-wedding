import FadeInSection from './FadeInSection'

// April 2026: April 1 = Wednesday (index 2, Mon=0)
const WEDDING_DAY = 25
const MONTH_NAME = 'Ապրիլ'
const DAYS_IN_MONTH = 30
const FIRST_DAY_INDEX = 2 // Wednesday

const DAY_LABELS = ['Երկ', 'Երք', 'Չոր', 'Հնգ', 'Ուրբ', 'Շաբ', 'Կիր']

function buildCalendar(): (number | null)[] {
  const cells: (number | null)[] = []
  for (let i = 0; i < FIRST_DAY_INDEX; i++) cells.push(null)
  for (let d = 1; d <= DAYS_IN_MONTH; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export default function WeddingCalendar() {
  const cells = buildCalendar()
  const rows: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))

  return (
    <section className="bg-beige-50 px-6 py-20 border-t border-olive-700/10">
      <div className="max-w-sm mx-auto">

        <FadeInSection>
          <h2 className="font-display text-3xl font-medium tracking-widest uppercase text-olive-800 text-center mb-8">
            {MONTH_NAME} 2026
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {DAY_LABELS.map((d, i) => (
                  <th
                    key={d}
                    className={`pb-3 font-sans text-xs font-normal text-center
                      ${i >= 5 ? 'text-[#b07a60]' : 'text-olive-600/50'}`}
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((day, ci) => {
                    const isWeekend = ci >= 5
                    const isWedding = day === WEDDING_DAY
                    return (
                      <td key={ci} className="text-center py-1.5">
                        {day !== null ? (
                          <span
                            className={`
                              inline-flex items-center justify-center
                              w-8 h-8 font-serif text-sm leading-none
                              ${isWedding
                                ? 'rounded-full border-2 border-olive-800 text-olive-900 font-medium bg-beige-200'
                                : isWeekend
                                  ? 'text-[#b07a60]'
                                  : 'text-olive-700/80'
                              }
                            `}
                          >
                            {day}
                          </span>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeInSection>

        <FadeInSection delay={0.25}>
          <div className="mt-8 text-center">
            <p className="font-serif italic text-olive-600/70 text-base">
              25 Ապրիլ, ժամը 17:00
            </p>
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}
