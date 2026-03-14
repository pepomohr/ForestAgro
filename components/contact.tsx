"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
          <Card className="bg-card shadow-sm">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" style={{ fontFamily: dmSans }}>Nombre</Label>
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
                  <Label htmlFor="email" style={{ fontFamily: dmSans }}>Email</Label>
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
                  <Label htmlFor="subject" style={{ fontFamily: dmSans }}>Asunto</Label>
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
                  <Label htmlFor="message" style={{ fontFamily: dmSans }}>Mensaje</Label>
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
  <Card className="bg-card shadow-sm h-full">
    <CardContent className="p-6 lg:p-8 space-y-8">
      <h3 
        className="text-2xl font-bold text-card-foreground"
        style={{ fontFamily: poppins }}
      >
        Información de Contacto
      </h3>
      
      <div className="space-y-8">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Email</p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:forestagro.contacto@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: dmSans }}
              >
                forestagro.contacto@gmail.com
              </a>
              {/* Botón Circular Estilo Footer - Gmail */}
              <a 
                href="mailto:forestagro.contacto@gmail.com"
                className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#EA4335] group shadow-sm"
              >
                <Image 
                  src="/images/gmail.svg" 
                  alt="Gmail" 
                  width={20} 
                  height={20} 
                  className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Ingeniero Forestal */}
<div className="flex items-start gap-4 pt-2">
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
    <Phone className="w-6 h-6 text-primary" />
  </div>
  <div className="space-y-1">
    <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniero Forestal</p>
    <div className="flex items-center gap-4">
      <a href="tel:+5492216234600" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: dmSans }}>
        +54 9 2216 23-4600
      </a>
      {/* Botón Circular WhatsApp */}
      <a 
        href="https://wa.me/5492216234600" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shadow-sm"
        // PASAMOS LA LÓGICA AL PADRE
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'brightness(0) invert(1)';
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'none';
        }}
      >
        <Image 
          src="/images/whatsapp.svg" 
          alt="WhatsApp" 
          width={20} 
          height={20} 
          className="transition-all duration-300 group-hover:scale-110" 
          style={{ filter: 'none' }}
        />
      </a>
    </div>
  </div>
</div>

{/* Ingeniera Agrónoma */}
<div className="flex items-start gap-4 pt-2">
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
    <Phone className="w-6 h-6 text-primary" />
  </div>
  <div className="space-y-1">
    <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniera Agrónoma</p>
    <div className="flex items-center gap-4">
      <a href="tel:+5492223676180" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: dmSans }}>
        +54 9 2223 67-6180
      </a>
      {/* Botón Circular WhatsApp */}
      <a 
        href="https://wa.me/5492223676180" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shadow-sm"
        // PASAMOS LA LÓGICA AL PADRE
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'brightness(0) invert(1)';
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'none';
        }}
      >
        <Image 
          src="/images/whatsapp.svg" 
          alt="WhatsApp" 
          width={20} 
          height={20} 
          className="transition-all duration-300 group-hover:scale-110" 
          style={{ filter: 'none' }}
        />
      </a>
    </div>
  </div>
</div>

        {/* Ubicación */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Ubicación</p>
            <p className="text-muted-foreground" style={{ fontFamily: dmSans }}>Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
        </div>
      </div>
    </section>
  )
}