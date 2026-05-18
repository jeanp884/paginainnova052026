import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Soluciones en Energia Solar Fotovoltaica"
        subtitle="Residencial - Comercial - Industrial - Agricultura"
        description="Especialistas en diseno, instalacion y mantenimiento de sistemas fotovoltaicos de alta eficiencia"
        primaryCTA={{
          text: 'Explorar Servicios',
          href: '/servicios',
        }}
        secondaryCTA={{
          text: 'Solicitar Cotización',
          href: '/contacto',
        }}
      />

      {/* Tres Pilares de Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="https://images.unsplash.com/photo-1509391366360-2e938148aae6?w=500&q=80"
              title="Diseno e Instalacion Solar"
              description="Sistemas fotovoltaicos completos adaptados a tus necesidades energeticas"
              details={[
                'Diseno personalizado de sistemas',
                'Paneles solares de alta eficiencia',
                'Instalacion profesional',
                'Comisionamiento y pruebas',
              ]}
            />
            <ServiceCard
              icon="https://images.unsplash.com/photo-1559163615-cd4628902249?w=500&q=80"
              title="Almacenamiento en Baterias"
              description="Sistemas de almacenamiento para independencia energetica total"
              details={[
                'Baterias de litio o plomo-acido',
                'Sistemas de respaldo 24/7',
                'Integracion con paneles solares',
                'Monitoreo remoto inteligente',
              ]}
            />
            <ServiceCard
              icon="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
              title="Mantenimiento y Soporte"
              description="Mantenimiento preventivo para maxima rentabilidad"
              details={[
                'Inspecciones periodicas',
                'Limpieza de paneles',
                'Actualizaciones de software',
                'Soporte tecnico 24/7',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sectores de Enfoque */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Sectores de Enfoque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/residencial">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer overflow-hidden group">
                <div className="h-40 mb-4 rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1570129477492-45f003313e78?w=500&q=80" alt="Casa residencial con energia solar" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Residencial
                </h3>
                <p className="text-innova-neutral mb-4">
                  Energia solar para viviendas y reduccion de factura electrica
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
            <Link href="/comercial">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer overflow-hidden group">
                <div className="h-40 mb-4 rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80" alt="Centro comercial con energia solar" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Comercial
                </h3>
                <p className="text-innova-neutral mb-4">
                  Sistemas solares para oficinas, comercios y centros comerciales
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
            <Link href="/industrial">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer overflow-hidden group">
                <div className="h-40 mb-4 rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80" alt="Planta industrial con energia solar" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Industrial
                </h3>
                <p className="text-innova-neutral mb-4">
                  Plantas solares de gran escala para operaciones manufactureras
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
            <Link href="/agricultura">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer overflow-hidden group">
                <div className="h-40 mb-4 rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&q=80" alt="Granja agricola con energia solar" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Agricultura
                </h3>
                <p className="text-innova-neutral mb-4">
                  Sistemas solares para granjas, invernaderos y operaciones agricolas
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Casos Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Casos de Estudio Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <CaseCard
              id="caso-1"
              title="Subestación 30 MVA"
              sector="Industrial"
              service="Subestaciones"
              image="/cases/subestacion-1.jpg"
              description="Comisionamiento de subestación de transformadores de potencia en planta manufacturera"
            />
            <CaseCard
              id="caso-2"
              title="Centro Comercial Premium"
              sector="Comercial"
              service="Instalaciones"
              image="/cases/comercial-1.jpg"
              description="Sistema integral de fuerza para centro comercial de 5 pisos"
            />
            <CaseCard
              id="caso-3"
              title="Mantenimiento Predictivo"
              sector="Utilities"
              service="Mantenimiento"
              image="/cases/utilities-1.jpg"
              description="Programa de mantenimiento especializado para operador de red eléctrica"
            />
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="btn-primary">
              Ver Todos los Casos
            </Link>
          </div>
        </div>
      </section>

      {/* Llamada Final a Accion */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contacta con nuestro equipo tecnico para una evaluacion sin compromiso
          </p>
          <Link href="/contacto" className="btn-primary">
            Contacta con Nuestro Equipo Tecnico
          </Link>
        </div>
      </section>
    </>
  )
}
// Build trigger Sat May 17 23:15:00 HSP 2026
