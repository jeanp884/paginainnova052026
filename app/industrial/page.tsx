import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Industrial() {
  return (
    <>
      <HeroSection
        title="Energia Solar para Plantas Industriales"
        subtitle="Manufactureras - Plantas de Procesamiento - Grandes Consumidores"
        primaryCTA={{
          text: 'Solicitar Evaluacion',
          href: '/contacto?sector=industrial',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Desafios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafios de la Industria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Consumo Energetico Masivo</h3>
                <p className="text-innova-neutral">
                  Operaciones intensivas requieren megavatios constantes, generando costos energeticos muy altos.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Cargas Impredecibles</h3>
                <p className="text-innova-neutral">
                  Variaciones de consumo requieren sistemas flexibles que se adapten a demanda fluctuante.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Operacion 24/7</h3>
                <p className="text-innova-neutral">
                  Cualquier interrupcion de suministro representa perdidas millonarias en produccion.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Competitividad Global</h3>
                <p className="text-innova-neutral">
                  Reducir costos operacionales es critico para mantener competitividad en mercados internacionales.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestras Soluciones Industriales</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistemas Solares Hibridos</p>
                    <p className="text-blue-100 text-sm">Paneles + baterias + generador para operacion ininterrumpida</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Almacenamiento de Gran Escala</p>
                    <p className="text-blue-100 text-sm">Baterias de 80+ kWh para cobertura nocturna y respaldo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Control SCADA Integrado</p>
                    <p className="text-blue-100 text-sm">Monitoreo avanzado y gestion automatica de flujo energetico</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Mantenimiento Preventivo</p>
                    <p className="text-blue-100 text-sm">Servicios especializados para maxima disponibilidad y eficiencia</p>
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
                id="caso-3"
                title="Fabrica Industrial 200 kW"
                sector="Industrial"
                service="Instalaciones"
                image="/cases/industrial-planta.jpg"
                description="Planta solar de 200 kW para fabricante con ahorro anual de 400 millones"
              />
              <CaseCard
                id="caso-7"
                title="Planta Industrial 300 kW"
                sector="Industrial"
                service="Instalaciones"
                image="/cases/industrial-fabrica.jpg"
                description="Sistema solar hibrido con generador de respaldo para operacion 24/7 sin interrupciones"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Capacidades de Proyecto Solar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Rango de Potencia</h3>
                <p className="text-innova-neutral text-2xl font-bold mb-2">Hasta 500 kW+</p>
                <p className="text-innova-neutral text-sm">Sistemas escalables desde 100 kW hasta megavatios</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Almacenamiento</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Baterias 50-500 kWh</li>
                  <li>- Respaldo 4-12+ horas</li>
                  <li>- Carga rapida y descarga constante</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Experiencia Comprobada</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 15+ plantas industriales</li>
                  <li>- Operacion continua 24/7</li>
                  <li>- Disponibilidad 99.8%+</li>
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
            Optimiza tus costos energeticos industriales con energia solar?
          </h2>
          <Link href="/contacto?sector=industrial" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Evaluacion Gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
