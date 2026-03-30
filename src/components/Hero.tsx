import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* rose background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88df5691166d?w=1400&q=80')" }}
      />
      <div className="absolute inset-0 bg-burgundy-950/78" />

      <div className="relative z-10 text-center px-8 flex flex-col items-center">

        {/* label */}
        <motion.p
          className="font-sc text-xs tracking-ultra text-gold-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        >
          Հրավիրվածություն
        </motion.p>

        {/* monogram oval */}
        <motion.div
          className="relative w-28 h-36 flex items-center justify-center mb-10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="absolute inset-0 border border-gold-400/70 rounded-full" />
          <div className="absolute inset-1.5 border border-gold-400/25 rounded-full" />
          <span className="font-script text-4xl text-gold-300 relative z-10 leading-none pt-1">Վ & Ա</span>
        </motion.div>

        {/* names */}
        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl text-cream-50 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ color: '#fdfaf5' }}
        >
          Վահան & Անահիտ
        </motion.h1>

        {/* divider */}
        <motion.div
          className="flex items-center gap-4 my-7"
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.95 }}
        >
          <span className="block h-px w-16 sm:w-24 bg-gold-500/50" />
          <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70 block flex-shrink-0" />
          <span className="block h-px w-16 sm:w-24 bg-gold-500/50" />
        </motion.div>

        {/* couple photo in decorative frame */}
        <motion.div
          className="relative w-52 h-52 sm:w-64 sm:h-64 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-gold-400/40" />
          <div className="absolute inset-2 rounded-full border border-gold-400/20" />
          <div className="absolute inset-3 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529635196377-ba5ce58b7b4a?w=500&q=80"
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* date & names */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
        >
          <p className="font-serif italic text-xl text-cream-200/70">25 Ապրիլ, 2026</p>
          <p className="font-sc text-sm tracking-widest text-gold-400">Վահան & Անահիտ</p>
        </motion.div>

      </div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-px h-10 bg-gold-400/40 mx-auto origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
        />
      </motion.div>
    </section>
  )
}
