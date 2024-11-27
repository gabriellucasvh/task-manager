import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 29',
    features: [
      'Até 10 projetos',
      'Colaboração limitada',
      'Relatórios básicos',
      'Suporte por email'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 59',
    features: [
      'Projetos ilimitados',
      'Colaboração ilimitada',
      'Relatórios avançados',
      'Suporte prioritário',
      'Integração de calendário'
    ]
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    features: [
      'Tudo do plano Pro',
      'Recursos personalizados',
      'Gerenciador de conta dedicado',
      'SLA garantido'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-44">
        <h2 className="text-3xl font-bold text-center mb-12">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/mês</span></p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Escolher Plano</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

