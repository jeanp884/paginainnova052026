'use client'

import { useState } from 'react'

interface ExpandableSectionProps {
  id?: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function ExpandableSection({
  id,
  title,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-4">
      <button
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="expandable-header w-full text-left flex justify-between items-center"
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      {isOpen && (
        <div className="expandable-content mt-2">
          {children}
        </div>
      )}
    </div>
  )
}
