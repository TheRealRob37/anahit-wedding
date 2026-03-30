import TornEdge from './TornEdge'

export default function Footer() {
  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{ background: '#1a1810' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80')",
            filter: 'grayscale(100%) sepia(20%)',
            opacity: 0.15,
          }}
        />

        {/* torn edge at the top — same teeth but flipped vertically */}
        <div style={{ lineHeight: 0, transform: 'scaleY(-1)', marginBottom: '-2px' }}>
          <TornEdge fill="#f4ede0" />
        </div>

        <div className="relative z-10 py-20 px-6 text-center">
          <p className="font-display text-5xl sm:text-7xl font-light tracking-widest text-beige-100 mb-4">
            25.04.2026
          </p>
          <p className="font-display text-base sm:text-lg font-light tracking-ultra uppercase text-beige-400/60 mb-10">
            Ուրախ կլինենք ձեզ տեսնել
          </p>
          <p className="font-script text-5xl text-beige-300/50">Վահան & Անահիտ</p>
        </div>
      </div>
    </div>
  )
}
