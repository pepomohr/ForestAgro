"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react" // Agregué Loader2 para el botón
import Image from "next/image"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const poppins = "var(--font-poppins), sans-serif"
  const dmSans = "var(--font-dm-sans), sans-serif"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Adaptamos los nombres a los que espera nuestra ruta API
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          asunto: formData.subject,
          mensaje: formData.message,
        }),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" }) // Limpiamos el form
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status === "success" || status === "error") setStatus("idle")
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" style={{ fontFamily: dmSans }}>
            Hablemos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: poppins }}>
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: dmSans }}>
            Estamos acá para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
                  disabled={status === "loading"}
                  style={{ fontFamily: poppins }}
                >
                  {status === "loading" ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</>
                  ) : status === "success" ? (
                    "¡Mensaje Enviado!"
                  ) : (
                    "Enviar Mensaje"
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Ocurrió un error. Intentá de nuevo.</p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card shadow-sm h-full">
              <CardContent className="p-6 lg:p-8 space-y-8">
                <h3 className="text-2xl font-bold text-card-foreground" style={{ fontFamily: poppins }}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Email</p>
                      <div className="flex items-center gap-4">
                        <a href="mailto:forestagro.contacto@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: dmSans }}>
                          forestagro.contacto@gmail.com
                        </a>
                        <a href="mailto:forestagro.contacto@gmail.com" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#EA4335] group shadow-sm">
                          <Image src="/images/gmail.svg" alt="Gmail" width={20} height={20} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniero Forestal</p>
                      <div className="flex items-center gap-4">
                        <a href="tel:+5492216234600" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: dmSans }}>+54 9 2216 23-4600</a>
                        <a href="https://wa.me/5492216234600" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shadow-sm">
                          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground" style={{ fontFamily: dmSans }}>Ingeniera Agrónoma</p>
                      <div className="flex items-center gap-4">
                        <a href="tel:+5492223676180" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: dmSans }}>+54 9 2223 67-6180</a>
                        <a href="https://wa.me/5492223676180" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shadow-sm">
                          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

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