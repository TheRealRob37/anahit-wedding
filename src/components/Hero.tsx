import { motion } from 'framer-motion'
import TornEdge from './TornEdge'

export default function Hero() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-950/30 via-olive-950/20 to-olive-950/75" />

        <div className="relative z-10 px-8 pb-16 text-center">
          <motion.h1
            className="font-display text-6xl sm:text-8xl md:text-9xl font-light text-white tracking-widest uppercase leading-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Վահան
            <span className="font-script text-5xl sm:text-6xl normal-case font-normal mx-4 align-middle text-beige-300">&</span>
            Անահիտ
          </motion.h1>

          <motion.p
            className="font-serif italic text-beige-200/80 text-lg mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            ...և երկուսը կդառնան մեկ մարմին
          </motion.p>
        </div>
      </section>

      <TornEdge fill="#f4ede0" />
    </div>
  )
}
