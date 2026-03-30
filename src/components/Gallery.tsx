import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', aspect: 'portrait' },
  { id: 2, src: 'https://images.unsplash.com/photo-1537633468565-c67a4c20bab5?w=600&q=80', aspect: 'landscape' },
  { id: 3, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', aspect: 'portrait' },
  { id: 4, src: 'https://images.unsplash.com/photo-1529635196377-ba5ce58b7b4a?w=600&q=80', aspect: 'square' },
  { id: 5, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', aspect: 'landscape' },
  { id: 6, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', aspect: 'portrait' },
]

const aspectClasses: Record<string, string> = {
  portrait:  'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square:    'aspect-square',
}

export default function Gallery() {
  return (
    <section className="bg-cream-50 px-6 py-28">
      <div className="max-w-5xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-sc text-3xl sm:text-4xl tracking-widest text-burgundy-800 mb-4">
              Մեր լուսանկարները
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="block h-px w-12 bg-gold-400/50" />
              <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/60 block" />
              <span className="block h-px w-12 bg-gold-400/50" />
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <FadeInSection key={photo.id} delay={i * 0.07}>
              <motion.div
                className={`overflow-hidden ${aspectClasses[photo.aspect]} relative`}
                whileHover="hover"
              >
                <motion.img
                  src={photo.src}
                  alt=""
                  className="w-full h-full object-cover"
                  variants={{ hover: { scale: 1.07 } }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-gold-400/0"
                  variants={{ hover: { borderColor: 'rgba(201,169,122,0.35)' } }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  )
}
