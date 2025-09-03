/**
 * Static data for Athlete section
 * CRITICAL: Preserving exact image paths, classes, and ordering from original implementation
 */

import { AthleteContent } from '../types'

export const athleteContent: AthleteContent = {
  title: 'Athlete',
  icon: 'Dumbbell',
  description: "I don't chase medals. I train for longevity and play—keeping my body healthy with soccer, simple gym work, handstands, and slackline. Small, consistent sessions > big peaks.",
  buttonText: 'View Routines & Logs',
  buttonLink: '/portfolio?tab=athlete',
  
  // Movement principles - practice-driven approach with detailed descriptions
  principles: [
    {
      id: 'consistency',
      name: 'Consistency',
      description: 'Small daily sessions beat sporadic intense bursts. Progress compounds over time.'
    },
    {
      id: 'mobility',
      name: 'Mobility',
      description: 'Keep joints happy. 10 minutes of stretching prevents hours of pain later.'
    },
    {
      id: 'play',
      name: 'Play',
      description: 'Soccer touches, handstand attempts, balance challenges. Movement should be fun.'
    },
    {
      id: 'breath',
      name: 'Breath',
      description: 'Nasal breathing during easy runs. Deep exhales between sets. Breath is power.'
    },
    {
      id: 'sleep',
      name: 'Sleep',
      description: '7+ hours non-negotiable. Recovery happens when you rest, not when you train.'
    }
  ],
  
  // 2x2 grid layout with natural aspect ratios per image
  images: [
    {
      id: 'athlete1',
      src: '/images/athlete1.png',
      alt: 'Sunrise run on the waterfront—easy pace, nasal breathing.',
      aspectRatio: 'aspect-[3/4]', // Portrait
      className: 'object-cover rounded-lg',
      sizes: '(max-width: 768px) 100vw, 50vw'
    },
    {
      id: 'athlete2',
      src: '/images/athlete2.jpeg',
      alt: 'Slackline session under trees—balance and focus practice.',
      aspectRatio: 'aspect-[3/4]', // Portrait 
      className: 'object-cover object-[50%_65%] rounded-lg', // CRITICAL: object positioning
      sizes: '(max-width: 768px) 100vw, 50vw'
    },
    {
      id: 'athlete3',
      src: '/images/athlete5.png',
      alt: 'City ride—low-intensity cardio and active commute.',
      aspectRatio: 'aspect-[3/4]', // Portrait
      className: 'object-cover object-[50%_65%] rounded-lg', // CRITICAL: object positioning
      sizes: '(max-width: 768px) 100vw, 50vw'
    },
    {
      id: 'athlete4',
      src: '/images/athlete6.JPG',
      alt: 'Park drills with a ball—short sprints and touch work.',
      aspectRatio: 'aspect-[4/3]', // Landscape
      className: 'object-cover rounded-lg',
      sizes: '(max-width: 768px) 100vw, 50vw'
    }
  ]
}