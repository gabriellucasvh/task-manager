import { CheckCircle, Users, BarChart2, Calendar } from 'lucide-react'

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
    title: 'Gerenciamento de Tarefas',
    description: 'Crie, organize e acompanhe suas tarefas com facilidade.'
  },
  {
    icon: <Users className="h-8 w-8 text-teal-500" />,
    title: 'Colaboração em Equipe',
    description: 'Trabalhe em conjunto com sua equipe em tempo real.'
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-teal-500" />,
    title: 'Relatórios e Análises',
    description: 'Obtenha insights valiosos sobre sua produtividade.'
  },
  {
    icon: <Calendar className="h-8 w-8 text-teal-500" />,
    title: 'Integração de Calendário',
    description: 'Sincronize suas tarefas com seu calendário favorito.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

