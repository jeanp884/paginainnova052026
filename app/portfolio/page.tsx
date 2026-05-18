'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'

interface Case {
  id: string
  title: string
  sector: 'comercial' | 'industrial' | 'utilities'
  service: 'subestaciones' | 'instalaciones' | 'mantenimiento'
  image: string
  description: string
  date: string
}

const cases: Case[] = [
  {
    id: 'caso-1',
    title: 'Casa Residencial 10 kW',
    sector: 'residencial',
    service: 'instalaciones',
    image: '/cases/residencial-casa.jpg',
    description: 'Sistema solar residencial de 10 kW con almacenamiento en baterias para independencia energetica',
    date: '2024-01',
  },
  {
    id: 'caso-2',
    title: 'Centro Comercial 50 kW',
    sector: 'comercial',
    service: 'instalaciones',
    image: '/cases/comercial-centro.jpg',
    description: 'Sistema solar de 50 kW para centro comercial con 120+ locales, reduccion del 60% en factura',
    date: '2023-11',
  },
  {
    id: 'caso-3',
    title: 'Fabrica Industrial 200 kW',
    sector: 'industrial',
    service: 'instalaciones',
    image: '/cases/industrial-planta.jpg',
    description: 'Planta solar de 200 kW para fabricante con ahorro anual de 400 millones',
    date: '2023-09',
  },
  {
    id: 'caso-4',
    title: 'Granja Agricola 75 kW',
    sector: 'agricultura',
    service: 'instalaciones',
    image: '/cases/agricultura-granja.jpg',
    description: 'Sistema solar para granja con bombo de agua y refrigeracion sin conexion a red',
    date: '2023-07',
  },
  {
    id: 'caso-5',
    title: 'Edificio Corporativo 120 kW',
    sector: 'comercial',
    service: 'instalaciones',
    image: '/cases/comercial-edificio.jpg',
    description: 'Sistema solar integrado en techo de edificio de 15 pisos con baterias de respaldo',
    date: '2023-05',
  },
  {
    id: 'caso-6',
    title: 'Invernadero Agricola 30 kW',
    sector: 'agricultura',
    service: 'instalaciones',
    image: '/cases/agricultura-invernadero.jpg',
    description: 'Sistema de riego y control climatico 100% solar para invernadero de hortalizas',
    date: '2023-03',
  },
  {
    id: 'caso-7',
    title: 'Planta Industrial 300 kW',
    sector: 'industrial',
    service: 'instalaciones',
    image: '/cases/industrial-fabrica.jpg',
    description: 'Sistema solar hibrido con generador de respaldo para operacion 24/7 sin interrupciones',
    date: '2023-01',
  },
  {
    id: 'caso-8',
    title: 'Vivienda con Almacenamiento 8 kW',
    sector: 'residencial',
    service: 'instalaciones',
    image: '/cases/residencial-almacenamiento.jpg',
    description: 'Casa residencial con 8 kW de paneles y baterias de litio de 20 kWh',
    date: '2022-11',
  },
]

export default function Portfolio() {
  const [sectorFilter, setSectorFilter] = useState<string | null>(null)
  const [serviceFilter, setServiceFilter] = useState<string | null>(null)

  const filteredCases = cases.filter((c) => {
    const sectorMatch = !sectorFilter || c.sector === sectorFilter
    const serviceMatch = !serviceFilter || c.service === serviceFilter
    return sectorMatch && serviceMatch
  })

  return (
    <>
      <HeroSection
        title="Nuestro Portfolio de Proyectos"
        subtitle="Casos de estudio reales de nuestras implementaciones"
        description="Conoce los proyectos que hemos desarrollado para clientes en diferentes sectores"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filtros */}
          <div className="mb-12">
            <h2 className="subsection-title mb-6">Filtrar por:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Filtro Sector */}
              <div>
                <h3 className="font-bold text-innova-primary mb-4">Sector</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSectorFilter(null)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      !sectorFilter
                        ? 'bg-innova-accent text-white'
                        : 'bg-gray-100 text-innova-neutral hover:bg-gray-200'
                    }`}
                  >
                    Todos los Sectores
                  </button>
                  {['comercial', 'industrial', 'utilities'].map((sector) => (
                    <button
                      key={sector}
                      onClick={() => setSectorFilter(sector)}
                      className={`block w-full text-left px-4 py-2 rounded transition capitalize ${
                        sectorFilter === sector
                          ? 'bg-innova-accent text-white'
                          : 'bg-gray-100 text-innova-neutral hover:bg-gray-200'
                      }`}
                    >
                      {sector === 'comercial' && '[BUILDING] Comercial'}
                      {sector === 'industrial' && '[FACTORY] Industrial'}
                      {sector === 'utilities' && '[GEAR] Utilities'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Servicio */}
              <div>
                <h3 className="font-bold text-innova-primary mb-4">Servicio</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setServiceFilter(null)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      !serviceFilter
                        ? 'bg-innova-accent text-white'
                        : 'bg-gray-100 text-innova-neutral hover:bg-gray-200'
                    }`}
                  >
                    Todos los Servicios
                  </button>
                  {['subestaciones', 'instalaciones', 'mantenimiento'].map((service) => (
                    <button
                      key={service}
                      onClick={() => setServiceFilter(service)}
                      className={`block w-full text-left px-4 py-2 rounded transition capitalize ${
                        serviceFilter === service
                          ? 'bg-innova-accent text-white'
                          : 'bg-gray-100 text-innova-neutral hover:bg-gray-200'
                      }`}
                    >
                      {service === 'subestaciones' && '[POWER] Subestaciones'}
                      {service === 'instalaciones' && '[PLUG] Instalaciones'}
                      {service === 'mantenimiento' && '[TOOL] Mantenimiento'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Casos */}
          <div>
            <h3 className="font-bold text-innova-neutral mb-6">
              Mostrando {filteredCases.length} proyecto{filteredCases.length !== 1 ? 's' : ''}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((c) => (
                <CaseCard
                  key={c.id}
                  id={c.id}
                  title={c.title}
                  sector={c.sector === 'comercial' ? 'Comercial' : c.sector === 'industrial' ? 'Industrial' : 'Utilities'}
                  service={
                    c.service === 'subestaciones'
                      ? 'Subestaciones'
                      : c.service === 'instalaciones'
                        ? 'Instalaciones'
                        : 'Mantenimiento'
                  }
                  image={c.image}
                  description={c.description}
                />
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-16">
                <p className="text-innova-neutral text-lg">
                  No hay proyectos que coincidan con los filtros seleccionados
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-innova-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Buscas inspiracion para tu proyecto?
          </h2>
          <p className="text-blue-100 mb-8">
            Contactanos para una consulta personalizada sobre tus necesidades especificas
          </p>
          <a href="/contacto" className="btn-primary">
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  )
}
