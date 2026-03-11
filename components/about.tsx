import { TreePine, Sprout } from "lucide-react"

export function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre Nosotros</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Quiénes Somos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Forestry Engineer */}
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <TreePine className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">Ingeniero Forestal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Con más de una década de experiencia en gestión forestal sostenible, nuestro ingeniero forestal lidera 
              proyectos de conservación, manejo de bosques y evaluación de recursos naturales. Su expertise abarca 
              desde la planificación de plantaciones hasta la implementación de prácticas silviculturales que 
              maximizan el valor ecológico y económico de los recursos forestales.
            </p>
          </div>

          {/* Agronomist */}
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
              <Sprout className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">Ingeniera Agrónoma</h3>
            <p className="text-muted-foreground leading-relaxed">
              Especializada en producción con un enfoque agroecológico, nuestra agrónoma aporta conocimientos en manejo de cultivos, especies acompañantes y ganadería. Su enfoque integral combina técnica tradicionales con innovación para lograr los mejores resultados manteniendo el respeto por el medio ambiente.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Juntos, formamos un equipo multidisciplinario que ofrece soluciones integrales para proyectos que 
            requieren la sinergia entre el manejo forestal y la producción agropecuaria. Nuestra misión es 
            transformar cada proyecto en un modelo de sostenibilidad y productividad.
          </p>
        </div>
      </div>
    </section>
  )
}
