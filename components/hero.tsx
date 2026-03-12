import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo-hero.webp"
          alt="Paisaje forestal y agrícola"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Forzamos Poppins con la variable CSS directamente */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          Soluciones Integrales Forestales y Agronómicas
        </h1>
        
        {/* Forzamos DM Sans con la variable CSS */}
        <p 
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          Ingeniería experta al servicio de la naturaleza y la producción
        </p>

        <div className="mt-10">
          <Button asChild size="lg" className="text-base px-8 py-6" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
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