export default function Footer() {
  return (
    <footer className="relative bg-burgundy-900 py-20 px-8 text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88df5691166d?w=1400&q=80')" }}
      />
      <div className="relative z-10">
        <div className="relative w-20 h-24 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 border border-gold-400/50 rounded-full" />
          <span className="font-script text-2xl text-gold-300">Վ & Ա</span>
        </div>
        <p className="font-sc text-xs tracking-widest text-gold-400/60 mt-4">
          25 Ապրիլ 2026 · Երևան
        </p>
      </div>
    </footer>
  )
}
