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
    <section className="bg-beige-200 px-4 py-20">
      <div className="max-w-4xl mx-auto">

        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 text-center mb-10">
            Մեր լուսանկարները
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {photos.map((photo, i) => (
            <FadeInSection key={photo.id} delay={i * 0.07}>
              <motion.div className={`overflow-hidden ${aspectClasses[photo.aspect]}`} whileHover="hover">
                <motion.img
                  src={photo.src} alt=""
                  className="w-full h-full object-cover grayscale-[20%]"
                  variants={{ hover: { scale: 1.06, filter: 'grayscale(0%)' } }}
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
