import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Innova Tech - Soluciones en Energia Solar Fotovoltaica',
  description: 'Especialistas en diseño, instalación y mantenimiento de sistemas fotovoltaicos para residencial, comercial, industrial y agricultura.',
  openGraph: {
    title: 'Innova Tech - Soluciones en Energia Solar Fotovoltaica',
    description: 'Soluciones integrales en energía solar para residencial, comercial, industrial y agricultura',
    url: 'https://paginainnova052026.vercel.app',
    siteName: 'Innova Tech',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
