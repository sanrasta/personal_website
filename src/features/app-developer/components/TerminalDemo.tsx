import { TerminalCommand } from '../types'

interface TerminalDemoProps {
  commands: TerminalCommand[]
}

export function TerminalDemo({ commands }: TerminalDemoProps) {
  return (
    <div className="bg-slate-900 rounded-lg p-6 text-white font-mono text-sm overflow-hidden" style={{ height: '100%', minHeight: '350px' }}>
      {/* Terminal Header with macOS-style controls */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#ef4444' }}></div>
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#eab308' }}></div>
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
        <span className="ml-2 text-slate-400">terminal</span>
      </div>
      
      {/* Terminal Content */}
      <div className="space-y-2">
        <p><span style={{ color: '#4ade80' }}>santiago@dev</span>:<span style={{ color: '#60a5fa' }}>~</span>$ npm install -g expo-cli</p>
        <p><span style={{ color: '#4ade80' }}>santiago@dev</span>:<span style={{ color: '#60a5fa' }}>~</span>$ expo init MyReactNativeApp</p>
        <p>✓ Created a new React Native app</p>
        <p><span style={{ color: '#4ade80' }}>santiago@dev</span>:<span style={{ color: '#60a5fa' }}>~</span>$ cd MyReactNativeApp</p>
        <p><span style={{ color: '#4ade80' }}>santiago@dev</span>:<span style={{ color: '#60a5fa' }}>~/MyReactNativeApp</span>$ expo start</p>
        <p style={{ color: '#facc15' }}>Starting project on Expo...</p>
        <p className="animate-pulse">█</p>
      </div>
    </div>
  )
}
