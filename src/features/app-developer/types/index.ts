/**
 * TypeScript interfaces for App Developer feature
 */

export interface SkillCard {
  id: string
  title: string
  description: string
  category: 'mobile' | 'api' | 'testing' | 'deployment'
}

export interface TerminalCommand {
  id: string
  prompt: string
  command: string
  output?: string
  isAnimated?: boolean
}

export interface AppDeveloperContent {
  title: string
  icon: string
  description: string
  buttonText: string
  buttonLink: string
  skills: SkillCard[]
  terminalCommands: TerminalCommand[]
}

export interface AppDeveloperSectionProps {
  content?: AppDeveloperContent
}
