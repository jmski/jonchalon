import type { ReactNode } from 'react'
import Heading from '@/components/typography/Heading'
import { renderHeadline } from '@/lib/render-headline'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'section-header--center' : ''
  const renderedTitle = typeof title === 'string' ? renderHeadline(title) : title

  return (
    <header className={`section-header ${alignClass} ${className}`.trim()}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <Heading level={2} className="section-title">{renderedTitle}</Heading>
      {description && <p className="section-description">{description}</p>}
    </header>
  )
}
