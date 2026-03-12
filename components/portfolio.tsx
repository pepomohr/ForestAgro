"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Gestión Forestal",
    images: ["/images/forestal-1.webp", "/images/forestal-2.webp", "/images/forestal-3.webp"],
    alt: "Consultoría forestal en bosque nativo",
  },
  {
    title: "Producción Agropecuaria",
    images: ["/images/agropecuaria-1.webp", "/images/agropecuaria-2.webp", "/images/agropecuaria-3.webp", "/images/agropecuaria-4.webp" ],
    alt: "Asesoramiento en campos de cultivo",
  },
  {
    title: "Poda Técnica",
    images: ["/images/poda-1.webp", "/images/poda-2.webp"],
    alt: "Trabajo de poda profesional",
  },
  {
    title: "Paisajismo",
    images: ["/images/paisajismo-1.webp", "/images/paisajismo-2.webp"],
    alt: "Diseño de jardín sostenible",
  },
  {
    title: "Análisis de Suelo y Agua",
    images: ["/images/analisis-1.webp", "/images/analisis-2.webp"],
    alt: "Análisis de propiedades del suelo y agua",
  },
  {
    title: "Sistemas Fruticolas",
    images: ["/images/sistemas-1.webp", "/images/sistemas-2.webp"],
    alt: "Sistemas de cultivo frutícola",
  },
]

// Componente para la tarjeta individual con carrusel
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Variables de fuente
  const poppins = "var(--font-poppins), sans-serif"

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [project.images.length])

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
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
      </div>
      
      {/* Overlay con Título */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 
            className="text-xl font-bold text-white"
            style={{ fontFamily: poppins }} // Poppins para el título del proyecto
          >
            {project.title}
          </h3>
          {/* Indicadores de bolitas */}
          <div className="flex gap-1 mt-2">
            {project.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all ${i === currentIndex ? "w-4 bg-primary" : "w-1 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  // Variables de fuente
  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-medium text-primary uppercase tracking-wider"
            style={{ fontFamily: dmSans }}
          >
            Galería
          </span>
          <h2 
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: poppins }} // Poppins para el título de sección
          >
            Nuestros Trabajos
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: dmSans }} // DM Sans para la descripción
          >
            Una muestra de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}