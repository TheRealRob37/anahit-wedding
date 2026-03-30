import FadeInSection from './FadeInSection'

export default function EventDetails() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 px-6 py-32">
      <div className="max-w-2xl mx-auto w-full">
        <FadeInSection>
          <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 text-center mb-16">
            Մանրամասներ
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-3 gap-12 sm:gap-6 text-center">
          <FadeInSection delay={0.1}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-10 bg-gold-300" />
              <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Ամսաթիվ</span>
              <p className="font-serif text-2xl font-light text-charcoal-800">25 Ապրիլ</p>
              <p className="font-serif text-lg italic text-charcoal-600">2026</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-10 bg-gold-300" />
              <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Ժամը</span>
              <p className="font-serif text-2xl font-light text-charcoal-800">17:00</p>
              <p className="font-serif text-lg italic text-charcoal-600">Ռեստորան</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-10 bg-gold-300" />
              <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Վայրը</span>
              <p className="font-serif text-2xl font-light text-charcoal-800">Երևան</p>
              <p className="font-serif text-lg italic text-charcoal-600">Հայաստան</p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.45}>
          <div className="mt-20 text-center">
            <a
              href="https://yandex.com/maps/org/1709327076/?ll=45.587915%2C40.145389&z=11.21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-charcoal-700 border border-gold-300 px-8 py-4 hover:bg-gold-300 hover:text-cream-50 transition-all duration-500 ease-out"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Բացել Yandex Maps-ում
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
