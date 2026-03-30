import { useState, useEffect, FormEvent } from 'react'
import FadeInSection from './FadeInSection'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData { name: string; guests: string; attendance: string; message: string }

export default function RSVP() {
  const token = new URLSearchParams(window.location.search).get('token') ?? ''
  const [form, setForm] = useState<FormData>({ name: '', guests: '1', attendance: 'yes', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    fetch(`/api/invite/${token}`).then(r => r.json()).then(d => { if (d.name) setForm(p => ({ ...p, name: d.name })) }).catch(() => {})
  }, [token])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); setLoading(true); setError('')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, ...form, guests: Number(form.guests) }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch { setError('Ցավոք, ինչ-որ բան սխալ գնաց։') }
    finally { setLoading(false) }
  }

  return (
    <section className="bg-cream-100 px-8 py-28">
      <div className="max-w-lg mx-auto">

        <FadeInSection>
          <div className="text-center mb-14">
            <h2 className="font-sc text-3xl sm:text-4xl tracking-widest text-burgundy-800 mb-4">
              Հաստատեք ներկայությունը
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="block h-px w-12 bg-gold-400/50" />
              <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/60 block" />
              <span className="block h-px w-12 bg-gold-400/50" />
            </div>
          </div>
        </FadeInSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center py-16 border border-gold-400/25 bg-cream-50"
            >
              <div className="w-12 h-12 border border-gold-500 flex items-center justify-center mx-auto mb-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8935a" strokeWidth="1.2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-script text-4xl text-burgundy-700 mb-3">Շնորհակալություն</p>
              <p className="font-sc text-xs tracking-widest text-gold-500">Ձեր պատասխանը ստացվել է</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-7">

              <FadeInSection delay={0.1}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-burgundy-700/60">Ձեր անունը</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Անուն Ազգանուն"
                    className="bg-transparent border-b border-gold-400/40 py-3 font-serif text-burgundy-900 text-lg placeholder:text-burgundy-800/20 focus:outline-none focus:border-burgundy-700 transition-colors duration-400" />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.15}>
                <div className="flex flex-col gap-3">
                  <label className="font-sc text-xs tracking-widest text-burgundy-700/60">Ներկայություն</label>
                  <div className="flex gap-8 py-1">
                    {[{ value: 'yes', label: 'Կգամ' }, { value: 'no', label: 'Չեմ կարող' }].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                        <span className={`w-4 h-4 border flex items-center justify-center transition-colors duration-300 ${form.attendance === opt.value ? 'border-burgundy-700' : 'border-gold-400/40'}`}>
                          {form.attendance === opt.value && <span className="w-2 h-2 bg-burgundy-700 block" />}
                        </span>
                        <input type="radio" name="attendance" value={opt.value} checked={form.attendance === opt.value} onChange={handleChange} className="sr-only" />
                        <span className="font-serif text-burgundy-800 font-light">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-burgundy-700/60">Հյուրերի քանակ</label>
                  <input type="number" name="guests" value={form.guests} onChange={handleChange} min="1" max="10"
                    className="bg-transparent border-b border-gold-400/40 py-3 font-serif text-burgundy-900 text-lg focus:outline-none focus:border-burgundy-700 transition-colors duration-400 w-20" />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.25}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-burgundy-700/60">Ուղերձ</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Ձեր ուղերձը..."
                    className="bg-transparent border-b border-gold-400/40 py-3 font-serif text-burgundy-900 text-lg placeholder:text-burgundy-800/20 focus:outline-none focus:border-burgundy-700 transition-colors duration-400 resize-none" />
                </div>
              </FadeInSection>

              {error && <p className="font-sc text-xs text-red-600/60 text-center">{error}</p>}

              <FadeInSection delay={0.35}>
                <div className="text-center mt-2">
                  <button type="submit" disabled={loading}
                    className="font-sc text-xs tracking-widest text-cream-50 bg-burgundy-700 px-12 py-4 hover:bg-burgundy-600 transition-colors duration-500 disabled:opacity-40">
                    {loading ? '·  ·  ·' : 'Հաստատել'}
                  </button>
                </div>
              </FadeInSection>

            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
