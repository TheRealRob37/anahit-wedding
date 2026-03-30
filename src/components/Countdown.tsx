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
    <section className="bg-burgundy-950 px-8 py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88df5691166d?w=1400&q=80')" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">

        <FadeInSection>
          <h2 className="font-sc text-3xl sm:text-4xl tracking-widest text-cream-100 mb-4">
            Հետհաշվարկ
          </h2>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="block h-px w-12 bg-gold-500/40" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/50 block" />
            <span className="block h-px w-12 bg-gold-500/40" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          {(Object.keys(t) as (keyof TimeLeft)[]).map((unit, i) => (
            <FadeInSection key={unit} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-3">
                <div className="border border-gold-500/25 w-full py-5 sm:py-7 bg-burgundy-900/50">
                  <span className="font-serif text-3xl sm:text-5xl font-light text-cream-100 tabular-nums">
                    {String(t[unit]).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-sc text-xs tracking-widest text-gold-500/70">{labels[unit]}</span>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <p className="font-script text-3xl text-gold-400/60 mt-14">25 Ապրիլ 2026</p>
        </FadeInSection>

      </div>
    </section>
  )
}
