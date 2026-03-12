"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita errores de hidratación esperando a que el componente esté montado
  useEffect(() => {
    setMounted(true)
  }, [])

  // Variables de fuente
  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logoforestagro.svg" 
              alt="Logo" 
              width={300}
              height={100} 
              className="h-20 w-auto object-contain dark:brightness-0 dark:invert" 
              priority
            />
            <span 
              className="text-xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: poppins }}
            >
              FORESTAGRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: dmSans }}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 border-l pl-6 border-border">
              {/* BOTÓN SOL/LUNA */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-muted-foreground"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 transition-all" />
                  ) : (
                    <Moon className="h-5 w-5 transition-all" />
                  )}
                  <span className="sr-only">Cambiar tema</span>
                </Button>
              )}

              <Button asChild style={{ fontFamily: poppins }}>
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                style={{ fontFamily: dmSans }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4" style={{ fontFamily: poppins }}>
              <Link href="#contacto" onClick={() => setIsOpen(false)}>Contactar</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}