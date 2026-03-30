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

  const [form, setForm] = useState<FormData>({ name: '', guests: '1', attendance: 'yes', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    fetch(`/api/invite/${token}`)
      .then(r => r.json())
      .then(data => { if (data.name) setForm(prev => ({ ...prev, name: data.name })) })
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
        body: JSON.stringify({ token, name: form.name, attendance: form.attendance, guests: Number(form.guests), message: form.message }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Ցավոք, ինչ-որ բան սխալ գնաց։ Խնդրում ենք կրկին փորձել։')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory-100 px-8 py-32">
      <div className="max-w-md mx-auto w-full">

        <FadeInSection>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-16 bg-brass-500/40" />
            <span className="font-sc text-xs tracking-ultra text-brass-500">Հրավեր</span>
            <span className="block h-px w-16 bg-brass-500/40" />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-navy-900 text-center mb-14">
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
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center py-16 border border-brass-400/20"
            >
              <div className="w-10 h-10 border border-brass-400 flex items-center justify-center mx-auto mb-7">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#876e4e" strokeWidth="1.2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-serif text-2xl italic text-navy-900 mb-3">Շնորհակալություն</p>
              <p className="font-sc text-xs tracking-widest text-brass-500">Ձեր պատասխանը ստացվել է</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-8"
            >
              <FadeInSection delay={0.2}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-brass-500">Ձեր անունը</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Անուն Ազգանուն"
                    className="bg-transparent border-b border-brass-500/30 py-3 font-serif text-navy-900 text-lg placeholder:text-navy-800/25 focus:outline-none focus:border-brass-500 transition-colors duration-500"
                  />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.25}>
                <div className="flex flex-col gap-3">
                  <label className="font-sc text-xs tracking-widest text-brass-500">Ներկայություն</label>
                  <div className="flex gap-8 py-1">
                    {[{ value: 'yes', label: 'Կգամ' }, { value: 'no', label: 'Չեմ կարող' }].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                        <span className={`w-4 h-4 border flex items-center justify-center transition-colors duration-400 ${form.attendance === opt.value ? 'border-brass-500' : 'border-brass-400/30'}`}>
                          {form.attendance === opt.value && <span className="w-1.5 h-1.5 bg-brass-500 block" />}
                        </span>
                        <input type="radio" name="attendance" value={opt.value} checked={form.attendance === opt.value} onChange={handleChange} className="sr-only" />
                        <span className="font-serif text-navy-800 font-light">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-brass-500">Հյուրերի քանակ</label>
                  <input
                    type="number" name="guests" value={form.guests} onChange={handleChange} min="1" max="10"
                    className="bg-transparent border-b border-brass-500/30 py-3 font-serif text-navy-900 text-lg focus:outline-none focus:border-brass-500 transition-colors duration-500 w-20"
                  />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.35}>
                <div className="flex flex-col gap-2">
                  <label className="font-sc text-xs tracking-widest text-brass-500">Ուղերձ</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Ձեր ուղերձը..."
                    className="bg-transparent border-b border-brass-500/30 py-3 font-serif text-navy-900 text-lg placeholder:text-navy-800/25 focus:outline-none focus:border-brass-500 transition-colors duration-500 resize-none"
                  />
                </div>
              </FadeInSection>

              {error && <p className="font-sc text-xs text-red-600/70 text-center">{error}</p>}

              <FadeInSection delay={0.45}>
                <div className="text-center mt-2">
                  <button
                    type="submit" disabled={loading}
                    className="font-sc text-xs tracking-widest text-navy-800 border border-brass-500/40 px-12 py-4 hover:bg-navy-900 hover:text-ivory-100 hover:border-navy-900 transition-all duration-700 ease-out disabled:opacity-40"
                  >
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
