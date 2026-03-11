import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand - Logo de la empresa */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logoforestagro.svg" 
                alt="Logo Forestagro" 
                width={32} 
                height={32} 
                className="brightness-0 invert" 
              />
              <span className="font-serif text-xl font-bold">Forestagro</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Soluciones integrales forestales y agronómicas. Ingeniería experta al servicio de la naturaleza y la producción.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales con logos originales */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-[#25D366] flex items-center justify-center transition-all group"
                aria-label="WhatsApp"
              >
                <Image 
                  src="/images/whatsapp.svg" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                  className="group-hover:brightness-0 group-hover:invert" 
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/forestagro_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Image 
                  src="/images/instagram.svg" 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                  className="group-hover:brightness-0 group-hover:invert"
                />
              </a>

              {/* Gmail (Usando tu nuevo SVG) */}
              <a
                href="mailto:contacto@forestagro.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-[#EA4335] flex items-center justify-center transition-all group"
                aria-label="Email"
              >
                <Image 
                  src="/images/gmail.svg" 
                  alt="Gmail" 
                  width={20} 
                  height={20} 
                  className="group-hover:brightness-0 group-hover:invert"
                />
              </a>
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Forestagro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}