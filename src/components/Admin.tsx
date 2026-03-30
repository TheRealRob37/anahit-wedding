import { useState, useEffect, useCallback } from 'react'

interface Guest {
  id: number
  name: string
  email: string
  token: string
  created_at: string
  attendance: 'yes' | 'no' | null
  rsvp_guests: number | null
  message: string | null
  submitted_at: string | null
}

interface Summary {
  total: number
  responded: number
  declined: number
  totalGuests: number
}

const SITE_URL = window.location.origin

function useAdminPassword() {
  const [password, setPassword] = useState(() => sessionStorage.getItem('admin_pw') || '')
  const save = (pw: string) => {
    sessionStorage.setItem('admin_pw', pw)
    setPassword(pw)
  }
  return { password, save }
}

function headers(pw: string) {
  return { 'Content-Type': 'application/json', 'x-admin-password': pw }
}

export default function Admin() {
  const { password, save } = useAdminPassword()
  const [authed, setAuthed] = useState(false)
  const [pwInput, setPwInput] = useState('')
  const [guests, setGuests] = useState<Guest[]>([])
  const [summary, setSummary] = useState<Summary | null>(null)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [adding, setAdding] = useState(false)
  const [sendingId, setSendingId] = useState<number | null>(null)
  const [copied, setCopied] = useState<number | null>(null)
  const [err, setErr] = useState('')

  const load = useCallback(async (pw: string) => {
    const [g, s] = await Promise.all([
      fetch('/api/admin/guests', { headers: headers(pw) }).then(r => r.json()),
      fetch('/api/admin/summary', { headers: headers(pw) }).then(r => r.json()),
    ])
    if (g.error) throw new Error(g.error)
    setGuests(g)
    setSummary(s)
  }, [])

  async function login() {
    setErr('')
    try {
      await load(pwInput)
      save(pwInput)
      setAuthed(true)
    } catch {
      setErr('Սխալ գաղտնաբառ')
    }
  }

  useEffect(() => {
    if (password) {
      load(password)
        .then(() => setAuthed(true))
        .catch(() => {})
    }
  }, [password, load])

  async function addGuest(e: React.FormEvent) {
    e.preventDefault()
    if (!newName.trim()) return
    setAdding(true)
    await fetch('/api/admin/guests', {
      method: 'POST',
      headers: headers(password),
      body: JSON.stringify({ name: newName.trim(), email: newEmail.trim() }),
    })
    setNewName('')
    setNewEmail('')
    await load(password)
    setAdding(false)
  }

  async function deleteGuest(id: number) {
    if (!confirm('Հեռացնե՞լ հյուրին')) return
    await fetch(`/api/admin/guests/${id}`, { method: 'DELETE', headers: headers(password) })
    await load(password)
  }

  async function sendEmail(id: number) {
    setSendingId(id)
    const res = await fetch(`/api/admin/send-invite/${id}`, {
      method: 'POST',
      headers: headers(password),
    })
    const data = await res.json()
    if (data.error) alert('Սխալ՝ ' + data.error)
    setSendingId(null)
  }

  function copyLink(token: string, id: number) {
    navigator.clipboard.writeText(`${SITE_URL}/?token=${token}`)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
        <div className="max-w-sm w-full">
          <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 text-center mb-8">
            Ադմինիստրատոր
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Գաղտնաբառ"
              value={pwInput}
              onChange={e => setPwInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && login()}
              className="bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 text-lg placeholder:text-charcoal-600/30 focus:outline-none focus:border-gold-500 transition-colors duration-300"
            />
            {err && <p className="font-sans text-xs text-red-400">{err}</p>}
            <button
              onClick={login}
              className="font-sans text-xs tracking-widest uppercase text-charcoal-700 border border-gold-300 px-8 py-4 hover:bg-gold-400 hover:text-cream-50 transition-all duration-500"
            >
              Մուտք
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 px-4 sm:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-1">Ադմինիստրատոր</p>
            <h1 className="font-serif text-3xl font-light text-charcoal-800">Վահան & Անահիտ</h1>
          </div>
          <a
            href="/"
            className="font-sans text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 transition-colors"
          >
            ← Կայք
          </a>
        </div>

        {summary && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Հրավիրված', value: summary.total },
              { label: 'Կգան', value: summary.responded },
              { label: 'Չեն կարող', value: summary.declined },
              { label: 'Ընդամենը հյուր', value: summary.totalGuests },
            ].map(s => (
              <div key={s.label} className="border border-gold-300/40 p-5 text-center">
                <p className="font-serif text-4xl font-light text-charcoal-800">{s.value}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={addGuest} className="flex flex-wrap gap-3 mb-10">
          <input
            type="text"
            placeholder="Անուն Ազգանուն"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            required
            className="flex-1 min-w-40 bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 placeholder:text-charcoal-600/30 focus:outline-none focus:border-gold-500 transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Էլ. հասցե (կամընտիր)"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            className="flex-1 min-w-48 bg-transparent border-b border-gold-300 py-3 font-serif text-charcoal-800 placeholder:text-charcoal-600/30 focus:outline-none focus:border-gold-500 transition-colors duration-300"
          />
          <button
            type="submit"
            disabled={adding}
            className="font-sans text-xs tracking-widest uppercase text-charcoal-700 border border-gold-300 px-6 py-3 hover:bg-gold-400 hover:text-cream-50 transition-all duration-500 disabled:opacity-40"
          >
            {adding ? '...' : '+ Ավելացնել'}
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold-300/30">
                {['Անուն', 'Էլ. հասցե', 'Ներկայություն', 'Հյուր', 'Ուղերձ', 'Ամսաթիվ', ''].map(h => (
                  <th key={h} className="font-sans text-xs tracking-widest uppercase text-gold-500 pb-3 pr-4 font-normal whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {guests.map(g => (
                <tr key={g.id} className="border-b border-gold-300/20 hover:bg-cream-100/50 transition-colors">
                  <td className="py-4 pr-4 font-serif text-charcoal-800 whitespace-nowrap">{g.name}</td>
                  <td className="py-4 pr-4 font-sans text-xs text-charcoal-600">{g.email || '—'}</td>
                  <td className="py-4 pr-4">
                    {g.attendance === 'yes' && (
                      <span className="font-sans text-xs tracking-widest uppercase text-emerald-600">Կգա</span>
                    )}
                    {g.attendance === 'no' && (
                      <span className="font-sans text-xs tracking-widest uppercase text-red-400">Չի կարող</span>
                    )}
                    {g.attendance === null && (
                      <span className="font-sans text-xs tracking-widest uppercase text-charcoal-600/30">Չի պատասխանել</span>
                    )}
                  </td>
                  <td className="py-4 pr-4 font-serif text-charcoal-800">{g.rsvp_guests ?? '—'}</td>
                  <td className="py-4 pr-4 font-sans text-xs text-charcoal-600 max-w-[160px] truncate">{g.message || '—'}</td>
                  <td className="py-4 pr-4 font-sans text-xs text-charcoal-600 whitespace-nowrap">
                    {g.submitted_at ? g.submitted_at.slice(0, 10) : '—'}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyLink(g.token, g.id)}
                        title="Պատճենել հղումը"
                        className="font-sans text-xs tracking-widest uppercase px-3 py-2 border border-gold-300/60 text-gold-500 hover:bg-gold-300 hover:text-cream-50 transition-all duration-300 whitespace-nowrap"
                      >
                        {copied === g.id ? '✓' : 'Հղում'}
                      </button>
                      {g.email && (
                        <button
                          onClick={() => sendEmail(g.id)}
                          disabled={sendingId === g.id}
                          title="Ուղարկել նամակ"
                          className="font-sans text-xs tracking-widest uppercase px-3 py-2 border border-gold-300/60 text-gold-500 hover:bg-gold-300 hover:text-cream-50 transition-all duration-300 disabled:opacity-30 whitespace-nowrap"
                        >
                          {sendingId === g.id ? '...' : 'Նամակ'}
                        </button>
                      )}
                      <button
                        onClick={() => deleteGuest(g.id)}
                        title="Հեռացնել"
                        className="font-sans text-xs px-2 py-2 text-charcoal-600/30 hover:text-red-400 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {guests.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 font-serif italic text-charcoal-600/40 text-center">
                    Հյուրեր չկան դեռ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
