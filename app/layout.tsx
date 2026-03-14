import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Forestagro | Ingeniería Forestal y Agronómica",
  description: "Consultoría profesional en General Belgrano. Especialistas en gestión de bosques, producción frutícola y soluciones agroecológicas sostenibles.",
  keywords: ["Ingeniería Forestal", "Agronomía", "General Belgrano", "Gestión de Bosques", "Forestagro", "David Mohr"],
  authors: [{ name: "David Mohr" }],
  icons: {
    icon: "/images/favicon.png", // Chequeá que la ruta sea exacta dentro de /public
  },
  // Esto es para que en redes sociales y WhatsApp se vea pro
  openGraph: {
    title: "Forestagro | Ingeniería Forestal y Agronómica",
    description: "Soluciones profesionales para el sector agroforestal lideradas por el Ing. David Mohr.",
    url: "https://www.forestagro.com.ar", // Poné acá la URL definitiva cuando la tengas
    siteName: "Forestagro",
    images: [
      {
        url: "/og-image.png", // Te recomiendo crear una imagen de 1200x630px y ponerla en /public
        width: 1200,
        height: 630,
        alt: "Logo Forestagro",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
          * {
            transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out !important;
          }
        `}</style>
      </head>
      <body className={`${dmSans.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}