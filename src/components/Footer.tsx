import TornEdge from './TornEdge'

export default function Footer() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-olive-950/80" />
        <TornEdge fill="#1a1810" />
        <div className="relative z-10 py-20 px-6 text-center">
          <p className="font-display text-5xl sm:text-7xl font-light tracking-widest text-beige-100 mb-4">
            25.04.2026
          </p>
          <p className="font-display text-lg sm:text-xl font-light tracking-ultra uppercase text-beige-300/70">
            Ուրախ կլինենք ձեզ տեսնել
          </p>
          <div className="mt-10">
            <p className="font-script text-4xl text-beige-300/60">Վահան & Անահիտ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
