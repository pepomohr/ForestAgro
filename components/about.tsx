"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const team = [
  {
    role: "Ingeniero Forestal",
    description: "Con más de una década de experiencia en gestión forestal sostenible, lidera proyectos de conservación, manejo de bosques y evaluación de recursos naturales. Su expertise abarca desde la planificación de plantaciones hasta prácticas que maximizan el valor ecológico y económico.",
    image: "/images/ingeniero-forestal.webp",
  },
  {
    role: "Ingeniera Agrónoma",
    description: "Especializada en producción con enfoque agroecológico, aporta conocimientos en manejo de cultivos, especies acompañantes y ganadería. Su enfoque combina técnicas tradicionales con innovación para lograr resultados respetando siempre el medio ambiente.",
    image: "/images/ingeniera-agronoma.webp",
  },
  {
    role: "Equipo Forestagro",
    description: "Juntos, formamos un equipo multidisciplinario que ofrece soluciones integrales para proyectos que requieren la sinergia entre el manejo forestal y la producción agropecuaria. Nuestra misión es transformar cada proyecto en un modelo de sostenibilidad.",
    image: "/images/equipo-juntos.webp",
  }
]

export function About() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

  useEffect(() => {
    if (isTransitioning) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 0.4
      })
    }, 40)
    return () => clearInterval(timer)
  }, [activeCard, isTransitioning])

  useEffect(() => {
    if (progress >= 100) {
      setIsTransitioning(true)
      const timeout = setTimeout(() => {
        setActiveCard((prev) => (prev === team.length - 1 ? 0 : prev + 1))
        setProgress(0)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50) 
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <section id="nosotros" className="py-12 lg:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 lg:mb-12">
          <span className="text-xs font-medium text-primary uppercase tracking-wider" style={{ fontFamily: dmSans }}>
            Sobre Nosotros
          </span>
          <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: poppins }}>
            Quiénes Somos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* AJUSTE CLAVE: Contenedor con aspect-ratio vertical para evitar cortes */}
          <div className="relative w-full max-w-[450px] mx-auto aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-muted">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === activeCard ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover object-top sm:object-center" // 'object-top' en celu ayuda a que no se corte el sombrero
                  priority
                />
                {/* Overlay suave para que el texto resalte si fuera necesario */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className={`transition-all duration-1000 ease-in-out ${
              isTransitioning 
                ? "opacity-0 translate-y-4 blur-sm" 
                : "opacity-100 translate-y-0 blur-0"
            }`}>
              <h3 className="text-2xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: poppins }}>
                {team[activeCard].role}
              </h3>
              
              <p className="text-base lg:text-xl leading-relaxed text-muted-foreground" style={{ fontFamily: dmSans }}>
                {team[activeCard].description}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 mt-10">
              {team.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeCard ? "w-12 bg-primary/20" : "w-6 bg-muted"}`}>
                  {i === activeCard && (
                    <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}