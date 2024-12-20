'use client'
import React, { useState } from 'react';
import WheelComponent from '../components/Wheel';
import ScheduleTable from '../components/ScheduleTable';
import VotingPanel from '../components/VotingPanel';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

interface ScheduleItem {
  day: string;
  frontend: string;
  flutter: string;
  sysAdmin: string;
  backend: string;
}




const IndexPage: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const updateSchedule = (day: string, roles: any) => {
    setSchedule((prev) => [...prev, { day, ...roles }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Gamified Scheduler</h1>
      <div className="my-8">
        <WheelComponent />
      </div>
      <VotingPanel />
      <ScheduleTable schedule={schedule} />
    </div>
  );
};

export default IndexPage;
