import { Leaf, Instagram, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

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
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary-foreground" />
              <span className="font-serif text-xl font-bold">Forestagro</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Soluciones integrales forestales y agronómicas. Ingeniería experta al servicio de la naturaleza y la producción.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/forestagro_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@forestagro.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
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
