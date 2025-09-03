/**
 * Artist Feature Export (Modular Version)
 * Main entry point for the artist feature
 */

export { ArtistSection } from './components/ArtistSection'
export { ArtworkGallery, ArtMediumTabs } from './components'
export { artistContent } from './store/artist-data'
export type { 
  ArtistContent, 
  ArtistSectionProps, 
  ArtworkImage, 
  ArtMedium 
} from './types'
