import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="hero-gradient py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg mb-8 text-gray-100">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="btn-primary text-center inline-block"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="btn-secondary text-center inline-block"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
