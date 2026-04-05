/**
 * Static data for App Developer section
 */

import { AppDeveloperContent } from '../types'

export const appDeveloperContent: AppDeveloperContent = {
  title: 'Full-Stack Builder',
  icon: 'Code',
  description: 'I ship across the entire stack — Next.js and React Native on the front, Fastify and PostgreSQL on the back, n8n for AI orchestration, and Shopify Liquid for commerce. I care about architecture that scales and interfaces that feel alive.',
  buttonText: 'View Projects',
  buttonLink: '/portfolio?tab=coding',
  skills: [
    {
      id: 'frontend',
      title: 'Frontend & Mobile',
      description: 'Next.js, React Native, Expo, GSAP, Framer Motion, Tailwind',
      category: 'mobile'
    },
    {
      id: 'backend',
      title: 'Backend & Data',
      description: 'Fastify, PostgreSQL, Prisma, BullMQ, Redis, Zod',
      category: 'api'
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'n8n, Gemini, Claude Code, Spec-Driven Development',
      category: 'testing'
    },
    {
      id: 'commerce',
      title: 'Commerce & Deploy',
      description: 'Shopify Liquid, Stripe, RevenueCat, EAS Build, Cloudflare',
      category: 'deployment'
    }
  ],
  terminalCommands: [
    {
      id: 'clone',
      prompt: 'santiago@dev:~',
      command: 'git clone personalization-hub && cd personalization-hub',
      output: ''
    },
    {
      id: 'install',
      prompt: 'santiago@dev:~/personalization-hub',
      command: 'npm install && npm run db:migrate',
      output: '✓ 47 dependencies installed\n✓ Migrations applied'
    },
    {
      id: 'start-api',
      prompt: 'santiago@dev:~/personalization-hub',
      command: 'npm run dev',
      output: 'Fastify listening on http://localhost:3000'
    },
    {
      id: 'test',
      prompt: 'santiago@dev:~/personalization-hub',
      command: 'npm run test:e2e',
      output: '✓ 24 tests passed — 0 failures'
    },
    {
      id: 'cursor',
      prompt: '',
      command: '',
      output: '█',
      isAnimated: true
    }
  ]
}
