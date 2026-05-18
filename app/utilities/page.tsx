import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Utilities() {
  return (
    <>
      <HeroSection
        title="Soluciones para Operadores de Red y Distribuidoras"
        subtitle="Generadores • Operadores • Distribuidoras"
        primaryCTA={{
          text: 'Solicitar Evaluación',
          href: '/contacto?sector=utilities',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Desafíos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafíos del Sector Utilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Confiabilidad Extrema</h3>
                <p className="text-innova-neutral">
                  Disponibilidad del 99.99% es requisito, cualquier parada afecta miles de usuarios.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Escala Masiva</h3>
                <p className="text-innova-neutral">
                  Manejo de voltajes ultra-altos y potencias en el rango de 100s de MVA.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Regulación Estricta</h3>
                <p className="text-innova-neutral">
                  Cumplimiento de estándares internacionales y normativas nacionales de operación.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Integración de Renovables</h3>
                <p className="text-innova-neutral">
                  Adaptación de redes para incorporar generación distribuida y fuentes variables.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestras Capacidades para Utilities</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">✓</span>
                  <div>
                    <p className="font-bold">Comisionamiento de Subestaciones AT</p>
                    <p className="text-blue-100 text-sm">Desde 69 kV hasta 500 kV con protecciones redundantes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">✓</span>
                  <div>
                    <p className="font-bold">Sistemas SCADA y Automatización</p>
                    <p className="text-blue-100 text-sm">Control supervisado en tiempo real de operaciones críticas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">✓</span>
                  <div>
                    <p className="font-bold">Estudios de Estabilidad</p>
                    <p className="text-blue-100 text-sm">Análisis transitorios y dinámicos de redes complejas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">✓</span>
                  <div>
                    <p className="font-bold">Mantenimiento Especializado</p>
                    <p className="text-blue-100 text-sm">Inspecciones programadas y reparaciones sin impacto operativo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Proyectos de Infraestructura Eléctrica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-utilities-1"
                title="Subestación de Transmisión"
                sector="Utilities"
                service="Subestaciones"
                image="/cases/utilities-1.jpg"
                description="Subestación 138 kV con redundancia N+1 para operador de red"
              />
              <CaseCard
                id="caso-utilities-2"
                title="Centro de Control"
                sector="Utilities"
                service="Instalaciones"
                image="/cases/utilities-2.jpg"
                description="Centro de control remoto con sistemas SCADA y comunicaciones seguras"
              />
              <CaseCard
                id="caso-utilities-3"
                title="Mantenimiento Programado"
                sector="Utilities"
                service="Mantenimiento"
                image="/cases/utilities-3.jpg"
                description="Programa integral de mantenimiento sin paradas para generadora"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Experiencia en Utilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Voltajes AT/MAT</h3>
                <p className="text-innova-neutral text-sm mb-4">
                  Experiencia comprobada en:
                </p>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>• 69 kV - 230 kV (AT)</li>
                  <li>• 345 kV - 500 kV (MAT)</li>
                  <li>• Sistemas de puesta a tierra</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Capacidades</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>• Proyectos de 100+ MVA</li>
                  <li>• Operación 24/7/365</li>
                  <li>• Disponibilidad > 99.99%</li>
                  <li>• Certificaciones internacionales</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Servicios</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>• Comisionamiento</li>
                  <li>• Mantenimiento preventivo</li>
                  <li>• Inspecciones termográficas</li>
                  <li>• Estudios de ingeniería</li>
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
            ¿Tu empresa de utilities necesita un socio técnico confiable?
          </h2>
          <Link href="/contacto?sector=utilities" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Propuesta Técnica
          </Link>
        </div>
      </section>
    </>
  )
}
