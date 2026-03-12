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
import Image from "next/image"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Variables de fuente
  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

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
          <span 
            className="text-sm font-medium text-primary uppercase tracking-wider"
            style={{ fontFamily: dmSans }}
          >
            Hablemos
          </span>
          <h2 
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: poppins }}
          >
            Contacto
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: dmSans }}
          >
            Estamos acá para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulario de contacto */}
          <Card className="bg-card">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground" style={{ fontFamily: dmSans }}>Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground" style={{ fontFamily: dmSans }}>Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-card-foreground" style={{ fontFamily: dmSans }}>Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground" style={{ fontFamily: dmSans }}>Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Contanos sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-input resize-none"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base font-semibold"
                  style={{ fontFamily: poppins }}
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="p-6 lg:p-8 space-y-6">
                <h3 
                  className="text-xl font-bold text-card-foreground"
                  style={{ fontFamily: poppins }}
                >
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground" style={{ fontFamily: dmSans }}>Email</p>
                      <a 
                        href="mailto:forestagro.contacto@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        style={{ fontFamily: dmSans }}
                      >
                        forestagro.contacto@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Teléfonos */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniero Forestal</p>
                        <a 
                          href="tel:+5492216234600" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          style={{ fontFamily: dmSans }}
                        >
                          +54 9 2216 23-4600
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniera Agrónoma</p>
                        <a 
                          href="tel:+5492223676180" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          style={{ fontFamily: dmSans }}
                        >
                          +54 9 2223 67-6180
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground" style={{ fontFamily: dmSans }}>Ubicación</p>
                      <p className="text-muted-foreground" style={{ fontFamily: dmSans }}>Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="object-contain brightness-0 invert"
                />
                <span className="font-bold text-lg" style={{ fontFamily: poppins }}>WhatsApp</span>
              </a>

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
                  className="object-contain brightness-0 invert"
                />
                <span className="font-bold text-lg" style={{ fontFamily: poppins }}>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}