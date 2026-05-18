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
          <div className="mb-16">
            <h2 className="section-title mb-8">Desafios Tipicos del Sector</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-innova-accent bg-gray-50 rounded">
                <h3 className="font-bold text-innova-primary mb-2">Redundancia y Confiabilidad</h3>
                <p className="text-innova-neutral">
                  Necesidad de sistemas sin interrupciones para garantizar continuidad operativa en espacios con ocupacion continua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
