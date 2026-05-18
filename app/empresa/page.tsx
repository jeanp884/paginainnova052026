import HeroSection from '@/components/HeroSection'

export default function Empresa() {
  return (
    <>
      <HeroSection
        title="Sobre Innova Tech"
        subtitle="Tu Socio en Soluciones de Ingenieria Electrica"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Acerca de */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-title mb-6">Nuestra Historia</h2>
            <p className="text-innova-neutral text-lg leading-relaxed mb-6">
              Innova Tech es una empresa especializada en soluciones de ingenieria electrica con mas de 15 anos de experiencia sirviendo a empresas en los sectores comercial, industrial y utilities. Nuestro equipo de ingenieros certificados trabaja con pasion para entregar proyectos de excelencia que superan las expectativas de nuestros clientes.
            </p>
            <p className="text-innova-neutral text-lg leading-relaxed">
              Nos especializamos en comisionamiento de subestaciones, instalaciones de fuerza, y programas de mantenimiento especializado. Cada proyecto es una oportunidad de demostrar nuestro compromiso con la calidad, la seguridad y la innovacion.
            </p>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-5xl mb-4">OK</div>
                <h3 className="font-bold text-innova-primary mb-2">Excelencia</h3>
                <p className="text-innova-neutral text-sm">
                  Compromiso con la calidad en cada detalle de nuestro trabajo
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-5xl mb-4">OK</div>
                <h3 className="font-bold text-innova-primary mb-2">Colaboracion</h3>
                <p className="text-innova-neutral text-sm">
                  Trabajamos como socio estrategico de nuestros clientes
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-5xl mb-4">OK</div>
                <h3 className="font-bold text-innova-primary mb-2">Innovacion</h3>
                <p className="text-innova-neutral text-sm">
                  Aplicamos las ultimas tecnicas y tecnologias disponibles
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-5xl mb-4">OK</div>
                <h3 className="font-bold text-innova-primary mb-2">Confiabilidad</h3>
                <p className="text-innova-neutral text-sm">
                  Cumplimiento de compromisos y maximos estandares de seguridad
                </p>
              </div>
            </div>
          </div>

          {/* Equipo */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Nuestro Equipo</h2>
            <p className="text-innova-neutral mb-8 text-center max-w-2xl mx-auto">
              Contamos con ingenieros especializados, tecnicos certificados y personal de apoyo con anos de experiencia en proyectos electricos complejos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-innova-primary rounded-full flex items-center justify-center text-white text-5xl mb-4">
                  [ENG]
                </div>
                <h3 className="font-bold text-innova-primary mb-2">Gerencia Tecnica</h3>
                <p className="text-innova-neutral text-sm">
                  Ingenieros con especializacion en sistemas de potencia y subestaciones
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-innova-secondary rounded-full flex items-center justify-center text-white text-5xl mb-4">
                  [TOOL]
                </div>
                <h3 className="font-bold text-innova-primary mb-2">Equipo Operacional</h3>
                <p className="text-innova-neutral text-sm">
                  Tecnicos certificados en comisionamiento y mantenimiento electrico
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-innova-tertiary rounded-full flex items-center justify-center text-white text-5xl mb-4">
                  [ADMIN]
                </div>
                <h3 className="font-bold text-innova-primary mb-2">Apoyo Administrativo</h3>
                <p className="text-innova-neutral text-sm">
                  Personal dedicado a asegurar proyectos sin contratiempos
                </p>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Certificaciones y Acreditaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 border-l-4 border-innova-primary rounded-lg">
                <h3 className="font-bold text-innova-primary mb-3">Estandares Tecnicos</h3>
                <ul className="space-y-2 text-innova-neutral text-sm">
                  <li>OK IEC 61076 - Conectores de potencia</li>
                  <li>OK ANSI C57 - Transformadores</li>
                  <li>OK IEEE C37 - Dispositivos de proteccion</li>
                  <li>OK NEC - Codigo Electrico Nacional</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-50 border-l-4 border-innova-secondary rounded-lg">
                <h3 className="font-bold text-innova-secondary mb-3">Practicas Recomendadas</h3>
                <ul className="space-y-2 text-innova-neutral text-sm">
                  <li>OK Seguridad en trabajos electricos</li>
                  <li>OK Calidad ISO en procesos</li>
                  <li>OK Ambiente y sostenibilidad</li>
                  <li>OK Proteccion de datos del cliente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Estadisticas */}
          <div>
            <h2 className="section-title mb-8 text-center">Nuestros Logros</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-8 bg-gradient-to-br from-innova-primary to-innova-secondary text-white rounded-lg text-center">
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-blue-100">Proyectos Completados</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-innova-secondary to-innova-tertiary text-white rounded-lg text-center">
                <p className="text-5xl font-bold mb-2">15+</p>
                <p className="text-blue-100">Anos de Experiencia</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-innova-tertiary to-innova-accent text-white rounded-lg text-center">
                <p className="text-5xl font-bold mb-2">3</p>
                <p className="text-blue-100">Sectores Principales</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-innova-accent to-orange-500 text-white rounded-lg text-center">
                <p className="text-5xl font-bold mb-2">99.9%</p>
                <p className="text-orange-100">Satisfaccion Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-innova-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Conoce Como Podemos Ayudarte
          </h2>
          <p className="text-blue-100 mb-8">
            Programemos una consulta para analizar tu proyecto especifico
          </p>
          <a href="/contacto" className="btn-primary">
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  )
}
