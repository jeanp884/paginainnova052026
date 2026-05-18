interface ServiceCardProps {
  icon: string
  title: string
  description: string
  details?: string[]
}

export default function ServiceCard({
  icon,
  title,
  description,
  details,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-innova-primary mb-2">
        {title}
      </h3>
      <p className="text-innova-neutral mb-4">
        {description}
      </p>
      {details && (
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-innova-accent mr-2">✓</span>
              <span className="text-sm text-innova-neutral">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
