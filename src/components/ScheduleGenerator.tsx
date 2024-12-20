'use client'

import { useState } from 'react'
import CardDeck from './CardDeck'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { generateSchedule, submitVote } from '@/app/actions/ScheduleActions'
import VotingSection from './VotingPanel'
import ScheduleDisplay from './ScheduleTable'

export default function ScheduleGenerator() {
  const [schedule, setSchedule] = useState<Record<string, Record<string, string>>>({})
  const [currentDay, setCurrentDay] = useState(1)
  const [isDrawing, setIsDrawing] = useState(false)
  const [showVoting, setShowVoting] = useState(false)
  const [voteCount, setVoteCount] = useState(0)

  const handleDraw = async () => {
    setIsDrawing(true)
    const newSchedule = await generateSchedule(currentDay, schedule)
    setSchedule(prevSchedule => ({ ...prevSchedule, [currentDay]: newSchedule }))
    setIsDrawing(false)
    if (Object.keys(newSchedule).length > 0) {
      setShowVoting(true)
    }
  }

  const handleVote = async (approved: boolean) => {
    const result = await submitVote(currentDay, approved)
    if (result.success) {
      if (approved || voteCount >= 2) {
        setShowVoting(false)
        setCurrentDay(prevDay => prevDay + 1)
        setVoteCount(0)
      } else {
        setVoteCount(prevCount => prevCount + 1)
        setSchedule(prevSchedule => {
          const newSchedule = { ...prevSchedule }
          delete newSchedule[currentDay]
          return newSchedule
        })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl"
    >
      {currentDay <= 7 ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Day {currentDay}</h2>
          {!showVoting ? (
            <CardDeck onDraw={handleDraw} isDrawing={isDrawing} />
          ) : (
            <VotingSection 
              daySchedule={schedule[currentDay]} 
              onVote={handleVote}
              voteCount={voteCount}
            />
          )}
        </>
      ) : (
        <>
          <ScheduleDisplay schedule={schedule} />
          <div className="mt-8 text-center">
            <Button 
              onClick={() => {
                setSchedule({})
                setCurrentDay(1)
                setShowVoting(false)
                setVoteCount(0)
              }}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Start New Week
            </Button>
          </div>
        </>
      )}
    </motion.div>
  )
}

