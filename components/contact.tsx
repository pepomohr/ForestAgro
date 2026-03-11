"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Importamos Image para los logos originales

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Hablemos</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-card">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-card-foreground">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-input resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="p-6 lg:p-8 space-y-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <a href="mailto:contacto@forestagro.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contacto@forestagro.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Teléfono</p>
                      <a href="tel:+5491123456789" className="text-muted-foreground hover:text-primary transition-colors">
                        +54 9 11 2345-6789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Ubicación</p>
                      <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* WhatsApp */}
  <a
    href="https://wa.me/5491123456789"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 p-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors shadow-sm"
  >
    <Image 
      src="/images/whatsapp.svg" 
      alt="WhatsApp" 
      width={32} 
      height={32} 
      className="object-contain brightness-0 invert" // <--- Esto lo pone blanco
    />
    <span className="font-bold text-lg">WhatsApp</span>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/forestagro_"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-lg transition-opacity shadow-sm"
  >
    <Image 
      src="/images/instagram.svg" 
      alt="Instagram" 
      width={32} 
      height={32} 
      className="object-contain brightness-0 invert" // <--- Esto lo pone blanco
    />
    <span className="font-bold text-lg">Instagram</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}