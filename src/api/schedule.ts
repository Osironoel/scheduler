import { NextApiRequest, NextApiResponse } from 'next';

let schedule: any[] = []; // Store the schedule here (use DB in production)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(schedule);
  }
  if (req.method === 'POST') {
    const { day, roles } = req.body;
    schedule.push({ day, ...roles });
    return res.status(200).json({ message: 'Schedule updated' });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
