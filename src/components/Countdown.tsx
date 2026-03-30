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
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

const labels: Record<keyof TimeLeft, string> = {
  days: 'Օր', hours: 'Ժամ', minutes: 'Րոպե', seconds: 'Վայրկ',
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-950 px-8 py-32">
      <div className="max-w-3xl mx-auto w-full text-center">

        <FadeInSection>
          <div className="flex items-center justify-center gap-4 mb-20">
            <span className="block h-px w-16 bg-brass-600/40" />
            <span className="font-sc text-xs tracking-ultra text-brass-400">Մինչ հարսանիքը</span>
            <span className="block h-px w-16 bg-brass-600/40" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-4 gap-3 sm:gap-8">
          {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((unit, i) => (
            <FadeInSection key={unit} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4">
                <div className="border border-brass-600/25 px-2 py-4 sm:px-6 sm:py-7 w-full">
                  <span className="font-serif text-3xl sm:text-5xl font-light text-ivory-100 tabular-nums block">
                    {pad(timeLeft[unit])}
                  </span>
                </div>
                <span className="font-sc text-xs tracking-widest text-brass-500">
                  {labels[unit]}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <p className="font-serif italic text-ivory-300/50 text-lg mt-16">
            25 Ապրիլ 2026
          </p>
        </FadeInSection>

      </div>
    </section>
  )
}
