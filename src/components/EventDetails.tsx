import FadeInSection from './FadeInSection'

export default function EventDetails() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-900 px-8 py-32">
      <div className="max-w-3xl mx-auto w-full">

        <FadeInSection>
          <div className="flex items-center justify-center gap-4 mb-20">
            <span className="block h-px w-16 bg-brass-600/40" />
            <span className="font-sc text-xs tracking-ultra text-brass-400">Մանրամասներ</span>
            <span className="block h-px w-16 bg-brass-600/40" />
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 text-center">

          <FadeInSection delay={0.1}>
            <div className="flex flex-col items-center gap-5">
              <div className="w-px h-12 bg-brass-600/30" />
              <span className="font-sc text-xs tracking-widest text-brass-400">Ամսաթիվ</span>
              <p className="font-serif text-3xl font-light text-ivory-100 leading-tight">25 Ապրիլ</p>
              <p className="font-serif italic text-lg text-ivory-300/60">2026</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-col items-center gap-5">
              <div className="w-px h-12 bg-brass-600/30" />
              <span className="font-sc text-xs tracking-widest text-brass-400">Ժամը</span>
              <p className="font-serif text-3xl font-light text-ivory-100 leading-tight">17:00</p>
              <p className="font-serif italic text-lg text-ivory-300/60">Ռեստորան</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="flex flex-col items-center gap-5">
              <div className="w-px h-12 bg-brass-600/30" />
              <span className="font-sc text-xs tracking-widest text-brass-400">Վայրը</span>
              <p className="font-serif text-3xl font-light text-ivory-100 leading-tight">Երևան</p>
              <p className="font-serif italic text-lg text-ivory-300/60">Հայաստան</p>
            </div>
          </FadeInSection>

        </div>

        <FadeInSection delay={0.45}>
          <div className="mt-24 text-center">
            <a
              href="https://yandex.com/maps/org/1709327076/?ll=45.587915%2C40.145389&z=11.21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sc text-xs tracking-widest text-ivory-300/70 border border-brass-600/40 px-10 py-4 hover:border-brass-400 hover:text-ivory-100 transition-all duration-700 ease-out"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
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
