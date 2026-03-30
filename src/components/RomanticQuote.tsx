import FadeInSection from './FadeInSection'

export default function RomanticQuote() {
  return (
    <section className="bg-beige-100 px-6 py-20">
      <div className="max-w-lg mx-auto text-center">

        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 leading-tight mb-8">
            Հարգելի հարազատներ<br />ու բարեկամներ
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="font-serif text-lg leading-relaxed text-olive-700/80 mb-4">
            Մեր կյանքում կատարվելու են երջանիկ փոփոխություններ։
          </p>
          <p className="font-serif text-lg leading-relaxed text-olive-700/80">
            Ուզում ենք, որ այդ օրը մեր կողքին լինեն ամենամոտ
            ու հարազատ մարդիկ։ Ուրախ կլինենք ձեզ հետ կիսել
            այս հրաշալի տոնը՝ մեր հարսանիքի օրը, որը կկայանա
          </p>
        </FadeInSection>

        <FadeInSection delay={0.25}>
          <p className="font-display text-5xl sm:text-6xl font-light text-olive-900 tracking-widest mt-10 mb-2">
            25.04.2026
          </p>
          <p className="font-serif italic text-olive-600/70 text-base">Երևան, Հայաստան</p>
        </FadeInSection>

      </div>
    </section>
  )
}
