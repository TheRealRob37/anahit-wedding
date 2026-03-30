import FadeInSection from './FadeInSection'

export default function RomanticQuote() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-100 px-6 py-32">
      <div className="max-w-xl mx-auto text-center">
        <FadeInSection delay={0}>
          <span className="block font-sans text-xs tracking-ultra uppercase text-gold-500 mb-10">
            Մեր պատմությունը
          </span>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl italic font-light text-charcoal-800 leading-relaxed text-balance">
            «Երկու հոգի, մեկ ճանապարհ, անհամար երջանիկ պահեր»
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-12">
            <span className="block h-px w-10 bg-gold-300" />
            <span className="font-serif text-gold-400 text-sm italic font-light">Վ & Ա</span>
            <span className="block h-px w-10 bg-gold-300" />
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
