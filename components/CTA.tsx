import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para aumentar sua produtividade?</h2>
        <p className="text-xl mb-8">Comece a usar o TaskMaster hoje e transforme a maneira como você gerencia suas tarefas.</p>
        <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3">
          Comece Agora
        </Button>
      </div>
    </section>
  )
}

