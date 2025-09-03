/**
 * Static data for App Developer section
 */

import { AppDeveloperContent } from '../types'

export const appDeveloperContent: AppDeveloperContent = {
  title: 'App Developer',
  icon: 'Code',
  description: 'As a mobile app developer, I build intuitive and performant cross-platform applications using React Native. My focus is on delivering seamless user experiences for both iOS and Android, leveraging the power of JavaScript and native device APIs.',
  buttonText: 'View Projects',
  buttonLink: '/portfolio?tab=coding',
  skills: [
    {
      id: 'mobile',
      title: 'Mobile',
      description: 'React Native, Expo, TypeScript, Redux',
      category: 'mobile'
    },
    {
      id: 'apis-native',
      title: 'APIs & Native',
      description: 'REST, GraphQL, Camera, Location, Push Notifications',
      category: 'api'
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Jest, React Native Testing Library',
      category: 'testing'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      description: 'Expo Go, EAS Build, App Store, Google Play',
      category: 'deployment'
    }
  ],
  terminalCommands: [
    {
      id: 'install-expo',
      prompt: 'santiago@dev:~',
      command: 'npm install -g expo-cli',
      output: ''
    },
    {
      id: 'init-project',
      prompt: 'santiago@dev:~',
      command: 'expo init MyReactNativeApp',
      output: '✓ Created a new React Native app'
    },
    {
      id: 'cd-project',
      prompt: 'santiago@dev:~',
      command: 'cd MyReactNativeApp',
      output: ''
    },
    {
      id: 'start-project',
      prompt: 'santiago@dev:~/MyReactNativeApp',
      command: 'expo start',
      output: 'Starting project on Expo...'
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
