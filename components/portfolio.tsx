"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Gestión Forestal",
    images: ["/images/forestal-1.webp", "/images/forestal-2.webp", "/images/forestal-3.webp", "/images/forestal-4.webp"],
    alt: "Consultoría forestal en bosque nativo",
  },
  {
    title: "Producción Agropecuaria",
    images: ["/images/agropecuaria-1.webp", "/images/agropecuaria-2.webp", "/images/agropecuaria-3.webp", "/images/agropecuaria-4.webp" ],
    alt: "Asesoramiento en campos de cultivo",
  },
  {
    title: "Poda Técnica",
    images: ["/images/poda-1.webp", "/images/poda-2.webp", "/images/poda-3.webp", "/images/poda-4.webp"],
    alt: "Trabajo de poda profesional",
  },
  {
    title: "Paisajismo",
    images: ["/images/paisajismo-1.webp", "/images/paisajismo-2.webp", "/images/paisajismo-3.webp", "/images/paisajismo-4.webp"],
    alt: "Diseño de jardín sostenible",
  },
  {
    title: "Análisis de Suelo y Agua",
    images: ["/images/analisis-1.webp", "/images/analisis-2.webp", "/images/analisis-3.webp", "/images/analisis-4.webp"],
    alt: "Análisis de propiedades del suelo y agua",
  },
  {
    title: "Sistemas Fruticolas",
    images: ["/images/sistemas-1.webp", "/images/sistemas-2.webp", "/images/sistemas-3.webp", "/images/sistemas-4.webp"],
    alt: "Sistemas de cultivo frutícola",
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const poppins = "var(--font-poppins), sans-serif"

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [project.images.length])

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md bg-card transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-[4/3] relative overflow-hidden">
        {project.images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={project.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}

        {/* FLECHAS MANUALES VISIBLES EN MÓVIL */}
        <button 
          onClick={(e) => { e.preventDefault(); handlePrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-all hover:bg-black/70 z-30 shadow-lg"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); handleNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-all hover:bg-black/70 z-30 shadow-lg"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: poppins }}>
            {project.title}
          </h3>
          <div className="flex gap-1.5 mt-3">
            {project.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" style={{ fontFamily: dmSans }}>
            Galería
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: poppins }}>
            Nuestros Trabajos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: dmSans }}>
            Una muestra de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}