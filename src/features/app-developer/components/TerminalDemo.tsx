import { TerminalCommand } from '../types'

interface TerminalDemoProps {
  commands: TerminalCommand[]
}

function CommandLine({ cmd }: { cmd: TerminalCommand }) {
  const hasCommand = cmd.command.trim().length > 0
  const prompt = cmd.prompt || 'santiago@dev:~'

  return (
    <>
      {hasCommand ? (
        <p>
          <span style={{ color: '#4ade80' }}>{prompt}</span>
          <span style={{ color: '#60a5fa' }}>$ </span>
          {cmd.command}
        </p>
      ) : null}
      {cmd.output ? (
        <p className={cmd.isAnimated ? 'animate-pulse whitespace-pre-wrap' : 'whitespace-pre-wrap'}>
          {cmd.output}
        </p>
      ) : null}
    </>
  )
}

export function TerminalDemo({ commands }: TerminalDemoProps) {
  return (
    <div
      className="bg-slate-900 rounded-lg p-6 text-white font-mono text-sm overflow-hidden"
      style={{ height: '100%', minHeight: '350px' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#eab308' }} />
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#22c55e' }} />
        <span className="ml-2 text-slate-400">terminal</span>
      </div>

      <div className="space-y-2">
        {commands.map((cmd) => (
          <CommandLine key={cmd.id} cmd={cmd} />
        ))}
      </div>
    </div>
  )
}
