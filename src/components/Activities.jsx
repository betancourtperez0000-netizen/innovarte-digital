import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusCircle, Trash2, ImageIcon } from 'lucide-react'

const STORAGE_KEY = 'iad_activities'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', image: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch('/api/activities')
        if (!response.ok) throw new Error('API unavailable')
        const data = await response.json()
        setActivities(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch (error) {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        setActivities(saved)
      } finally {
        setLoading(false)
      }
    }

    loadActivities()
  }, [])

  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activities))
    }
  }, [activities])

  function handleFile(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setForm((f) => ({ ...f, image: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.title) return

    const newActivity = { title: form.title, description: form.description, image: form.image }
    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newActivity),
      })
      if (!response.ok) throw new Error('API error')
      const saved = await response.json()
      setActivities((prev) => [saved, ...prev])
      setForm({ title: '', description: '', image: '' })
      setOpen(false)
    } catch (error) {
      const next = [{ ...newActivity, id: Date.now() }, ...activities]
      setActivities(next)
      setForm({ title: '', description: '', image: '' })
      setOpen(false)
    }
  }

  function remove(id) {
    setActivities((s) => s.filter((a) => a.id !== id))
  }

  return (
    <section id="activities" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Actividades</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Registro de actividades y avances</h2>
        </div>
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow">
          <PlusCircle className="h-5 w-5" />
          Agregar actividad
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <motion.form initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} onSubmit={handleSubmit} className="relative z-10 w-full max-w-2xl rounded-2xl bg-slate-900/80 border border-white/8 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Nueva actividad</h3>
                <button type="button" onClick={() => setOpen(false)} className="text-slate-400">Cerrar</button>
              </div>
              <div className="mt-4 grid gap-3">
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Título" className="rounded-md border border-white/8 bg-transparent px-4 py-3 text-white placeholder:text-slate-400" />
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-white/8 bg-transparent px-4 py-3 text-slate-300">
                  <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
                  <ImageIcon className="h-5 w-5 text-cyan-300" />
                  <span>Subir imagen (opcional)</span>
                </label>
                <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="O pega una URL de imagen" className="rounded-md border border-white/8 bg-transparent px-4 py-3 text-white placeholder:text-slate-400" />
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Descripción" rows={4} className="rounded-md border border-white/8 bg-transparent px-4 py-3 text-white placeholder:text-slate-400" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">Agregar</button>
                  <button type="button" onClick={() => setOpen(false)} className="text-sm text-slate-400">Cancelar</button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading && (
          <div className="glass-panel col-span-full rounded-2xl p-8 text-center text-slate-300">Cargando actividades...</div>
        )}
        {!loading && activities.length === 0 && (
          <div className="glass-panel col-span-full rounded-2xl p-8 text-center text-slate-300">No hay actividades registradas. Usa "Agregar actividad" para comenzar.</div>
        )}

        {activities.map((act) => (
          <motion.article key={act.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass-panel rounded-2xl overflow-hidden">
            {act.image ? (
              <img src={act.image} alt={act.title} className="h-44 w-full object-cover" />
            ) : (
              <div className="flex h-44 w-full items-center justify-center bg-slate-800">
                <ImageIcon className="h-10 w-10 text-cyan-300" />
              </div>
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{act.title}</h3>
                <button onClick={() => remove(act.id)} className="text-slate-400 hover:text-red-400">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 text-slate-300">{act.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
