import { ArrowUpRight, ImageIcon, MonitorSmartphone, Sparkles, Users } from 'lucide-react'

const gallery = [
  { title: 'Galería virtual', subtitle: 'Ilustraciones digitales, fotografías y arte cultural.', icon: ImageIcon },
  { title: 'Capacitaciones', subtitle: 'Diseño gráfico, ilustración digital y creación multimedia.', icon: Sparkles },
  { title: 'Comunidades participantes', subtitle: 'El Pozón, Daniel Lemaitre, Ceballos y Manzanillo.', icon: Users },
]

export default function Showcase() {
  return (
    <section id="showcase" className="space-y-10">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Comunidades participativas</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Un espacio digital construido por comunidades creativas.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          Nuestro proyecto conecta talento local y expresiones culturales para construir una plataforma de arte digital abierta, inclusiva y colaborativa.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {gallery.map((item) => (
          <div key={item.title} className="glass-panel rounded-[2rem] p-7">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-400 text-slate-950 shadow-glow">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.subtitle}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Explorar <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
