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
  description: "Consultoría profesional en General Belgrano liderada por el Ing. Mariano H. Clausi y la Ing. Sabrina Alcat. Gestión de bosques y agroecología.",
  keywords: ["Ingeniería Forestal", "Agronomía", "General Belgrano", "Mariano Clausi", "Sabrina Alcat", "Forestagro"],
  authors: [{ name: "Mariano H. Clausi" }, { name: "Sabrina Alcat" }],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png", // Esto es para que el acceso directo en iPhone tenga el logo
  },
  openGraph: {
    title: "Forestagro | Ingeniería Forestal y Agronómica",
    description: "Soluciones profesionales para el sector agroforestal lideradas por el Ing. Mariano H. Clausi y la Ing. Sabrina Alcat.",
    url: "https://www.forestagro.com.ar",
    siteName: "Forestagro",
    images: [
      {
        url: "/images/og-image.png", 
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
          defaultTheme="system" // Ahora sí va a respetar el modo de tu PC
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}