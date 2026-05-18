import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Soluciones Integrales en Ingenieria Electrica"
        subtitle="Comercial - Industrial - Utilities"
        description="Especialistas en subestaciones, transformadores y comisionamiento de equipos primarios"
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
              icon="[POWER]"
              title="Subestaciones Electricas"
              description="Comisionamiento especializado de equipos primarios y sistemas de proteccion"
              details={[
                'Transformadores de potencia',
                'Equipos de proteccion electrica',
                'Comisionamiento IEC/ANSI',
                'Documentacion tecnica completa',
              ]}
            />
            <ServiceCard
              icon="[PLUG]"
              title="Instalaciones de Fuerza"
              description="Sistemas completos de distribucion de energia electrica"
              details={[
                'Transformadores en salas',
                'Switchgear de media tension',
                'Tableros en baja tension',
                'Diseno de circuitos',
              ]}
            />
            <ServiceCard
              icon="[TOOL]"
              title="Mantenimiento Especializado"
              description="Programas de mantenimiento preventivo y correctivo"
              details={[
                'Inspecciones periodicas',
                'Pruebas de equipos',
                'Calibracion de dispositivos',
                'Reparaciones especializadas',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sectores de Enfoque */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Sectores de Enfoque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/comercial">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer">
                <div className="text-5xl mb-4">[BUILDING]</div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Sector Comercial
                </h3>
                <p className="text-innova-neutral mb-4">
                  Soluciones para edificios, centros comerciales y espacios corporativos
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
            <Link href="/industrial">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer">
                <div className="text-5xl mb-4">[FACTORY]</div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Sector Industrial
                </h3>
                <p className="text-innova-neutral mb-4">
                  Especializacion en plantas, refinerias y operaciones manufactureras
                </p>
                <span className="text-innova-accent font-bold">
                  Explorar &gt;
                </span>
              </div>
            </Link>
            <Link href="/utilities">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-innova-accent transition cursor-pointer">
                <div className="text-5xl mb-4">[GEAR]</div>
                <h3 className="text-2xl font-bold text-innova-primary mb-2">
                  Sector Utilities
                </h3>
                <p className="text-innova-neutral mb-4">
                  Soluciones para operadores de redes, distribuidoras y generadores
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
