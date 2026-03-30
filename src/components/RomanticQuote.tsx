import FadeInSection from './FadeInSection'

export default function RomanticQuote() {
  return (
    <section className="bg-cream-50 px-8 py-28">
      <div className="max-w-3xl mx-auto">

        <div className="grid sm:grid-cols-2 gap-12 items-center">

          <FadeInSection>
            <div>
              <p className="font-sc text-xs tracking-ultra text-burgundy-700/60 mb-5">Հարգելի բոլոր</p>
              <h2 className="font-script text-5xl sm:text-6xl text-burgundy-800 mb-6 leading-tight">
                Հարազատներ & բարեկամներ
              </h2>
              <div className="w-12 h-px bg-gold-400 mb-6" />
              <p className="font-serif text-lg leading-relaxed text-burgundy-800/70">
                Մեծ ուրախությամբ հրավիրում ենք ձեզ կիսել մեր ամենակարևոր օրը։
                Ձեր ներկայությունը մեզ անչափ կուրախացնի, և միասին կստեղծենք
                անմոռանալի հուշեր՝ ողջ կյանքի համար։
              </p>
              <p className="font-serif text-lg leading-relaxed text-burgundy-800/70 mt-4">
                Անհամբեր սպասում ենք ձեզ տեսնելու։
              </p>
              <div className="mt-8">
                <p className="font-script text-3xl text-burgundy-700">Վահան & Անահիտ</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold-400/25" />
              <img
                src="https://images.unsplash.com/photo-1537633468565-c67a4c20bab5?w=600&q=80"
                alt=""
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  )
}
