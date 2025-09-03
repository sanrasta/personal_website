/**
 * Static data for Artist section (Modular Version)
 * CRITICAL: Preserving exact structure, paths, and styling from original implementation
 */

import { ArtistContent } from '../types'

export const artistContent: ArtistContent = {
  title: 'Artist',
  icon: 'Palette',
  description: 'Art is my form of expression beyond code. I explore various mediums to create visual experiences that evoke emotion and challenge perception. My artistic practice informs my technical work, bringing creativity and unique perspectives to every project.',
  buttonText: 'View Gallery',
  buttonLink: '/portfolio?tab=art',
  
  // LEFT COLUMN - Natural aspect ratios to preserve image proportions
  leftColumn: [
    {
      id: 'photo1',
      src: '/images/photo1.jpg',
      alt: 'Photography 1',
      aspectRatio: 'aspect-[4/3]',
      className: 'object-cover rounded-lg',
      sizes: '(max-width: 768px) 100vw, 50vw',
      priority: true
    },
    {
      id: 'photo2',
      src: '/images/photo2.jpg',
      alt: 'Photography 2',
      aspectRatio: 'aspect-[3/4]',
      className: 'object-cover rounded-lg',
      sizes: '(max-width: 768px) 100vw, 50vw'
    }
  ],
  
  // RIGHT COLUMN - Natural aspect ratios with special classes preserved
  rightColumn: [
    {
      id: 'photo3',
      src: '/images/photo3.JPG',
      alt: 'Photography 3',
      aspectRatio: 'aspect-[3/4]',
      className: 'object-cover rounded-lg',
      sizes: '(max-width: 768px) 100vw, 50vw'
    },
    {
      id: 'photo4',
      src: '/images/photo44.png',
      alt: 'Photography 4',
      aspectRatio: 'aspect-[4/3]',
      className: 'object-cover rounded-lg brightness-200', // CRITICAL: brightness-200 class
      sizes: '(max-width: 768px) 100vw, 50vw'
    }
  ],
  
  artMediums: [
    {
      id: 'digital',
      label: 'Digital Art',
      description: 'My digital artwork combines procedural generation with intentional design. I create interactive experiences, generative art, and digital illustrations that blend technology with artistic expression.'
    },
    {
      id: 'traditional',
      label: 'Traditional',
      description: 'Working with physical media grounds my practice. I explore painting, drawing, and mixed media to create tangible works that complement my digital explorations.'
    },
    {
      id: 'photography',
      label: 'Photography',
      description: 'Through photography, I capture moments and perspectives that might otherwise go unnoticed. My photographic work focuses on urban landscapes, abstract compositions, and the interplay of light and shadow.'
    }
  ],
  
  defaultTab: 'digital'
}
