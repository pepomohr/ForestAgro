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
      // 1. Empezamos el desvanecimiento (Fade Out)
      setIsTransitioning(true)
      
      const timeout = setTimeout(() => {
        // 2. Cambiamos el contenido mientras el texto es invisible
        setActiveCard((prev) => (prev === team.length - 1 ? 0 : prev + 1))
        setProgress(0)
        
        // 3. Volvemos a mostrar (Fade In) después de un breve delay
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50) 
      }, 800) // Duración de la salida
      
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <section id="nosotros" className="py-8 lg:py-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6 lg:mb-10">
          <span className="text-xs font-medium text-primary uppercase tracking-wider" style={{ fontFamily: dmSans }}>
            Sobre Nosotros
          </span>
          <h2 className="mt-1 text-2xl lg:text-4xl font-bold text-foreground" style={{ fontFamily: poppins }}>
            Quiénes Somos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          <div className="relative h-64 sm:h-80 lg:h-[500px] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-muted">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeCard ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            {/* EFECTO FADE IN / OUT: Suave y con ligero movimiento vertical */}
            <div className={`transition-all duration-1000 ease-in-out ${
              isTransitioning 
                ? "opacity-0 translate-y-2 blur-sm" 
                : "opacity-100 translate-y-0 blur-0"
            }`}>
              <h3 className="text-xl lg:text-3xl font-bold text-primary mb-2 lg:mb-4" style={{ fontFamily: poppins }}>
                {team[activeCard].role}
              </h3>
              
              <p className="text-base lg:text-lg leading-relaxed text-foreground/80" style={{ fontFamily: dmSans }}>
                {team[activeCard].description}
              </p>
            </div>

            <div className="flex gap-2 mt-6">
              {team.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === activeCard ? "w-10 bg-primary/20" : "w-4 bg-muted/30"}`}>
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