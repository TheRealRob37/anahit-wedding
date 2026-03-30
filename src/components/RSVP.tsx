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
    <section className="bg-beige-100 px-6 py-20 border-t border-olive-700/10">
      <div className="max-w-md mx-auto">

        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-olive-800 text-center mb-10">
            Հաստատեք<br />ներկայությունը
          </h2>
        </FadeInSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-center py-14 border border-olive-700/20 bg-beige-50">
              <div className="w-10 h-10 border border-olive-700/40 flex items-center justify-center mx-auto mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4535" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-script text-4xl text-olive-800 mb-2">Շնորհակալություն</p>
              <p className="font-sans text-xs tracking-widest uppercase text-olive-600/60">Ձեր պատասխանը ստացվել է</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-7">

              <FadeInSection delay={0.1}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-olive-600/60">Ձեր անունը</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Անուն Ազգանուն"
                    className="bg-transparent border-b border-olive-700/25 py-3 font-serif text-olive-900 text-lg placeholder:text-olive-700/20 focus:outline-none focus:border-olive-800 transition-colors duration-300" />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.15}>
                <div className="flex flex-col gap-3">
                  <label className="font-sans text-xs tracking-widest uppercase text-olive-600/60">Ներկայություն</label>
                  <div className="flex gap-8 py-1">
                    {[{ value: 'yes', label: 'Կգամ' }, { value: 'no', label: 'Չեմ կարող' }].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                        <span className={`w-4 h-4 border flex items-center justify-center transition-colors duration-300 ${form.attendance === opt.value ? 'border-olive-800' : 'border-olive-700/25'}`}>
                          {form.attendance === opt.value && <span className="w-2 h-2 bg-olive-800 block" />}
                        </span>
                        <input type="radio" name="attendance" value={opt.value} checked={form.attendance === opt.value} onChange={handleChange} className="sr-only" />
                        <span className="font-serif text-olive-800 font-light">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-olive-600/60">Հյուրերի քանակ</label>
                  <input type="number" name="guests" value={form.guests} onChange={handleChange} min="1" max="10"
                    className="bg-transparent border-b border-olive-700/25 py-3 font-serif text-olive-900 text-lg focus:outline-none focus:border-olive-800 transition-colors duration-300 w-20" />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.25}>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-olive-600/60">Ուղերձ</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Ձեր ուղերձը..."
                    className="bg-transparent border-b border-olive-700/25 py-3 font-serif text-olive-900 text-lg placeholder:text-olive-700/20 focus:outline-none focus:border-olive-800 transition-colors duration-300 resize-none" />
                </div>
              </FadeInSection>

              {error && <p className="font-sans text-xs text-red-600/60 text-center">{error}</p>}

              <FadeInSection delay={0.35}>
                <button type="submit" disabled={loading}
                  className="w-full font-display text-sm font-medium tracking-widest uppercase text-beige-100 bg-olive-800 py-4 hover:bg-olive-700 transition-colors duration-300 disabled:opacity-40">
                  {loading ? '· · ·' : 'Հաստատել'}
                </button>
              </FadeInSection>

            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
