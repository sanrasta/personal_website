'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-6 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Something went wrong</h1>
      <p className="max-w-md text-slate-600">
        The page hit a client error after loading. Check the browser console for details, or try again.
      </p>
      {process.env.NODE_ENV === 'development' && error.message ? (
        <pre className="max-w-2xl overflow-x-auto rounded-lg bg-slate-900 p-4 text-left text-sm text-slate-100">
          {error.message}
        </pre>
      ) : null}
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Try again
      </button>
    </main>
  )
}
