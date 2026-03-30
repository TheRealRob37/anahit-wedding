import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream-50 overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold-300 opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-gold-300 opacity-60" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-400 opacity-70" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-400 opacity-70" />
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <motion.p
          className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Հրավիրում ենք
        </motion.p>

        <motion.h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-light text-charcoal-800 leading-none tracking-wide mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Վահան
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-5 my-5"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="block h-px w-16 bg-gold-400 opacity-70" />
          <span className="font-serif text-gold-400 text-2xl font-light italic">&</span>
          <span className="block h-px w-16 bg-gold-400 opacity-70" />
        </motion.div>

        <motion.h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-light text-charcoal-800 leading-none tracking-wide mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Անահիտ
        </motion.h1>

        <motion.p
          className="font-serif text-xl sm:text-2xl italic text-charcoal-600 font-light mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Մենք ամուսնանում ենք
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-sans text-xs tracking-widest uppercase text-gold-500">25 Ապրիլ 2026</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
      >
        <motion.div
          className="w-px h-8 bg-gold-400 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
        />
      </motion.div>
    </section>
  )
}
