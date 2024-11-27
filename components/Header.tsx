import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-600">TaskMaster</Link>
        <div className="space-x-4">
          <Link href="#features" className="hidden md:inline text-gray-600 hover:text-teal-600">Recursos</Link>
          <Link href="#pricing" className="hidden md:inline text-gray-600 hover:text-teal-600">Preços</Link>
          <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white">
            Entrar
          </Button>
          <Button className="bg-teal-600 text-white hover:bg-teal-700">Começar</Button>
        </div>
      </nav>
    </header>
  )
}

