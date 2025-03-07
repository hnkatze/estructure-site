import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Estructuras de Datos - Visualización",
  description: "Visualización interactiva de estructuras de datos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header
          name="Hector Camilo Henriquez"
          accountNumber="41611213"
          className=" ESTRUCTURA DE DATOS"
          section="67"
        />
        <main className="flex-1">{children}</main>
        <Footer
          name="Hector Camilo Henriquez"
          email="henriquezhector1@hotmail.com"
          github="/hnkatze"
          linkedin="https://www.linkedin.com/in/hnkatze/"
        />
        <Toaster />
      </body>
    </html>
  )
}

