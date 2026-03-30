import FadeInSection from './FadeInSection'

export default function EventDetails() {
  return (
    <div>
      {/* venue photo */}
      <div className="w-full h-56 sm:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=80"
          alt="Venue"
          className="w-full h-full object-cover grayscale-[30%]"
        />
      </div>

      <section className="bg-beige-100 px-6 py-20">
        <div className="max-w-lg mx-auto text-center">

          <FadeInSection>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 leading-tight mb-6">
              Անցկացման<br />վայրը
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="font-serif text-xl text-olive-900 mb-1">Հարսանեկան Սրահ</p>
            <p className="font-serif italic text-olive-600/70 text-base mb-8">Երևան, Հայաստան</p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <a
              href="https://yandex.com/maps/org/1709327076/?ll=45.587915%2C40.145389&z=11.21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm font-medium tracking-widest uppercase text-beige-100 bg-olive-800 px-10 py-4 hover:bg-olive-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Ցուցադրել քարտեզում
            </a>
          </FadeInSection>

        </div>
      </section>
    </div>
  )
}
