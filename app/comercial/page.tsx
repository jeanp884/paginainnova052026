import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Comercial() {
  return (
    <>
      <HeroSection
        title="Soluciones Electricas para el Sector Comercial"
        subtitle="Edificios - Centros Comerciales - Espacios Corporativos"
        primaryCTA={{
          text: 'Solicitar Evaluacion',
          href: '/contacto?sector=comercial',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Desafios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafios Tipicos del Sector</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Redundancia y Confiabilidad</h3>
                <p className="text-innova-neutral">
                  Necesidad de sistemas sin interrupciones para garantizar continuidad operativa en espacios con ocupacion continua.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Eficiencia Energetica</h3>
                <p className="text-innova-neutral">
                  Optimizacion de consumo para reducir costos operativos y cumplir objetivos de sostenibilidad.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Escalabilidad</h3>
                <p className="text-innova-neutral">
                  Sistemas que crezcan con el negocio, permitiendo ampliaciones sin afectar operaciones actuales.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Cumplimiento Normativo</h3>
                <p className="text-innova-neutral">
                  Adhesion a codigos de construccion, estandares electricos y regulaciones de seguridad.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Como Abordamos Estos Desafios</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Diseños Redundantes</p>
                    <p className="text-blue-100 text-sm">Sistemas de fuerza ininterrumpible con multiples caminos de alimentacion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Transformadores de Alta Eficiencia</p>
                    <p className="text-blue-100 text-sm">Equipos que reducen perdidas de energia significativamente</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistemas Modular</p>
                    <p className="text-blue-100 text-sm">Arquitectura escalable que crece con tus necesidades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Documentacion Integral</p>
                    <p className="text-blue-100 text-sm">Reportes tecnicos completos para auditorias y certificaciones</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Casos de Exito en el Sector Comercial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-comercial-1"
                title="Torre de Oficinas"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-1.jpg"
                description="Sistema integral de fuerza para torre de 15 pisos con redundancia total"
              />
              <CaseCard
                id="caso-comercial-2"
                title="Centro Comercial Premium"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-2.jpg"
                description="Suministro electrico para 120+ locales con capacidad de 5 MW"
              />
              <CaseCard
                id="caso-comercial-3"
                title="Centro de Datos"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-3.jpg"
                description="Instalacion critica con UPS de 500 kVA y generador de respaldo"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Especificaciones Tecnicas Comunes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-innova-secondary mb-4">Rangos de Potencia</h3>
                <ul className="space-y-2 text-innova-neutral">
                  <li>- Pequeno (< 500 kVA)</li>
                  <li>- Mediano (500 kVA - 2 MVA)</li>
                  <li>- Grande (2 MVA - 10 MVA)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-innova-secondary mb-4">Niveles de Tension</h3>
                <ul className="space-y-2 text-innova-neutral">
                  <li>- Media Tension: 6 kV, 10 kV, 13.8 kV</li>
                  <li>- Baja Tension: 208V, 240V, 480V</li>
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
            Tu proyecto comercial necesita una solucion electrica?
          </h2>
          <Link href="/contacto?sector=comercial" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Evaluacion Tecnica
          </Link>
        </div>
      </section>
    </>
  )
}
