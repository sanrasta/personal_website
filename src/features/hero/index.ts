/**
 * Hero Feature Module
 * Main entry point for the hero feature
 */

// Export main component
export { HeroSection } from './components'

// Export types for external use
export type { HeroContent, HeroIdentity, StarConfig } from './types'

// Export hooks for external use
export { useScrollIndicator } from './hooks'

// Export data for external use if needed
export { heroContent, starFieldData } from './store/hero-data'
