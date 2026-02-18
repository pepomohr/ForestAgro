const projects = [
  {
    src: "/images/project-1.jpg",
    alt: "Consultoría forestal en bosque nativo",
    title: "Gestión Forestal",
  },
  {
    src: "/images/project-2.jpg",
    alt: "Asesoramiento en campos de cultivo",
    title: "Producción Agrícola",
  },
  {
    src: "/images/project-3.jpg",
    alt: "Trabajo de poda profesional",
    title: "Poda Técnica",
  },
  {
    src: "/images/project-4.jpg",
    alt: "Diseño de jardín sostenible",
    title: "Paisajismo",
  },
  {
    src: "/images/project-5.jpg",
    alt: "Valuación de propiedad rural",
    title: "Valuación de Tierras",
  },
  {
    src: "/images/project-6.jpg",
    alt: "Relevamientos Floristicos e Inventarios",
    title: "Relevamientos Floristicos e Inventarios",
  },
]

export function Portfolio() {
  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Galería</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nuestros Trabajos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Una muestra de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
