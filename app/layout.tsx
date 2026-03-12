import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-poppins' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* ESTO FUERZA LA TRANSICIÓN POR SOBRE TODO LO DEMÁS */}
        <style>{`
          * {
            transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out !important;
          }
        `}</style>
      </head>
      <body className={`${dmSans.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}