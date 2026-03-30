import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = process.env.DB_PATH || path.join(__dirname, '../wedding.db')
const db = new Database(DB_PATH)

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS guests (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    name     TEXT    NOT NULL,
    email    TEXT,
    token    TEXT    UNIQUE NOT NULL,
    created_at TEXT  DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS rsvps (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    token        TEXT NOT NULL,
    name         TEXT NOT NULL,
    attendance   TEXT NOT NULL CHECK(attendance IN ('yes','no')),
    guests       INTEGER NOT NULL DEFAULT 1,
    message      TEXT,
    submitted_at TEXT DEFAULT (datetime('now'))
  );
`)

export default db
