import HeroSection from '@/components/HeroSection'
import ExpandableSection from '@/components/ExpandableSection'
import Link from 'next/link'

export default function Servicios() {
  return (
    <>
      <HeroSection
        title="Nuestros Servicios"
        description="Soluciones técnicas especializadas en ingeniería eléctrica"
        primaryCTA={{
          text: 'Solicitar Asesoría',
          href: '/contacto',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Servicio 1: Subestaciones */}
            <ExpandableSection
              id="subestaciones"
              title="Subestaciones Eléctricas"
              defaultOpen={true}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">¿Qué es?</h4>
                  <p className="text-innova-neutral">
                    Instalaciones especializadas que transforman y distribuyen energía eléctrica usando equipos de alta tensión y sistemas de protección avanzados.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Alcance</h4>
                  <ul className="list-disc list-inside space-y-1 text-innova-neutral">
                    <li>Comisionamiento de transformadores de potencia</li>
                    <li>Transformadores de potencial (TP) y corriente (TC)</li>
                    <li>Sistemas de protecciones eléctricas</li>
                    <li>Puesta en marcha de equipos primarios</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Equipos Primarios</h4>
                  <ul className="list-disc list-inside space-y-1 text-innova-neutral">
                    <li>Transformadores de potencia (2-300 MVA)</li>
                    <li>Disyuntores de alta tensión</li>
                    <li>Seccionadores e interruptores</li>
                    <li>Transformadores de medida</li>
                    <li>Sistemas de puesta a tierra</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Metodología</h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-innova-neutral">
                    Inspección → Pruebas Pre-Comisionamiento → Puesta en Marcha → Documentación Final
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Estándares</h4>
                  <p className="text-innova-neutral">
                    IEC 61076, ANSI C57, normativas nacionales aplicables, protecciones según IEEE C37
                  </p>
                </div>

                <Link href="/contacto?servicio=subestaciones" className="btn-primary inline-block mt-4">
                  Solicitar Asesoría Técnica
                </Link>
              </div>
            </ExpandableSection>

            {/* Servicio 2: Instalaciones de Fuerza */}
            <ExpandableSection
              id="instalaciones"
              title="Instalaciones de Fuerza"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">¿Qué es?</h4>
                  <p className="text-innova-neutral">
                    Sistema completo de distribución de energía eléctrica dentro de instalaciones, desde media tensión hasta los puntos finales de consumo.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Alcance</h4>
                  <ul className="list-disc list-inside space-y-1 text-innova-neutral">
                    <li>Transformadores en salas de fuerza</li>
                    <li>Switchgear de media tensión (6-35 kV)</li>
                    <li>Tableros en baja tensión (BT)</li>
                    <li>Diseño de circuitos de distribución</li>
                    <li>Cableado de potencia y control</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Aplicaciones por Sector</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-innova-primary mb-1">Comercial</p>
                      <p className="text-innova-neutral">Edificios, centros comerciales, oficinas</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-innova-primary mb-1">Industrial</p>
                      <p className="text-innova-neutral">Plantas, refinerías, manufactura</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-innova-primary mb-1">Utilities</p>
                      <p className="text-innova-neutral">Subestaciones, operadores de red</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Proceso</h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-innova-neutral">
                    Diagnóstico → Diseño de Sistema → Implementación → Pruebas → Puesta en Operación
                  </div>
                </div>

                <Link href="/contacto?servicio=instalaciones" className="btn-primary inline-block mt-4">
                  Solicitar Presupuesto
                </Link>
              </div>
            </ExpandableSection>

            {/* Servicio 3: Mantenimiento */}
            <ExpandableSection
              id="mantenimiento"
              title="Mantenimiento Especializado"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">¿Qué es?</h4>
                  <p className="text-innova-neutral">
                    Programas integrales de mantenimiento preventivo y correctivo para garantizar disponibilidad y eficiencia de equipos eléctricos.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Alcance</h4>
                  <ul className="list-disc list-inside space-y-1 text-innova-neutral">
                    <li>Inspecciones visuales y termográficas</li>
                    <li>Pruebas funcionales de equipos</li>
                    <li>Calibración de dispositivos de protección</li>
                    <li>Actualizaciones de firmware y software</li>
                    <li>Reparaciones especializadas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Reportes</h4>
                  <p className="text-innova-neutral">
                    Documentación técnica detallada de cada intervención, incluyendo hallazgos, recomendaciones y planes de acción.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-innova-secondary mb-2">Beneficios</h4>
                  <ul className="list-disc list-inside space-y-1 text-innova-neutral">
                    <li>Reducción de tiempo de parada no planificado</li>
                    <li>Aumento de vida útil de equipos</li>
                    <li>Cumplimiento de normativas</li>
                    <li>Documentación completa para auditorías</li>
                  </ul>
                </div>

                <Link href="/contacto?servicio=mantenimiento" className="btn-primary inline-block mt-4">
                  Solicitar Programa Personalizado
                </Link>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-innova-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas una solución específica?
          </h2>
          <p className="text-blue-100 mb-8">
            Contáctanos para una evaluación técnica personalizada
          </p>
          <Link href="/contacto" className="btn-primary">
            Solicitar Consulta
          </Link>
        </div>
      </section>
    </>
  )
}
