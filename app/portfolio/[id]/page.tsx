import Link from 'next/link'
import HeroSection from '@/components/HeroSection'

interface CaseDetail {
  id: string
  title: string
  sector: string
  service: string
  date: string
  location: string
  challenge: string
  solution: string
  results: string
  specs: {
    label: string
    value: string
  }[]
}

const caseDetails: Record<string, CaseDetail> = {
  'caso-1': {
    id: 'caso-1',
    title: 'Casa Residencial 10 kW con Almacenamiento',
    sector: 'Residencial',
    service: 'Instalaciones Fotovoltaicas',
    date: 'Enero 2024',
    location: 'Valencia, Venezuela',
    challenge: 'Familia buscaba reducir factura electrica y tener independencia de la red. La vivienda tenia consumo promedio de 15 kWh/dia con picos de 8 kW.',
    solution: 'Instalamos sistema solar de 10 kW con 20 paneles de 500W y baterias de litio de 15 kWh para almacenamiento nocturno. Sistema de monitoreo remoto con aplicacion movil.',
    results: 'Reduccion de 85% en factura electrica. Independencia energetica total en dias soleados. ROI proyectado en 6 anos. Sistema autosuficiente en verano.',
    specs: [
      { label: 'Potencia Instalada', value: '10 kW' },
      { label: 'Numero de Paneles', value: '20 paneles 500W' },
      { label: 'Capacidad de Baterias', value: '15 kWh' },
      { label: 'Inversor', value: 'Hibrido 10 kW' },
      { label: 'Produccion Anual', value: '14,500 kWh' },
      { label: 'Tiempo de Instalacion', value: '2 semanas' },
    ],
  },
  'caso-2': {
    id: 'caso-2',
    title: 'Centro Comercial 50 kW Solar',
    sector: 'Comercial',
    service: 'Instalaciones Fotovoltaicas',
    date: 'Noviembre 2023',
    location: 'Caracas, Venezuela',
    challenge: 'Centro comercial con 120+ locales consumia 180 MWh anuales. Buscaban reducir costos operativos y mejorar su imagen corporativa.',
    solution: 'Sistema solar de 50 kW distribuido en techos de las 5 plantas. Paneles de alta eficiencia con monitoreo en tiempo real. Integracion con sistema de facturacion existente.',
    results: 'Reduccion del 60% en factura electrica anual. Ahorro de 200 millones anuales. Cero impacto en operaciones. Sistema amortizado en 4 anos.',
    specs: [
      { label: 'Potencia Total', value: '50 kW' },
      { label: 'Numero de Paneles', value: '100 paneles 500W' },
      { label: 'Area de Instalacion', value: '800 metros cuadrados' },
      { label: 'Produccion Anual', value: '72,500 kWh' },
      { label: 'Disponibilidad', value: '99.5%' },
      { label: 'Garantia de Paneles', value: '25 anos' },
    ],
  },
  'caso-3': {
    id: 'caso-3',
    title: 'Fabrica Industrial 200 kW',
    sector: 'Industrial',
    service: 'Instalaciones Fotovoltaicas',
    date: 'Septiembre 2023',
    location: 'Los Llanos, Venezuela',
    challenge: 'Fabricante con operacion 24/7 consumia 850 MWh anuales. Buscaba reducir costos energeticos para mejorar competitividad global.',
    solution: 'Sistema solar hibrido de 200 kW con baterias de respaldo de 80 kWh para cobertura nocturna. Generador diesel como respaldo final. Control centralizado SCADA.',
    results: 'Reduccion de 45% en costos energeticos anuales. Independencia de la red del 70%. Disponibilidad 99.8%. Ahorro anual de 800 millones.',
    specs: [
      { label: 'Potencia Solar', value: '200 kW' },
      { label: 'Numero de Paneles', value: '400 paneles 500W' },
      { label: 'Almacenamiento', value: '80 kWh (baterias)' },
      { label: 'Generador Respaldo', value: '150 kW diesel' },
      { label: 'Produccion Anual', value: '290,000 kWh' },
      { label: 'Tiempo de Implementacion', value: '3 meses' },
    ],
  },
}

export default function CasePage({ params }: { params: { id: string } }) {
  const caseData = caseDetails[params.id]

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-innova-primary mb-4">Caso no encontrado</h1>
          <p className="text-innova-neutral mb-8">
            El caso que buscas no existe en nuestro portfolio.
          </p>
          <Link href="/portfolio" className="btn-primary">
            Volver al Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeroSection
        title={caseData.title}
        subtitle={`${caseData.sector} - ${caseData.service}`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Informacion Basica */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Fecha</p>
                <p className="font-bold text-innova-primary">{caseData.date}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Ubicacion</p>
                <p className="font-bold text-innova-primary">{caseData.location}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Sector</p>
                <p className="font-bold text-innova-primary">{caseData.sector}</p>
              </div>
            </div>

            {/* Imagen Placeholder */}
            <div className="mb-12 bg-gradient-to-br from-innova-primary to-innova-secondary h-96 rounded-lg flex items-center justify-center text-white text-2xl">
              [Galeria de Imagenes del Proyecto]
            </div>

            {/* Secciones Principales */}
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="subsection-title mb-4">El Desafio</h2>
                <p className="text-innova-neutral leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              <div>
                <h2 className="subsection-title mb-4">Solucion Implementada</h2>
                <p className="text-innova-neutral leading-relaxed">
                  {caseData.solution}
                </p>
              </div>

              <div>
                <h2 className="subsection-title mb-4">Resultados Alcanzados</h2>
                <p className="text-innova-neutral leading-relaxed">
                  {caseData.results}
                </p>
              </div>
            </div>

            {/* Especificaciones Tecnicas */}
            <div className="mb-12">
              <h2 className="subsection-title mb-6">Especificaciones Tecnicas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseData.specs.map((spec, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg border-l-4 border-innova-accent">
                    <p className="text-innova-neutral text-sm mb-1">{spec.label}</p>
                    <p className="font-bold text-innova-primary">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-innova-secondary text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Interesado en una solucion similar?
              </h3>
              <p className="mb-6 text-blue-100">
                Contactanos para analizar tu proyecto especifico
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar Consulta
              </Link>
            </div>

            {/* Navegacion */}
            <div className="mt-12">
              <Link href="/portfolio" className="text-innova-accent font-bold hover:text-innova-primary transition">
                &lt;- Volver al Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
