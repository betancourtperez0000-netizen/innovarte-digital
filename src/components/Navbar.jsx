import { motion } from 'framer-motion'
import { ArrowRight, Menu, Sparkles } from 'lucide-react'

const links = ['Características', 'Beneficios', 'Showcase', 'FAQ']

export default function Navbar() {
  return (
    <motion.header initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3 text-base font-semibold text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          Innovarte
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/573003901045" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10 md:inline-flex">
            Contacto
          </a>
          <button className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <span>Agenda demo</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
