import { motion } from 'framer-motion'

interface ScheduleDisplayProps {
  schedule: Record<string, Record<string, string>>
}

export default function ScheduleDisplay({ schedule }: ScheduleDisplayProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const roles = ['Frontend', 'Flutter', 'Sys Admin', 'Backend']

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="w-full bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-purple-900/50">
            <th className="py-3 px-4 text-left text-yellow-400 font-bold">Day</th>
            {roles.map(role => (
              <th key={role} className="py-3 px-4 text-left text-yellow-400 font-bold">{role}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <motion.tr 
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index % 2 === 0 ? 'bg-white/5' : ''}
            >
              <td className="py-3 px-4 font-semibold text-pink-300">{day}</td>
              {roles.map(role => (
                <td key={role} className="py-3 px-4">
                  <span className="inline-block bg-blue-300/20 text-blue-300 rounded-full px-3 py-1">
                    {schedule[index + 1]?.[role] || ''}
                  </span>
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

