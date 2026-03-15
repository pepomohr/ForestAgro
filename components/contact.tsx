"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
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
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          asunto: formData.subject,
          mensaje: formData.message,
        }),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
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
    <section id="contacto" className="py-12 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" style={{ fontFamily: dmSans }}>
            Hablemos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: poppins }}>
            Contacto
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: dmSans }}>
            Estamos acá para ayudarte con tu próximo proyecto
          </p>
        </div>

        {/* Cambié a grid-cols-1 para mobile y lg:grid-cols-2 para PC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          
          <Card className="bg-card shadow-sm border-none sm:border">
            <CardContent className="p-5 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" style={{ fontFamily: dmSans }}>Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input text-base" // text-base evita zoom en iOS
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
                    className="bg-input text-base"
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
                    className="bg-input text-base"
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
                    className="bg-input resize-none text-base"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base font-semibold py-6"
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
            <Card className="bg-card shadow-sm h-full border-none sm:border">
              <CardContent className="p-5 sm:p-8 space-y-8">
                <h3 className="text-xl lg:text-2xl font-bold text-card-foreground" style={{ fontFamily: poppins }}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-7">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <p className="font-bold text-card-foreground text-sm lg:text-base" style={{ fontFamily: dmSans }}>Email</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a href="mailto:forestagro.contacto@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base break-all" style={{ fontFamily: dmSans }}>
                          forestagro.contacto@gmail.com
                        </a>
                        <a href="mailto:forestagro.contacto@gmail.com" className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#EA4335] group shrink-0">
                          <Image src="/images/gmail.svg" alt="Gmail" width={18} height={18} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Ingeniero Forestal */}
                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground text-sm lg:text-base" style={{ fontFamily: dmSans }}>Ingeniero Forestal</p>
                      <div className="flex items-center gap-3">
                        <a href="tel:+5492216234600" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base" style={{ fontFamily: dmSans }}>+54 9 2216 23-4600</a>
                        <a href="https://wa.me/5492216234600?text=Hola%20Forestagro!%20Vi%20su%20web%20y%20quer%C3%ADa%20hacerles%20una%20consulta." target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shrink-0">
                          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Ingeniera Agrónoma */}
                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground text-sm lg:text-base" style={{ fontFamily: dmSans }}>Ingeniera Agrónoma</p>
                      <div className="flex items-center gap-3">
                        <a href="tel:+5492223676180" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base" style={{ fontFamily: dmSans }}>+54 9 2223 67-6180</a>
                        <a href="https://wa.me/5492223676180?text=Hola%20Forestagro!%20Vi%20su%20web%20y%20quer%C3%ADa%20hacerles%20una%20consulta." target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] group shrink-0">
                          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-card-foreground text-sm lg:text-base" style={{ fontFamily: dmSans }}>Ubicación</p>
                      <p className="text-muted-foreground text-sm lg:text-base" style={{ fontFamily: dmSans }}>Buenos Aires, Argentina</p>
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