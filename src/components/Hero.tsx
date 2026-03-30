import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy-950 overflow-hidden px-8">

      <div className="absolute inset-6 sm:inset-10 border border-brass-600/25 pointer-events-none" />
      <div className="absolute inset-8 sm:inset-12 border border-brass-600/10 pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brass-500/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-brass-500/50" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-r from-transparent to-brass-500/50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-l from-transparent to-brass-500/50" />

      <div className="text-center max-w-2xl mx-auto relative z-10">

        <motion.p
          className="font-sc text-xs tracking-ultra text-brass-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
        >
          Հրավիրվածություն
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-light text-ivory-100 tracking-wide leading-none">
            Վահան
          </h1>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 my-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="block h-px w-20 sm:w-32 bg-brass-500/50" />
          <span className="font-serif italic text-brass-400 text-2xl">&</span>
          <span className="block h-px w-20 sm:w-32 bg-brass-500/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-light text-ivory-100 tracking-wide leading-none">
            Անահիտ
          </h1>
        </motion.div>

        <motion.div
          className="mt-14 mb-10 flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.1 }}
        >
          <span className="block h-px w-8 bg-brass-600/40" />
          <span className="font-serif italic text-ivory-300/70 text-xl">Մենք ամուսնանում ենք</span>
          <span className="block h-px w-8 bg-brass-600/40" />
        </motion.div>

        <motion.p
          className="font-sc text-sm tracking-widest text-brass-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.35 }}
        >
          25 Ապրիլ 2026
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
      >
        <motion.div
          className="w-px h-10 bg-brass-500/50 mx-auto origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
        />
      </motion.div>
    </section>
  )
}
