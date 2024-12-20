'use server'

const team = {
  "John": ["Sys Admin", "Backend"],
  "Alice": ["Sys Admin"],
  "Bob": ["Backend"],
  "Eve": ["Frontend"],
  "Charlie": ["Flutter"],
  "David": ["Backend"],
}

export async function generateSchedule(day: number, currentSchedule: Record<string, Record<string, string>>) {
  const roles = ['Frontend', 'Flutter', 'Sys Admin', 'Backend']
  const daySchedule: Record<string, string> = {}

  for (const role of roles) {
    const eligibleMembers = Object.entries(team)
      .filter(([name, memberRoles]) => 
        memberRoles.includes(role) && 
        !Object.values(daySchedule).includes(name) &&
        !Object.values(currentSchedule).some(daySchedule => Object.values(daySchedule).includes(name))
      )
      .map(([name]) => name)

    if (eligibleMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * eligibleMembers.length)
      daySchedule[role] = eligibleMembers[randomIndex]
    }
  }

  // Simulate a delay to make the card drawing effect more noticeable
  await new Promise(resolve => setTimeout(resolve, 1000))

  return daySchedule
}

export async function submitVote(day: number, approved: boolean) {
  // In a real application, you would store the votes in a database
  // and check if all team members have voted
  console.log(`Day ${day} schedule ${approved ? 'approved' : 'rejected'}`)
  
  // Simulate a delay for the voting process
  await new Promise(resolve => setTimeout(resolve, 500))

  return { success: true }
}

