import FadeInSection from './FadeInSection'

export default function RomanticQuote() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory-100 px-8 py-32">
      <div className="max-w-2xl mx-auto text-center">

        <FadeInSection delay={0}>
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="block h-px w-16 bg-brass-500/40" />
            <span className="font-sc text-xs tracking-ultra text-brass-500">Մեր պատմությունը</span>
            <span className="block h-px w-16 bg-brass-500/40" />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl italic font-light text-navy-900 leading-relaxed">
            «Երկու հոգի, մեկ ճանապարհ,<br className="hidden sm:block" /> անհամար երջանիկ պահեր»
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <span className="block w-px h-10 bg-brass-400/40" />
            <span className="font-sc text-xs tracking-widest text-brass-500">Վ & Ա</span>
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}
