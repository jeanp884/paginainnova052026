import HeroSection from '@/components/HeroSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Comercial() {
  return (
    <>
      <HeroSection
        title="Energia Solar para Negocios Comerciales"
        subtitle="Centros Comerciales - Oficinas - Retail - Hospitales"
        primaryCTA={{
          text: 'Solicitar Cotizacion',
          href: '/contacto?sector=comercial',
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Beneficios */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Beneficios de Energia Solar Comercial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Reduccion Significativa de Costos</h3>
                <p className="text-innova-neutral">
                  Ahorra 40-60% en factura electrica mensual mejorando directamente tu rentabilidad operativa.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Proteccion contra Apagones</h3>
                <p className="text-innova-neutral">
                  Con baterias de respaldo, mantén operaciones criticas incluso durante interrupciones de la red.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Imagen Corporativa Verde</h3>
                <p className="text-innova-neutral">
                  Demuestra compromiso ambiental, atrae clientes conscientes y mejora reputacion de marca.
                </p>
              </div>
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Escalabilidad Flexible</h3>
                <p className="text-innova-neutral">
                  Sistemas modular que crecen con tu negocio, desde pequenas oficinas hasta multiples ubicaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestras Soluciones Comerciales</h2>
            <div className="bg-innova-secondary text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistema Solar Conectado a Red</p>
                    <p className="text-blue-100 text-sm">Maximo ahorro con opcion de exportar excedentes de energia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Sistema Solar Hibrido</p>
                    <p className="text-blue-100 text-sm">Energia solar + baterias para proteccion ante apagones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Monitoreo en Tiempo Real</p>
                    <p className="text-blue-100 text-sm">Dashboard web para supervisar produccion, consumo y ahorros</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-innova-accent font-bold mr-3">OK</span>
                  <div>
                    <p className="font-bold">Mantenimiento Completo</p>
                    <p className="text-blue-100 text-sm">Servicios preventivos para garantizar maximo rendimiento del sistema</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Casos */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Proyectos Comerciales Exitosos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard
                id="caso-2"
                title="Centro Comercial 50 kW"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-centro.jpg"
                description="Sistema solar de 50 kW para centro comercial con 120+ locales, reduccion del 60% en factura"
              />
              <CaseCard
                id="caso-5"
                title="Edificio Corporativo 120 kW"
                sector="Comercial"
                service="Instalaciones"
                image="/cases/comercial-edificio.jpg"
                description="Sistema solar integrado en techo de edificio de 15 pisos con baterias de respaldo"
              />
            </div>
          </div>

          {/* Especificaciones */}
          <div>
            <h2 className="section-title mb-8">Sistemas Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Sistema 25 kW</h3>
                <p className="text-innova-neutral text-sm mb-4">
                  Para comercios pequenos y oficinas
                </p>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 50 paneles 500W</li>
                  <li>- Inversor 25 kW</li>
                  <li>- Produccion: 36,250 kWh/ano</li>
                  <li>- Inversion: desde 60 millones</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Sistema 50 kW</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- 100 paneles 500W</li>
                  <li>- Inversor 50 kW</li>
                  <li>- Produccion: 72,500 kWh/ano</li>
                  <li>- Inversion: desde 120 millones</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-4">Con Almacenamiento</h3>
                <ul className="text-innova-neutral text-sm space-y-1">
                  <li>- Sistema solar + Baterias 50-100 kWh</li>
                  <li>- Proteccion 24/7</li>
                  <li>- Cero interrupciones por apagones</li>
                  <li>- Inversion: desde 250 millones</li>
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
            Listo para reducir los costos energeticos de tu negocio?
          </h2>
          <Link href="/contacto?sector=comercial" className="btn-primary bg-innova-primary hover:bg-blue-900">
            Solicitar Evaluacion Gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
