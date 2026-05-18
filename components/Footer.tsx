import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-innova-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-4">Innova Tech</h3>
            <p className="text-gray-300 text-sm mb-4">
              Soluciones integrales en ingenieria electrica para comercial, industrial y utilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios#subestaciones" className="text-gray-300 hover:text-white transition">
                  Subestaciones Electricas
                </Link>
              </li>
              <li>
                <Link href="/servicios#instalaciones" className="text-gray-300 hover:text-white transition">
                  Instalaciones de Fuerza
                </Link>
              </li>
              <li>
                <Link href="/servicios#mantenimiento" className="text-gray-300 hover:text-white transition">
                  Mantenimiento Especializado
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sectores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/comercial" className="text-gray-300 hover:text-white transition">
                  Comercial
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="text-gray-300 hover:text-white transition">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/utilities" className="text-gray-300 hover:text-white transition">
                  Utilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <p className="text-gray-300 text-sm mb-2">
              <a href="tel:+584245555555" className="hover:text-white transition">
                +58 (424) 555-5555
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <a href="mailto:info@innova-tech.com" className="hover:text-white transition">
                info@innova-tech.com
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              Valencia, Venezuela
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Innova Tech. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white transition">
                Politica de Privacidad
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition">
                Terminos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
