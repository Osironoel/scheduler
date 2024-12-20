import React from 'react';

interface Schedule {
  day: string;
  frontend: string;
  flutter: string;
  sysAdmin: string;
  backend: string;
}

const ScheduleTable: React.FC<{ schedule: Schedule[] }> = ({ schedule }) => (
  <table className="table-auto w-full border-collapse border border-gray-400 mt-6">
    <thead>
      <tr>
        <th className="border border-gray-400 px-4 py-2">Day</th>
        <th className="border border-gray-400 px-4 py-2">Frontend</th>
        <th className="border border-gray-400 px-4 py-2">Flutter</th>
        <th className="border border-gray-400 px-4 py-2">Sys Admin</th>
        <th className="border border-gray-400 px-4 py-2">Backend</th>
      </tr>
    </thead>
    <tbody>
      {schedule.map((day, index) => (
        <tr key={index}>
          <td className="border border-gray-400 px-4 py-2">{day.day}</td>
          <td className="border border-gray-400 px-4 py-2">{day.frontend}</td>
          <td className="border border-gray-400 px-4 py-2">{day.flutter}</td>
          <td className="border border-gray-400 px-4 py-2">{day.sysAdmin}</td>
          <td className="border border-gray-400 px-4 py-2">{day.backend}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ScheduleTable;
