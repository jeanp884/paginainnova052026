import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Agricultura() {
  return (
    <>
      <HeroSection
        title="Energia Solar para Operaciones Agricolas"
        subtitle="Granjas - Invernaderos - Riego - Ganaderia"
        primaryCTA={{
          text: 'Solicitar Evaluacion',
          href: '/contacto?sector=agricultura',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Desafios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafios del Sector Agricola</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Operacion sin Red Electrica</h3>
                <p className="text-innova-neutral">
                  Muchas granjas estan alejadas, requieren independencia total de la red publica.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Cargas Grandes y Variables</h3>
                <p className="text-innova-neutral">
                  Bombas de agua, sistemas de riego y refrigeracion requieren potencias consistentes.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Ambiente Hostil</h3>
                <p className="text-innova-neutral">
                  Exposicion a lluvia, polvo, humedad y rayos UV requiere equipos robustos.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Reducir Costos Operativos</h3>
                <p className="text-innova-neutral">
                  Maximizar rentabilidad de cultivos eliminando o reduciendo costos de energia.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestras Capacidades para Agricultura</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistemas Hibridos Solares</p>
                    <p className="text-blue-100 text-sm">Paneles + baterias + generador diesel para operacion 24/7 sin red</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Bombeo y Riego Automatico</p>
                    <p className="text-blue-100 text-sm">Sistemas de riego controlados por energia solar con temporizadores inteligentes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Refrigeracion y Control Climatico</p>
                    <p className="text-blue-100 text-sm">Sistemas para invernaderos con ambiente controlado alimentado por solar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Monitoreo Remoto y Alertas</p>
                    <p className="text-blue-100 text-sm">Supervision de cultivos, riego y energia con reportes en tiempo real</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Proyectos Agricolas Solares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-3"
                title="Fabrica Industrial 200 kW"
                sector="Industrial"
                service="Instalaciones"
                image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80"
                description="Granja con sistema solar para bombeo de agua y riego automatico sin red electrica"
              />
              <CaseCard
                id="caso-4"
                title="Granja Agricola 75 kW"
                sector="Agricultura"
                service="Instalaciones"
                image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80"
                description="Sistema solar para riego de 500 hectareas con almacenamiento en tanques elevados"
              />
              <CaseCard
                id="caso-6"
                title="Invernadero Agricola 30 kW"
                sector="Agricultura"
                service="Instalaciones"
                image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80"
                description="Sistema de riego y control climatico 100% solar para invernadero de hortalizas"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Experiencia en Agricultura Solar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Tipos de Cultivos</h3>
                <p className="text-innova-neutral text-sm mb-4">
                  Experiencia en:
                </p>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Hortalizas y verduras</li>
                  <li>- Frutas y plantas permanentes</li>
                  <li>- Cultivos de riego extensivo</li>
                  <li>- Ganaderia lechera</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Potencias Instaladas</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Sistemas desde 5 kW hasta 300 kW</li>
                  <li>- Bombeo de agua para riego</li>
                  <li>- Refrigeracion y climatizacion</li>
                  <li>- Almacenamiento 24+ horas</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Servicios</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Diseno de sistemas hibridos</li>
                  <li>- Automatizacion de riego</li>
                  <li>- Monitoreo y alertas</li>
                  <li>- Mantenimiento preventivo</li>
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
            Tu granja puede ser 100% autosuficiente en energia?
          </h2>
          <Link href="/contacto?sector=agricultura" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Evaluacion Gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
