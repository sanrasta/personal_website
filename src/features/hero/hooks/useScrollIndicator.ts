/**
 * Scroll Indicator Hook
 * Handles scroll-to-section functionality
 */

import { UseScrollIndicatorReturn } from '../types'

export const useScrollIndicator = (): UseScrollIndicatorReturn => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      })
    }
  }

  return {
    scrollToSection
  }
}
