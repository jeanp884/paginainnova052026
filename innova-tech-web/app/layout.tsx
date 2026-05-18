import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Innova Tech - Soluciones en Ingeniería Eléctrica',
  description: 'Especialistas en subestaciones, instalaciones de fuerza y mantenimiento especializado para sectores comercial, industrial y utilities.',
  openGraph: {
    title: 'Innova Tech - Soluciones en Ingeniería Eléctrica',
    description: 'Soluciones integrales en ingeniería eléctrica para comercial, industrial y utilities',
    url: 'https://innova-tech.com',
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
