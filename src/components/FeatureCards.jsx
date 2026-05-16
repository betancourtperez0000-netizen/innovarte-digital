import { motion } from 'framer-motion'
import { Cpu, Globe2, Rocket, ShieldCheck } from 'lucide-react'

const cards = [
  {
    title: 'Performance ultra rápida',
    description: 'Animaciones nativas, carga casi instantánea y experiencia de usuario impecable.',
    icon: Rocket,
    accent: 'from-sky-400 to-cyan-400',
  },
  {
    title: 'Diseño responsive total',
    description: 'Se ve impecable en móvil, tablet y escritorio con estructura fluida y legible.',
    icon: Globe2,
    accent: 'from-violet-400 to-fuchsia-400',
  },
  {
    title: 'Seguridad visual sólida',
    description: 'Un estilo sobrio con confianza y comunicación clara para usuarios premium.',
    icon: ShieldCheck,
    accent: 'from-cyan-300 to-blue-500',
  },
  {
    title: 'Arquitectura moderna',
    description: 'Componentes reutilizables y código limpio desde la base.',
    icon: Cpu,
    accent: 'from-emerald-400 to-teal-500',
  },
]

export default function FeatureCards() {
  return (
    <section className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <motion.article key={card.title} whileHover={{ y: -8 }} className="glass-panel rounded-[2rem] p-7 transition">
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${card.accent} text-slate-950 shadow-glow`}>
              <card.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-slate-300">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
