import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// Importamos Apple para el nuevo servicio
import { TreePine, Sprout, Scissors, MapPin, Flower2, Apple } from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Consultoría Forestal",
    description: "Asesoramiento experto en gestión de bosques, inventarios forestales, planes de manejo y certificaciones ambientales.",
  },
  {
    icon: Sprout,
    title: "Asesoramiento Agronómico",
    description: "Optimización de cultivos, manejo integrado de plagas, fertilización y sistemas de riego para maximizar su producción.",
  },
  {
    icon: Apple, // Nuevo servicio
    title: "Producción Frutícola",
    description: "Planificación y manejo técnico de frutales, selección de variedades, control de sanidad y mejora del rendimiento de cosecha.",
  },
  {
    icon: Scissors,
    title: "Poda y Mantenimiento",
    description: "Servicios profesionales de poda, tratamiento fitosanitario y mantenimiento preventivo de árboles y espacios verdes.",
  },
  {
    icon: MapPin,
    title: "Análisis de Suelo y Agua",
    description: "Análisis fisico-quimico y caracterización, diagnóstico y recomendaciones de manejo.",
  },
  {
    icon: Flower2,
    title: "Diseño de Paisajes",
    description: "Creación de espacios verdes funcionales y estéticos, selección de especies nativas y planificación de jardines sostenibles.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Lo que hacemos</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones profesionales adaptadas a las necesidades de cada proyecto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 bg-card border-none">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}