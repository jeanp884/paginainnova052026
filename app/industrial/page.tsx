import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Industrial() {
  return (
    <>
      <HeroSection
        title="Soluciones Electricas para Operaciones Industriales"
        subtitle="Plantas - Refinerias - Manufactura"
        primaryCTA={{
          text: 'Solicitar Evaluacion',
          href: '/contacto?sector=industrial',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Desafios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafios de la Industria Pesada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Operacion Continua 24/7</h3>
                <p className="text-innova-neutral">
                  Sistemas que deben funcionar sin parar, cualquier falla representa perdidas economicas significativas.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Cargas Dinamicas</h3>
                <p className="text-innova-neutral">
                  Manejo de variaciones rapidas de consumo de energia y requisitos de arranque de motores.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Ambiente Exigente</h3>
                <p className="text-innova-neutral">
                  Temperaturas extremas, vibracion, polvo y corrosion requieren equipos robustos.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Seguridad y Armonia</h3>
                <p className="text-innova-neutral">
                  Cumplimiento de normas de calidad de energia, proteccion de personal y equipos.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Soluciones Especializadas de Innova Tech</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Analisis de Potencia</p>
                    <p className="text-blue-100 text-sm">Simulaciones de flujo de carga para optimizar distribucion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Protecciones Coordinadas</p>
                    <p className="text-blue-100 text-sm">Sistemas de reles coordinados para aislar fallas rapidamente</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Filtros Armonicos</p>
                    <p className="text-blue-100 text-sm">Mejora de calidad de energia y proteccion de equipos sensibles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">SCADA y Monitoreo</p>
                    <p className="text-blue-100 text-sm">Sistemas de supervision en tiempo real para control operativo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Proyectos Industriales Exitosos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-industrial-1"
                title="Planta de Manufactura"
                sector="Industrial"
                service="Subestaciones"
                image="/cases/industrial-1.jpg"
                description="Subestacion 50 MVA para planta con 200+ maquinas de produccion"
              />
              <CaseCard
                id="caso-industrial-2"
                title="Refineria Compleja"
                sector="Industrial"
                service="Instalaciones"
                image="/cases/industrial-2.jpg"
                description="Sistema integral con redundancia dual para operacion critica"
              />
              <CaseCard
                id="caso-industrial-3"
                title="Mantenimiento Predictivo"
                sector="Industrial"
                service="Mantenimiento"
                image="/cases/industrial-3.jpg"
                description="Programa de mantenimiento con sensores de vibracion y termografia"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Capacidades de Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Rango de Potencia</h3>
                <p className="text-innova-neutral text-2xl font-bold mb-2">Hasta 150 MVA</p>
                <p className="text-innova-neutral text-sm">Transformadores individuales y bancos en paralelo</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Niveles de Tension</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Alta: 69 kV - 230 kV</li>
                  <li>- Media: 6 kV - 35 kV</li>
                  <li>- Baja: 208V - 600V</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Experiencia</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 50+ proyectos industriales</li>
                  <li>- Operacion 24/7</li>
                  <li>- Ambientes explosivos (ATEX)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-innova-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Necesitas equipar o renovar tu operacion industrial?
          </h2>
          <Link href="/contacto?sector=industrial" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Contacta a Nuestro Equipo
          </Link>
        </div>
      </section>
    </>
  )
}
