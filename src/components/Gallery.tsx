import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    aspect: 'portrait',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1537633468565-c67a4c20bab5?w=600&q=80',
    aspect: 'landscape',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    aspect: 'portrait',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1529635196377-ba5ce58b7b4a?w=600&q=80',
    aspect: 'square',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    aspect: 'landscape',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    aspect: 'portrait',
  },
]

const aspectClasses: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
}

export default function Gallery() {
  return (
    <section className="min-h-screen bg-cream-100 px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 text-center mb-16">
            Մեր լուսանկարները
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <FadeInSection key={photo.id} delay={i * 0.08}>
              <motion.div
                className={`overflow-hidden bg-cream-200 ${aspectClasses[photo.aspect]} rounded-sm`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.img
                  src={photo.src}
                  alt=""
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  loading="lazy"
                />
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
