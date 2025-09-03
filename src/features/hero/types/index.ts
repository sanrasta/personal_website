/**
 * Hero Feature Types
 * Contains all TypeScript interfaces and types for the hero section
 */

export interface StarConfig {
  top: number
  left: number
  width: number
  height: number
  duration: number
  delay: number
}

export interface HeroIdentity {
  id: string
  label: string
  icon: 'Code' | 'Palette' | 'Dumbbell'
  color: string
}

export interface HeroContent {
  title: string
  subtitle: string
  buttonText: string
  identities: HeroIdentity[]
}

export interface HeroSection {
  content: HeroContent
  starField: StarConfig[]
}

// Hook types
export interface UseScrollIndicatorReturn {
  scrollToSection: (sectionId: string) => void
}

export interface UseActiveSection {
  activeSection: string
  setActiveSection: (section: string) => void
}
