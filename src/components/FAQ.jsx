import { Plus } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es InnovArte Digital?',
    answer:
      'InnovArte Digital es una plataforma web interactiva diseñada para fortalecer la expresión artística digital y promover la inclusión comunitaria mediante el uso de herramientas tecnológicas.',
  },
  {
    question: '¿Qué tipo de contenido se puede publicar?',
    answer:
      'Los usuarios pueden compartir ilustraciones digitales, fotografías, diseños gráficos, obras artísticas y contenido cultural y creativo.',
  },
  {
    question: '¿Cómo puedo enviar sugerencias o participar?',
    answer:
      'Los usuarios pueden utilizar el formulario de contacto y sugerencias disponible en la página para compartir ideas o participar en las actividades.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Preguntas frecuentes</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Respuestas claras para usuarios</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((item, index) => (
          <details key={item.question} className="glass-panel rounded-[1.75rem] p-6" open={index === 0}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
              {item.question}
              <Plus className="h-5 w-5 text-cyan-300" />
            </summary>
            <p className="mt-4 text-slate-300 leading-7">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
