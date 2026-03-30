import { useState, useEffect, FormEvent } from 'react'
import FadeInSection from './FadeInSection'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  name: string
  guests: string
  attendance: string
  message: string
}

export default function RSVP() {
  const token = new URLSearchParams(window.location.search).get('token') ?? ''

  const [form, setForm] = useState<FormData>({
    name: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    fetch(`/api/invite/${token}`)
      .then(r => r.json())
      .then(data => {
        if (data.name) setForm(prev => ({ ...prev, name: data.name }))
      })
      .catch(() => {})
  }, [token])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          name: form.name,
          attendance: form.attendance,
          guests: Number(form.guests),
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Սխալ է տեղի ունեցել')
      setSubmitted(true)
    } catch {
      setError('Ցավոք, ինչ-որ բան սխալ գնաց։ Խնդրում ենք կրկին փորձել։')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-200 px-6 py-32">
      <div className="max-w-md mx-auto w-full">
        <FadeInSection>
          <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 text-center mb-4">
            Հրավեր
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-800 text-center mb-14">
            Հաստատե՛ք ձեր ներկայությունը
          </h2>
        </FadeInSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center py-16"
            >
              <div className="w-12 h-12 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975f" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-serif text-2xl italic text-charcoal-800 mb-3">Շնորհակալություն</p>
              <p className="font-sans text-sm text-charcoal-600 font-light">Ձեր պատասխանը ստացվել է</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              <FadeInSection delay={0.2}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-gold-500">
                    Ձեր անունը
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Անուն Ազգանուն"
                    className="bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 text-lg placeholder:text-charcoal-600/30 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                  />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.25}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-gold-500">
                    Ներկայություն
                  </label>
                  <div className="flex gap-6 py-3">
                    {[
                      { value: 'yes', label: 'Կգամ' },
                      { value: 'no', label: 'Չեմ կարող' },
                    ].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                        <span className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors duration-300 ${form.attendance === opt.value ? 'border-gold-500' : 'border-gold-300'}`}>
                          {form.attendance === opt.value && (
                            <span className="w-2 h-2 rounded-full bg-gold-500 block" />
                          )}
                        </span>
                        <input
                          type="radio"
                          name="attendance"
                          value={opt.value}
                          checked={form.attendance === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-serif text-charcoal-700 font-light">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-gold-500">
                    Հյուրերի քանակ
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    className="bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 text-lg focus:outline-none focus:border-gold-500 transition-colors duration-300 w-20"
                  />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.35}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-gold-500">
                    Ուղերձ 
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ձեր ուղերձը..."
                    className="bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 text-lg placeholder:text-charcoal-600/30 focus:outline-none focus:border-gold-500 transition-colors duration-300 resize-none"
                  />
                </div>
              </FadeInSection>

              {error && (
                <p className="font-sans text-xs text-red-400 text-center">{error}</p>
              )}

              <FadeInSection delay={0.45}>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-charcoal-700 border border-gold-300 px-10 py-4 hover:bg-gold-400 hover:text-cream-50 hover:border-gold-400 transition-all duration-500 ease-out self-center disabled:opacity-40"
                >
                  {loading ? '...' : 'Հաստատել'}
                </button>
              </FadeInSection>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
