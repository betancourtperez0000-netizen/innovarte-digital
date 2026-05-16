import { motion } from 'framer-motion'
import { ArrowRight, Layers, Shield, Zap } from 'lucide-react'
import PremiumButton from './PremiumButton'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-12 lg:p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79, 70, 229,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(34, 211, 238,0.16),transparent_28%)]" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
            <Zap className="h-4 w-4" />
            Innovarte Digital: avanzando hacia un futuro con IA
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              innovarte-digital avanzando hacia un futuro con la AI
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Conectamos diseño premium y tecnología inteligente para que tu presencia digital comunique estrategia, confianza y alto valor desde el primer impacto.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <PremiumButton href="#mision" label="Ver misión" />
            <a href="https://wa.me/573003901045" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              Contacta ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: '180+', label: 'Lanzamientos' },
              { value: '9.8/10', label: 'Satisfacción' },
              { value: '100%', label: 'Optimización móvil' },
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl px-5 py-6 text-center">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-soft sm:p-8">
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/20 to-transparent" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Misión y visión</p>
                <p className="mt-1 text-base font-semibold text-white">Construir comunidades digitales con propósito</p>
              </div>
              <Layers className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-soft">
              <p className="text-slate-300 leading-7">
                Desarrollar e implementar plataformas tecnológicas inclusivas y espacios de formación colaborativos que permitan a las comunidades de El Pozón, Daniel Lemaitre y Ceballos expresarse, conectarse y construir soluciones a sus problemáticas sociales a través del arte digital, fortaleciendo su identidad cultural y fomentando el empoderamiento comunitario.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Shield, title: 'Seguridad de nivel empresarial' },
                { icon: Shield, title: 'Escala sin complicaciones' },
              ].map((item) => (
                <div key={item.title} className="glass-panel rounded-3xl p-5">
                  <item.icon className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
