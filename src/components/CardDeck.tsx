'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface CardDeckProps {
  onDraw: () => void
  isDrawing: boolean
}

const roles = ['Frontend', 'Flutter', 'Sys Admin', 'Backend']
const teamMembers = ['John', 'Alice', 'Bob', 'Eve', 'Charlie', 'David']

export default function CardDeck({ onDraw, isDrawing }: CardDeckProps) {
  const [drawnCards, setDrawnCards] = useState<string[]>([])

  const handleDraw = () => {
    if (!isDrawing) {
      const newCards = roles.map(() => teamMembers[Math.floor(Math.random() * teamMembers.length)])
      setDrawnCards(newCards)
      onDraw()
    }
  }

  return (
    <motion.div 
      className="text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-2 gap-4 mb-8">
        {roles.map((role, index) => (
          <motion.div
            key={role}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">{role}</h3>
            <div className="h-24 flex items-center justify-center">
              {drawnCards[index] ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-300"
                >
                  {drawnCards[index]}
                </motion.span>
              ) : (
                <span className="text-gray-400">?</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <Button 
        onClick={handleDraw} 
        disabled={isDrawing}
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDrawing ? 'Drawing...' : 'Draw Cards'}
      </Button>
    </motion.div>
  )
}

