import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gerencie suas tarefas com eficiência</h1>
        <p className="text-xl mb-8">Aumente sua produtividade com nossa plataforma intuitiva de gestão de tarefas</p>
        <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3">
          Experimente Grátis
        </Button>
      </div>
    </section>
  )
}

