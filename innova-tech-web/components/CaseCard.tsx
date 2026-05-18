import Link from 'next/link'
import Image from 'next/image'

interface CaseCardProps {
  id: string
  title: string
  sector: string
  service: string
  image: string
  description?: string
}

export default function CaseCard({
  id,
  title,
  sector,
  service,
  image,
  description,
}: CaseCardProps) {
  return (
    <Link href={`/portfolio/${id}`}>
      <div className="case-card cursor-pointer">
        <div className="relative h-48 bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
            <div>
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-gray-200 text-sm">{sector} • {service}</p>
            </div>
          </div>
        </div>
        {description && (
          <div className="p-4">
            <p className="text-innova-neutral text-sm line-clamp-2">
              {description}
            </p>
            <span className="text-innova-accent font-bold text-sm mt-2 inline-block">
              Ver caso completo →
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
