import FadeInSection from './FadeInSection'

const events = [
  { time: '16:30 — 17:00', title: 'Ժամանում', desc: 'Հյուրերի ջերմ ընդունելություն' },
  { time: '17:00 — 18:00', title: 'Արարողություն', desc: 'Մատանիների փոխանակություն և ուխտ' },
  { time: '18:00 — 19:00', title: 'Լուսանկարչություն', desc: 'Ֆոտո նստաշրջան՝ ընտանիքի հետ' },
  { time: '19:00 — 00:00', title: 'Ընդունելություն', desc: 'Ընթրիք, երաժշտություն և պարեր' },
]

export default function Timeline() {
  return (
    <section className="bg-beige-100 px-6 py-20">
      <div className="max-w-lg mx-auto">

        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 text-center mb-12">
            Օրվա ծրագիր
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-6">
          {events.map((ev, i) => (
            <FadeInSection key={ev.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-36 sm:w-44">
                  <p className="font-display text-sm font-medium tracking-wider text-olive-700 uppercase">{ev.time}</p>
                </div>
                <div className="flex-1 border-l border-olive-700/20 pl-5 pb-2">
                  <p className="font-display text-base font-medium tracking-widest uppercase text-olive-900 mb-1">{ev.title}</p>
                  <p className="font-serif text-base italic text-olive-600/70">{ev.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  )
}
