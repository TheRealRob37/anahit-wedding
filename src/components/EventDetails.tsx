import FadeInSection from './FadeInSection'

export default function EventDetails() {
  return (
    <section className="bg-burgundy-900 px-8 py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88df5691166d?w=1400&q=80')" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        <FadeInSection>
          <h2 className="font-sc text-3xl sm:text-4xl tracking-widest text-cream-100 text-center mb-16">
            Արարողություն
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">

          <FadeInSection delay={0.1}>
            <div className="border border-gold-500/20 p-8 bg-burgundy-950/40">
              <p className="font-sc text-xs tracking-ultra text-gold-400 mb-5">Կապ</p>
              <p className="font-serif text-cream-100 text-xl font-light mb-2">Հարսանեկան Սրահ</p>
              <p className="font-serif italic text-cream-200/60 mb-6">Երևան, Հայաստան</p>
              <a
                href="https://yandex.com/maps/org/1709327076/?ll=45.587915%2C40.145389&z=11.21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sc text-xs tracking-widest text-burgundy-950 bg-gold-400 px-7 py-3 hover:bg-gold-300 transition-colors duration-400"
              >
                Տեսնել քարտեզում
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="border border-gold-500/20 p-8 bg-burgundy-950/40">
              <p className="font-sc text-xs tracking-ultra text-gold-400 mb-5">Ընդունելություն</p>
              <p className="font-serif text-cream-100 text-xl font-light mb-2">Ռեստորան</p>
              <p className="font-serif italic text-cream-200/60 mb-6">Երևան, Հայաստան</p>
              <a
                href="https://yandex.com/maps/org/1709327076/?ll=45.587915%2C40.145389&z=11.21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sc text-xs tracking-widest text-burgundy-950 bg-gold-400 px-7 py-3 hover:bg-gold-300 transition-colors duration-400"
              >
                Տեսնել քարտեզում
              </a>
            </div>
          </FadeInSection>

        </div>

        <FadeInSection delay={0.3}>
          <div className="grid grid-cols-3 gap-6 border-t border-gold-500/15 pt-12 text-center">
            {[
              { label: 'Ամսաթիվ', value: '25 Ապրիլ', sub: '2026' },
              { label: 'Ժամը',    value: '17:00',    sub: 'Երեկոյան' },
              { label: 'Վայրը',   value: 'Երևան',    sub: 'Հայաստան' },
            ].map(item => (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="font-sc text-xs tracking-widest text-gold-500/70">{item.label}</span>
                <p className="font-serif text-2xl sm:text-3xl font-light text-cream-100">{item.value}</p>
                <p className="font-serif italic text-cream-200/50 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}
