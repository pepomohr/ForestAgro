import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" // Importamos el componente optimizado

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo-hero.webp" // Tu nueva imagen
          alt="Paisaje forestal y agrícola"
          fill // Para que ocupe todo el fondo
          className="object-cover" // Para que no se deforme
          priority // Para que cargue al toque apenas entran a la web
          quality={90}
        />
        {/* Capa oscura para que el texto resalte bien */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
          Soluciones Integrales Forestales y Agronómicas
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
          Ingeniería experta al servicio de la naturaleza y la producción
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="text-base px-8 py-6">
            <Link href="#contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}