import { useState, useEffect } from 'react'
import FadeInSection from './FadeInSection'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const target = new Date('2026-04-25T17:00:00')
  const now = new Date()
  const diff = Math.max(0, target.getTime() - now.getTime())

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

const labels: Record<keyof TimeLeft, string> = {
  days: 'Օր',
  hours: 'Ժամ',
  minutes: 'Րոպե',
  seconds: 'Վայրկյան',
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 px-6 py-32">
      <div className="max-w-2xl mx-auto w-full text-center">
        <FadeInSection>
          <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-16">
            Մինչ հարսանիքը
          </p>
        </FadeInSection>

        <div className="grid grid-cols-4 gap-4 sm:gap-8">
          {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((unit, i) => (
            <FadeInSection key={unit} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 border border-gold-300 opacity-30 rounded-sm" />
                  <div className="px-3 py-4 sm:px-5 sm:py-6">
                    <span className="font-serif text-3xl sm:text-5xl font-light text-charcoal-800 tabular-nums block">
                      {pad(timeLeft[unit])}
                    </span>
                  </div>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-gold-500">
                  {labels[unit]}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <p className="font-serif italic text-charcoal-600 text-lg mt-16">
            25 Ապրիլ 2026
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
