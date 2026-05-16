import { Mail, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Creando futuro con tecnología y cultura.
            </div>
            <p className="text-2xl font-semibold text-white sm:text-3xl">
              Lleva tu lanzamiento al siguiente nivel con diseño moderno y experiencia fluida.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-slate-200 sm:p-8">
            <div className="flex items-center gap-4 text-slate-100">
              <Mail className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Listo para comenzar?</p>
                <p className="mt-1 text-base font-semibold text-white">Escríbenos y definimos tu propuesta.</p>
              </div>
            </div>
            <a href="https://wa.me/573003901045" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              WhatsApp: +57 300 390 1045
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Innovarte Digital. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#home" className="transition hover:text-white">Inicio</a>
            <a href="#features" className="transition hover:text-white">Características</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
