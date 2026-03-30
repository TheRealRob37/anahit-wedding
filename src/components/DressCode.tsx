import FadeInSection from './FadeInSection'

const swatches = [
  { color: '#2b281b', label: 'Օлiv' },
  { color: '#d4c8b2', label: 'Beige' },
  { color: '#8b7355', label: 'Mocha' },
  { color: '#1a1810', label: 'Black' },
]

export default function DressCode() {
  return (
    <section className="bg-beige-100 px-6 py-20 border-t border-olive-700/10">
      <div className="max-w-lg mx-auto text-center">

        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 mb-6">
            Դրես-կոդ
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <p className="font-serif italic text-xl text-olive-700 mb-3">Ֆորմալ</p>
          <p className="font-serif text-base leading-relaxed text-olive-600/75 mb-10">
            Խնդրում ենք ընտրել հագուստ, որը կհամապատասխանի
            տոնի մթնոլորտին։ Կնախընտրենք հետևյալ գույների պալիտրան.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-6">
            {swatches.map(s => (
              <div key={s.color} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full border border-olive-700/10 shadow-sm"
                  style={{ backgroundColor: s.color }}
                />
              </div>
            ))}
          </div>
          <p className="font-sans text-xs tracking-widest uppercase text-olive-600/50">
            Beige · Olive · Mocha · Black
          </p>
        </FadeInSection>

      </div>
    </section>
  )
}
