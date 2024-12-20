import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(); // Connect to the WebSocket server

const VotingPanel: React.FC = () => {
  const [votes, setVotes] = useState({ approve: 0, reject: 0 });

  useEffect(() => {
    socket.on('voteUpdate', (updatedVotes) => setVotes(updatedVotes));

    return () => {
      socket.off('voteUpdate');
    };
  }, []);

  const handleVote = (type: 'approve' | 'reject') => {
    socket.emit('vote', type);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <p>Approve: {votes.approve}</p>
        <p>Reject: {votes.reject}</p>
      </div>
      <div className="flex">
      <button
  className="px-4 py-2 mx-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
  onClick={() => handleVote('approve')}
>
  Approve
</button>

        <button
          className="px-4 py-2 mx-2 bg-red-500 text-white rounded"
          onClick={() => handleVote('reject')}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default VotingPanel;
