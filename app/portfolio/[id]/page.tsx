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
    title: 'Subestacion 30 MVA - Planta Industrial',
    sector: 'Industrial',
    service: 'Subestaciones Electricas',
    date: 'Enero 2024',
    location: 'Valencia, Venezuela',
    challenge: 'La planta requeria una subestacion completamente nueva para soportar expansion de produccion. El sitio presentaba limitaciones espaciales y requisitos de 24/7 de operacion continua.',
    solution: 'Disenamos e implementamos una subestacion compacta de 30 MVA con transformador de potencia moderno, protecciones coordinadas y sistema SCADA integrado. Minimizamos el tiempo de construccion sin interrumpir operaciones existentes.',
    results: 'Incremento de capacidad del 250%. Sistema operando al 99.8% de disponibilidad. ROI alcanzado en 18 meses gracias a mayor productividad.',
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
    challenge: 'Centro comercial de 5 pisos con 120+ locales requeria sistema electrico robusto con bajo mantenimiento, redundancia y capacidad de crecimiento futuro.',
    solution: 'Implementamos sistema modular con transformadores secundarios en cada piso, tableros con proteccion termica y magnetica, y cableado de cobre con puesta a tierra complementaria.',
    results: 'Consumo optimizado reduciendo perdidas en 15%. Cero interrupciones de servicio desde puesta en operacion. Sistema escalable para futuros puntos de venta.',
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
    title: 'Subestacion de Transmision 138 kV',
    sector: 'Utilities',
    service: 'Subestaciones Electricas',
    date: 'Septiembre 2023',
    location: 'Los Llanos, Venezuela',
    challenge: 'Operador de red necesitaba ampliar capacidad de transmision con subestacion de respaldo (N+1) para garantizar continuidad en sector critico.',
    solution: 'Diseno e implementacion de subestacion completamente redundante con dos transformadores de 50 MVA, lineas de transmision dual, y sistema automatico de transferencia.',
    results: 'Disponibilidad de sistema mejorada a 99.99%. Reduccion de apagones no planificados en 87%. Operador alcanzo certificacion de confiabilidad internacional.',
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
