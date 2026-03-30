import { motion } from 'framer-motion'
import TornEdge from './TornEdge'

export default function Hero() {
  return (
    <div className="bg-beige-100">
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80')",
            filter: 'grayscale(100%) sepia(20%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

        <div className="relative z-10 px-8 pb-20 text-left max-w-xl">
          <motion.h1
            className="font-display text-6xl sm:text-8xl font-light text-white leading-none mb-6"
            style={{ letterSpacing: '0.08em' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ՎԱՀԱՆ
            <br />
            <span className="font-script text-5xl sm:text-6xl normal-case font-normal text-beige-300/90 leading-none block my-1">
              &
            </span>
            ԱՆԱՀԻՏ
          </motion.h1>

          <motion.p
            className="font-serif italic text-beige-200/75 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.0 }}
          >
            ...և երկուսը կդառնան մեկ մարմին
          </motion.p>
        </div>
      </section>

      <TornEdge fill="#f4ede0" />
    </div>
  )
}
