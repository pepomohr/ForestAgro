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

  // Definimos las variables de fuente para usarlas fácil en el style
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
      const timeout = setTimeout(() => {
        setIsTransitioning(true)
        
        setTimeout(() => {
          setActiveCard((prev) => (prev === team.length - 1 ? 0 : prev + 1))
          setProgress(0)
          setIsTransitioning(false)
        }, 800)

      }, 4000)
      
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span 
            className="text-sm font-medium text-primary uppercase tracking-wider"
            style={{ fontFamily: dmSans }} // DM Sans para el label
          >
            Sobre Nosotros
          </span>
          <h2 
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
            style={{ fontFamily: poppins }} // Poppins para el H2
          >
            Quiénes Somos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-muted">
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
                  className="object-cover"
                  priority
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>

          <div className="flex flex-col justify-center min-h-[350px]">
            <div className={`transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <h3 
                className="text-3xl lg:text-4xl font-bold text-primary mb-6"
                style={{ fontFamily: poppins }} // Poppins para el nombre/rol
              >
                {team[activeCard].role}
              </h3>
              
              <div className="relative">
                <p 
                  className="text-xl lg:text-2xl leading-relaxed"
                  style={{
                    fontFamily: dmSans, // DM Sans para el cuerpo
                    color: 'rgba(0, 0, 0, 0.15)', 
                    backgroundImage: `linear-gradient(to right, #166534 ${progress}%, transparent ${progress}%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline'
                  }}
                >
                  {team[activeCard].description}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-10">
              {team.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeCard ? "w-16 bg-primary" : "w-6 bg-muted/30"
                  }`} 
                >
                  {i === activeCard && (
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${progress}%`, transition: 'width 40ms linear' }}
                    />
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