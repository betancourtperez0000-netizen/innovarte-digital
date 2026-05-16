import { CheckCircle2 } from 'lucide-react'

const impacts = [
  'Fortalecimiento de la identidad cultural',
  'Inclusión digital',
  'Participación comunitaria',
  'Desarrollo de habilidades tecnológicas',
  'Espacios de expresión artística',
  'Reducción de la brecha digital',
  'Mayor visibilidad del talento local',
]

export default function Benefits() {
  return (
    <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-glow sm:p-10">
      <div className="grid gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Impacto del proyecto</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          InnovArte Digital busca generar un cambio social real.
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {impacts.map((item) => (
          <div key={item} className="glass-panel rounded-3xl p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <p className="text-lg font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
