import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Expresión artística digital para comunidades',
  'Inclusión comunitaria con tecnología innovadora',
  'Espacios de formación y colaboración cultural',
]

export default function InfoSection() {
  return (
    <section id="mision" className="space-y-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">¿Qué desarrollamos?</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Una plataforma web interactiva para la expresión artística comunitaria.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            InnovArte Digital es una plataforma web interactiva creada para fortalecer la expresión artística digital y promover la inclusión comunitaria mediante el uso de tecnologías innovadoras.
          </p>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Nuestro proyecto busca brindar un espacio donde las comunidades puedan compartir sus talentos, experiencias y expresiones culturales a través del arte digital.
          </p>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-7 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Esto es lo que entregamos</p>
            <div className="mt-6 space-y-5 text-slate-200">
              <div>
                <p className="text-lg font-semibold">🎨 Galería Virtual</p>
                <p className="mt-2 text-slate-300">Exhibición de arte y cultura digital.</p>
              </div>
              <div>
                <p className="text-lg font-semibold">📚 Capacitaciones</p>
                <p className="mt-2 text-slate-300">Aprendizaje en herramientas tecnológicas.</p>
              </div>
              <div>
                <p className="text-lg font-semibold">🚀 Innovación</p>
                <p className="mt-2 text-slate-300">Uso de tecnología para transformación social.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-white/6 bg-white/3 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Características</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-slate-200">Performance ultra rápida</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-slate-200">Diseño responsive total</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-slate-200">Seguridad visual sólida</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-slate-200">Arquitectura moderna</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Galería virtual</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Publica y comparte tu creatividad</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Creamos un espacio donde los usuarios pueden publicar y compartir ilustraciones digitales, fotografías, diseños gráficos, arte creativo y contenido cultural.
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Capacitaciones digitales</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Aprende y crece con nuevas habilidades</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Diseño gráfico</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Ilustración digital</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Herramientas tecnológicas</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Uso de plataformas digitales</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Creación de contenido multimedia</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Espacios colaborativos</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Crear comunidad y diálogo constante</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Fomentamos la interacción mediante foros comunitarios, eventos virtuales, intercambio de experiencias, actividades culturales y redes de artistas digitales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
