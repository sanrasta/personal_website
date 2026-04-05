/**
 * MovementPrinciples Component
 * Interactive principle chips with hover tooltips and click effects
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MovementPrinciple } from '../types'

interface MovementPrinciplesProps {
  principles: MovementPrinciple[]
}

export function MovementPrinciples({ principles }: MovementPrinciplesProps) {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string | null>(null)

  const handlePrincipleClick = (principleId: string) => {
    setSelectedPrinciple(selectedPrinciple === principleId ? null : principleId)
  }

  return (
    <div className="space-y-4">
      {/* Interactive Principle Chips */}
      <div className="flex flex-wrap gap-2">
        {principles.map((principle) => (
          <motion.button
            key={principle.id}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200 cursor-pointer border ${
              selectedPrinciple === principle.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 hover:border-blue-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePrincipleClick(principle.id)}
          >
            {principle.name}
          </motion.button>
        ))}
      </div>

      {/* Expanded Description */}
      <AnimatePresence mode="wait">
        {selectedPrinciple && (
          <motion.div
            key={selectedPrinciple}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">
                  {principles.find(p => p.id === selectedPrinciple)?.name}
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {principles.find(p => p.id === selectedPrinciple)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle hint text */}
      {!selectedPrinciple && (
        <motion.p 
          className="text-xs text-slate-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click a principle to learn more
        </motion.p>
      )}
    </div>
  )
}
