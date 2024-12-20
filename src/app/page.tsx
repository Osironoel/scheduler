import ScheduleGenerator from "@/components/ScheduleGenerator";



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Team Scheduler: Card Edition
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 text-center shadow-xl">
          <p className="mb-4 text-lg">
            Welcome to the Team Scheduler Card Game! Draw cards to assign roles for each day of the week.
            After each round of assignments, the team will vote to approve or reject the schedule.
          </p>
          <p className="text-lg">
            If rejected, you have up to 3 attempts to reassign roles for the day.
            Once all 7 days are approved, you'll see the final weekly schedule.
          </p>
        </div>
        <ScheduleGenerator/>
      </div>
    </main>
  )
}
