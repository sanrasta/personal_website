/**
 * TypeScript interfaces for Artist feature (Modular Version)
 * CRITICAL: Preserving exact structure from original implementation
 */

export interface ArtworkImage {
  id: string
  src: string
  alt: string
  aspectRatio: string
  className?: string
  priority?: boolean
  sizes: string
}

export interface ArtMedium {
  id: 'digital' | 'traditional' | 'photography'
  label: string
  description: string
}

export interface ArtistContent {
  title: string
  icon: string
  description: string
  buttonText: string
  buttonLink: string
  leftColumn: ArtworkImage[]
  rightColumn: ArtworkImage[]
  artMediums: ArtMedium[]
  defaultTab: 'digital' | 'traditional' | 'photography'
}

export interface ArtistSectionProps {
  content?: ArtistContent
}
