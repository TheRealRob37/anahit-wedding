import { useState, useEffect } from 'react'
import FadeInSection from './FadeInSection'

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, new Date('2026-04-25T17:00:00').getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const labels: Record<keyof TimeLeft, string> = { days: 'Օր', hours: 'Ժամ', minutes: 'Րոպե', seconds: 'Վայրկ' }

export default function Countdown() {
  const [t, setT] = useState<TimeLeft>(getTimeLeft())
  useEffect(() => { const id = setInterval(() => setT(getTimeLeft()), 1000); return () => clearInterval(id) }, [])

  return (
    <section className="bg-beige-100 pb-20 px-6">
      <FadeInSection>
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {(Object.keys(t) as (keyof TimeLeft)[]).map(unit => (
              <div key={unit} className="flex flex-col items-center gap-2">
                <div className="w-full border border-olive-700/30 py-3 sm:py-5 text-center bg-beige-50/60">
                  <span className="font-display text-3xl sm:text-4xl font-light text-olive-900 tabular-nums">
                    {String(t[unit]).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive-600/60">{labels[unit]}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
