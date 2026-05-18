'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    sector: '',
    servicio: '',
    mensaje: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        sector: '',
        servicio: '',
        mensaje: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <HeroSection
        title="Contáctanos"
        subtitle="Estamos listos para hablar sobre tu proyecto"
        description="Ponte en contacto con nuestro equipo técnico para una consulta personalizada"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="subsection-title mb-8">Información de Contacto</h2>

              <div className="mb-8">
                <h3 className="font-bold text-innova-primary mb-2">Teléfono</h3>
                <a
                  href="tel:+584245555555"
                  className="text-innova-accent font-bold hover:text-innova-primary transition"
                >
                  +58 (424) 555-5555
                </a>
                <p className="text-innova-neutral text-sm">Lunes a Viernes, 8am - 6pm</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-innova-primary mb-2">Email</h3>
                <a
                  href="mailto:info@innova-tech.com"
                  className="text-innova-accent font-bold hover:text-innova-primary transition"
                >
                  info@innova-tech.com
                </a>
                <p className="text-innova-neutral text-sm">Respuesta en 24 horas</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-innova-primary mb-2">Oficina Principal</h3>
                <p className="text-innova-neutral text-sm">
                  Avenida Principal, Piso 8<br />
                  Valencia, Carabobo<br />
                  Venezuela
                </p>
              </div>

              {/* Redes Sociales */}
              <div>
                <h3 className="font-bold text-innova-primary mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-innova-primary rounded-full flex items-center justify-center text-white hover:bg-innova-secondary transition">
                    <span className="text-lg">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-innova-primary rounded-full flex items-center justify-center text-white hover:bg-innova-secondary transition">
                    <span className="text-lg">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-innova-primary rounded-full flex items-center justify-center text-white hover:bg-innova-secondary transition">
                    <span className="text-lg">tw</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <h2 className="subsection-title mb-6">Envíanos tu Consulta</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300">
                  ✓ ¡Gracias por contactarnos! Nos comunicaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-innova-primary font-bold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-innova-primary font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-innova-primary font-bold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                    placeholder="+58 (424) 555-5555"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-innova-primary font-bold mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Sector */}
                <div>
                  <label htmlFor="sector" className="block text-innova-primary font-bold mb-2">
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                  >
                    <option value="">Selecciona un sector</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="utilities">Utilities</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="servicio" className="block text-innova-primary font-bold mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="subestaciones">Subestaciones Eléctricas</option>
                    <option value="instalaciones">Instalaciones de Fuerza</option>
                    <option value="mantenimiento">Mantenimiento Especializado</option>
                    <option value="consulta">Consulta General</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-innova-primary font-bold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-innova-accent"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {/* Botón Submit */}
                <button type="submit" className="btn-primary w-full">
                  Enviar Consulta
                </button>
              </form>

              <p className="text-innova-neutral text-sm mt-4">
                * Campos requeridos. Responderemos tu consulta en el menor tiempo posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Ubicación</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">[Mapa de Google Maps aquí]</p>
          </div>
        </div>
      </section>
    </>
  )
}
