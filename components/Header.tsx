'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-innova-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IT</span>
          </div>
          <span className="font-bold text-xl text-innova-primary hidden sm:inline">
            Innova Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/servicios" className="text-innova-neutral hover:text-innova-primary transition">
            Servicios
          </Link>
          <Link href="/comercial" className="text-innova-neutral hover:text-innova-primary transition">
            Comercial
          </Link>
          <Link href="/industrial" className="text-innova-neutral hover:text-innova-primary transition">
            Industrial
          </Link>
          <Link href="/utilities" className="text-innova-neutral hover:text-innova-primary transition">
            Utilities
          </Link>
          <Link href="/portfolio" className="text-innova-neutral hover:text-innova-primary transition">
            Portfolio
          </Link>
          <Link href="/empresa" className="text-innova-neutral hover:text-innova-primary transition">
            Empresa
          </Link>
          <Link href="/contacto" className="btn-primary">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="/servicios" className="block text-innova-neutral hover:text-innova-primary">
              Servicios
            </Link>
            <Link href="/comercial" className="block text-innova-neutral hover:text-innova-primary">
              Comercial
            </Link>
            <Link href="/industrial" className="block text-innova-neutral hover:text-innova-primary">
              Industrial
            </Link>
            <Link href="/utilities" className="block text-innova-neutral hover:text-innova-primary">
              Utilities
            </Link>
            <Link href="/portfolio" className="block text-innova-neutral hover:text-innova-primary">
              Portfolio
            </Link>
            <Link href="/empresa" className="block text-innova-neutral hover:text-innova-primary">
              Empresa
            </Link>
            <Link href="/contacto" className="block btn-primary text-center">
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
