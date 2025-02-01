import "./globals.css"
import { Montserrat, Playfair_Display } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Import React

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: " Doctor Clinic",
  description: "Exclusive medical care for discerning patients",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

