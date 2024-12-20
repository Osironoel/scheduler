import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

interface VotingSectionProps {
  daySchedule: Record<string, string>
  onVote: (approved: boolean) => void
  voteCount: number
}

export default function VotingSection({ daySchedule, onVote, voteCount }: VotingSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">Today's Assignments</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(daySchedule).map(([role, name], index) => (
          <motion.div 
            key={role}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 p-4 rounded-lg flex flex-col items-center"
          >
            <span className="font-medium text-pink-300 mb-2">{role}</span>
            <span className="text-blue-300 text-lg font-semibold">{name}</span>
          </motion.div>
        ))}
      </div>
      <p className="mb-6 text-center text-lg font-semibold">Do you approve these assignments?</p>
      <div className="flex justify-center space-x-6">
        <Button 
          onClick={() => onVote(true)} 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
        >
          <CheckCircle className="mr-2" size={20} />
          Approve
        </Button>
        <Button 
          onClick={() => onVote(false)} 
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
        >
          <XCircle className="mr-2" size={20} />
          Redraw ({3 - voteCount} tries left)
        </Button>
      </div>
    </motion.div>
  )
}

