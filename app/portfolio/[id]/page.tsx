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
    title: 'Subestación 30 MVA - Planta Industrial',
    sector: 'Industrial',
    service: 'Subestaciones Eléctricas',
    date: 'Enero 2024',
    location: 'Valencia, Venezuela',
    challenge: 'La planta requeríauna subestación completamente nueva para soportar expansión de producción. El sitio presentaba limitaciones espaciales y requisitos de 24/7 de operación continua.',
    solution: 'Diseñamos e implementamos una subestación compacta de 30 MVA con transformador de potencia moderno, protecciones coordinadas y sistema SCADA integrado. Minimizamos el tiempo de construcción sin interrumpir operaciones existentes.',
    results: 'Incremento de capacidad del 250%. Sistema operando al 99.8% de disponibilidad. ROI alcanzado en 18 meses gracias a mayor productibilidad.',
    specs: [
      { label: 'Potencia', value: '30 MVA' },
      { label: 'Voltaje Primario', value: '69 kV' },
      { label: 'Voltaje Secundario', value: '13.8 kV' },
      { label: 'Tipo de Transformador', value: 'Potencia OA' },
      { label: 'Sistema de Protección', value: 'Relés digitales coordinados' },
      { label: 'Tiempo de Implementación', value: '4 meses' },
    ],
  },
  'caso-2': {
    id: 'caso-2',
    title: 'Centro Comercial Premium - Sistema de Fuerza',
    sector: 'Comercial',
    service: 'Instalaciones de Fuerza',
    date: 'Noviembre 2023',
    location: 'Caracas, Venezuela',
    challenge: 'Centro comercial de 5 pisos con 120+ locales requería sistema eléctrico robusto con bajo mantenimiento, redundancia y capacidad de crecimiento futuro.',
    solution: 'Implementamos sistema modular con transformadores secundarios en cada piso, tableros con protección térmica y magnética, y cableado de cobre con puesta a tierra complementaria.',
    results: 'Consumo optimizado reduciendo pérdidas en 15%. Cero interrupciones de servicio desde puesta en operación. Sistema escalable para futuros puntos de venta.',
    specs: [
      { label: 'Potencia Total', value: '2,500 kVA' },
      { label: 'Voltaje Alimentación', value: '13.8 kV' },
      { label: 'Niveles de Distribución', value: '5 pisos' },
      { label: 'Número de Tableros', value: '25' },
      { label: 'Eficiencia del Sistema', value: '97.8%' },
      { label: 'Disponibilidad', value: '99.95%' },
    ],
  },
  'caso-3': {
    id: 'caso-3',
    title: 'Subestación de Transmisión 138 kV',
    sector: 'Utilities',
    service: 'Subestaciones Eléctricas',
    date: 'Septiembre 2023',
    location: 'Los Llanos, Venezuela',
    challenge: 'Operador de red necesitaba ampliar capacidad de transmisión con subestación de respaldo (N+1) para garantizar continuidad en sector crítico.',
    solution: 'Diseño e implementación de subestación completamente redundante con dos transformadores de 50 MVA, líneas de transmisión dual, y sistema automático de transferencia.',
    results: 'Disponibilidad de sistema mejorada a 99.99%. Reducción de apagones no planificados en 87%. Operador alcanzó certificación de confiabilidad internacional.',
    specs: [
      { label: 'Voltaje de Transmisión', value: '138 kV' },
      { label: 'Voltaje de Sub-Transmisión', value: '34.5 kV' },
      { label: 'Capacidad Unitaria', value: '50 MVA x 2' },
      { label: 'Tipo de Protección', value: 'Redundancia N+1' },
      { label: 'Sistema de Control', value: 'SCADA completo' },
      { label: 'Disponibilidad Diseñada', value: '99.99%' },
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
        subtitle={`${caseData.sector} • ${caseData.service}`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Información Básica */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Fecha</p>
                <p className="font-bold text-innova-primary">{caseData.date}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Ubicación</p>
                <p className="font-bold text-innova-primary">{caseData.location}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-innova-neutral text-sm mb-1">Sector</p>
                <p className="font-bold text-innova-primary">{caseData.sector}</p>
              </div>
            </div>

            {/* Imagen Placeholder */}
            <div className="mb-12 bg-gradient-to-br from-innova-primary to-innova-secondary h-96 rounded-lg flex items-center justify-center text-white text-2xl">
              [Galería de Imágenes del Proyecto]
            </div>

            {/* Secciones Principales */}
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="subsection-title mb-4">El Desafío</h2>
                <p className="text-innova-neutral leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              <div>
                <h2 className="subsection-title mb-4">Solución Implementada</h2>
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

            {/* Especificaciones Técnicas */}
            <div className="mb-12">
              <h2 className="subsection-title mb-6">Especificaciones Técnicas</h2>
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
                ¿Interesado en una solución similar?
              </h3>
              <p className="mb-6 text-blue-100">
                Contáctanos para analizar tu proyecto específico
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar Consulta
              </Link>
            </div>

            {/* Navegación */}
            <div className="mt-12">
              <Link href="/portfolio" className="text-innova-accent font-bold hover:text-innova-primary transition">
                ← Volver al Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
