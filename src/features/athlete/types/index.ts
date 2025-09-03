/**
 * TypeScript interfaces for Athlete section
 * CRITICAL: Preserving exact structure from original implementation
 */

export interface AthleteImage {
  id: string
  src: string
  alt: string
  aspectRatio: string
  className: string
  sizes: string
  priority?: boolean
}

export interface MovementPrinciple {
  id: string
  name: string
  description: string
  icon?: string
}

export interface AthleteContent {
  title: string
  icon: string
  description: string
  buttonText: string
  buttonLink: string
  images: AthleteImage[]
  principles?: MovementPrinciple[]
}

export interface AthleteSectionProps {
  content?: AthleteContent
}