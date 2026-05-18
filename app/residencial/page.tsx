import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Residencial() {
  return (
    <>
      <HeroSection
        title="Energia Solar para tu Hogar"
        subtitle="Ahorra en tu factura electrica - Independencia Energetica"
        primaryCTA={{
          text: 'Solicitar Cotización',
          href: '/contacto?sector=residencial',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Beneficios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Beneficios de la Energia Solar Residencial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Reduccion de Factura Electrica</h3>
                <p className="text-innova-neutral">
                  Ahorra entre 70-90% en tu factura mensual de electricidad dependiendo del consumo.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Independencia Energetica</h3>
                <p className="text-innova-neutral">
                  Con almacenamiento en baterias, ten energia incluso durante la noche sin depender de la red.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Incremento del Valor del Inmueble</h3>
                <p className="text-innova-neutral">
                  Los inmuebles con energia solar tienen mayor valor en el mercado y son mas atractivos.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Cuidar el Planeta</h3>
                <p className="text-innova-neutral">
                  Reduce tu huella de carbono y contribuye a un futuro mas sostenible para las generaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestras Soluciones Residenciales</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistema Solar Conectado a Red</p>
                    <p className="text-blue-100 text-sm">Ahorro inmediato con opcion de vender excedentes a la red</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistema Solar Hibrido</p>
                    <p className="text-blue-100 text-sm">Energia durante el dia y noche con baterias de almacenamiento</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Monitoreo Inteligente</p>
                    <p className="text-blue-100 text-sm">Aplicacion movil para supervisar produccion, consumo y ahorros en tiempo real</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Mantenimiento y Soporte</p>
                    <p className="text-blue-100 text-sm">Servicio tecnico 24/7 y mantenimiento preventivo para maxima eficiencia</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Proyectos Residenciales Exitosos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-1"
                title="Casa Residencial 10 kW"
                sector="Residencial"
                service="Instalaciones"
                image="/cases/residencial-casa.jpg"
                description="Sistema solar residencial de 10 kW con almacenamiento en baterias"
              />
              <CaseCard
                id="caso-8"
                title="Vivienda con Almacenamiento"
                sector="Residencial"
                service="Instalaciones"
                image="/cases/residencial-almacenamiento.jpg"
                description="Casa residencial con 8 kW de paneles y baterias de litio de 20 kWh"
              />
              <CaseCard
                id="caso-5"
                title="Edificio Corporativo"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-edificio.jpg"
                description="Sistema solar integrado en techo de condominio residencial con energia compartida"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Sistemas Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Sistema 5 kW</h3>
                <p className="text-innova-neutral text-sm mb-4">
                  Para casas pequenas con bajo consumo
                </p>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 10 paneles 500W</li>
                  <li>- Inversor 5 kW</li>
                  <li>- Produccion: 7,000 kWh/ano</li>
                  <li>- Inversion: desde 15 millones</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Sistema 10 kW</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 20 paneles 500W</li>
                  <li>- Inversor 10 kW</li>
                  <li>- Produccion: 14,500 kWh/ano</li>
                  <li>- Inversion: desde 25 millones</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Con Almacenamiento</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Sistema + Baterias 10-20 kWh</li>
                  <li>- Energia 24/7</li>
                  <li>- Independencia total de la red</li>
                  <li>- Inversion: desde 45 millones</li>
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
            Listo para reducir tu factura electrica?
          </h2>
          <Link href="/contacto?sector=residencial" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Evaluacion Gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
