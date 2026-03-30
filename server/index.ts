import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url'
import db from './db.js'
import { sendInvitation } from './mailer.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const PORT = process.env.PORT || process.env.SERVER_PORT || 3001
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const SITE_URL = process.env.SITE_URL || 'http://localhost:5173'

app.use(cors())
app.use(express.json())

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const auth = req.headers['x-admin-password']
  if (auth !== ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  next()
}

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// ── Public: validate invite token ──────────────────────────────────────────
app.get('/api/invite/:token', (req, res) => {
  const guest = db.prepare('SELECT id, name FROM guests WHERE token = ?').get(req.params.token) as
    | { id: number; name: string }
    | undefined
  if (!guest) return res.status(404).json({ error: 'Invalid invite link' })
  res.json({ name: guest.name })
})

// ── Public: submit RSVP ────────────────────────────────────────────────────
app.post('/api/rsvp', (req, res) => {
  const { token, name, attendance, guests, message } = req.body as {
    token?: string
    name: string
    attendance: 'yes' | 'no'
    guests: number
    message?: string
  }

  if (!name || !attendance) return res.status(400).json({ error: 'Missing fields' })
  if (!['yes', 'no'].includes(attendance)) return res.status(400).json({ error: 'Invalid attendance' })

  const existing = token
    ? (db.prepare('SELECT id FROM rsvps WHERE token = ?').get(token) as { id: number } | undefined)
    : undefined

  if (existing) {
    db.prepare(
      'UPDATE rsvps SET name=?, attendance=?, guests=?, message=?, submitted_at=datetime("now") WHERE token=?'
    ).run(name, attendance, guests || 1, message || '', token)
  } else {
    db.prepare(
      'INSERT INTO rsvps (token, name, attendance, guests, message) VALUES (?,?,?,?,?)'
    ).run(token || '', name, attendance, guests || 1, message || '')
  }

  res.json({ ok: true })
})

// ── Admin: list all guests + their RSVP ───────────────────────────────────
app.get('/api/admin/guests', requireAdmin, (_req, res) => {
  const rows = db.prepare(`
    SELECT g.id, g.name, g.email, g.token, g.created_at,
           r.attendance, r.guests AS rsvp_guests, r.message, r.submitted_at
    FROM guests g
    LEFT JOIN rsvps r ON r.token = g.token
    ORDER BY g.created_at DESC
  `).all()
  res.json(rows)
})

// ── Admin: summary counts ──────────────────────────────────────────────────
app.get('/api/admin/summary', requireAdmin, (_req, res) => {
  const total = (db.prepare('SELECT COUNT(*) as n FROM guests').get() as { n: number }).n
  const responded = (db.prepare("SELECT COUNT(*) as n FROM rsvps WHERE attendance='yes'").get() as { n: number }).n
  const totalGuests = (db.prepare("SELECT COALESCE(SUM(guests),0) as n FROM rsvps WHERE attendance='yes'").get() as { n: number }).n
  const declined = (db.prepare("SELECT COUNT(*) as n FROM rsvps WHERE attendance='no'").get() as { n: number }).n
  res.json({ total, responded, declined, totalGuests })
})

// ── Admin: add guest ───────────────────────────────────────────────────────
app.post('/api/admin/guests', requireAdmin, (req, res) => {
  const { name, email } = req.body as { name: string; email?: string }
  if (!name) return res.status(400).json({ error: 'Name is required' })
  const token = uuidv4()
  db.prepare('INSERT INTO guests (name, email, token) VALUES (?,?,?)').run(name, email || '', token)
  const guest = db.prepare('SELECT * FROM guests WHERE token = ?').get(token)
  res.json(guest)
})

// ── Admin: delete guest ────────────────────────────────────────────────────
app.delete('/api/admin/guests/:id', requireAdmin, (req, res) => {
  const guest = db.prepare('SELECT token FROM guests WHERE id = ?').get(req.params.id) as
    | { token: string }
    | undefined
  if (!guest) return res.status(404).json({ error: 'Not found' })
  db.prepare('DELETE FROM rsvps WHERE token = ?').run(guest.token)
  db.prepare('DELETE FROM guests WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})

// ── Admin: send invitation email ───────────────────────────────────────────
app.post('/api/admin/send-invite/:id', requireAdmin, async (req, res) => {
  const guest = db.prepare('SELECT * FROM guests WHERE id = ?').get(req.params.id) as
    | { id: number; name: string; email: string; token: string }
    | undefined
  if (!guest) return res.status(404).json({ error: 'Not found' })
  if (!guest.email) return res.status(400).json({ error: 'Guest has no email' })

  try {
    await sendInvitation({
      to: guest.email,
      guestName: guest.name,
      inviteUrl: `${SITE_URL}/?token=${guest.token}`,
    })
    res.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
})

if (isProd) {
  const distPath = path.join(__dirname, '../dist')
  app.use(express.static(distPath))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
