import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/innovarte'

const pool = new pg.Pool({ connectionString })

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS activities (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      image TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `)
}

app.use(cors())
app.use(express.json({ limit: '10mb' }))

app.get('/api/activities', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, title, description, image, created_at FROM activities ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No fue posible obtener las actividades' })
  }
})

app.post('/api/activities', async (req, res) => {
  const { title, description, image } = req.body
  if (!title) {
    return res.status(400).json({ error: 'El título es requerido' })
  }

  try {
    const result = await pool.query(
      'INSERT INTO activities (title, description, image) VALUES ($1, $2, $3) RETURNING id, title, description, image, created_at',
      [title, description || '', image || null],
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No fue posible guardar la actividad' })
  }
})

app.listen(port, async () => {
  try {
    await ensureTable()
    console.log(`Server listening on port ${port}`)
  } catch (error) {
    console.error('Failed to ensure database table', error)
    process.exit(1)
  }
})
