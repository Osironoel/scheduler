import React, { useRef } from 'react';
import { Wheel } from 'winwheel';

const WheelComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const spinWheel = () => {
    const wheel = new Wheel({
      canvasId: 'rolesWheel',
      numSegments: 6, // Adjust based on team members
      segments: [
        { fillStyle: '#FF0000', text: 'John (Sys Admin, Backend)' },
        { fillStyle: '#00FF00', text: 'Alice (Sys Admin)' },
        { fillStyle: '#0000FF', text: 'Eve (Frontend)' },
        { fillStyle: '#FFFF00', text: 'Charlie (Flutter)' },
        { fillStyle: '#FF00FF', text: 'Bob (Backend)' },
        { fillStyle: '#00FFFF', text: 'David (Backend)' },
      ],
      animation: {
        type: 'spinToStop',
        duration: 5,
        spins: 8,
      },
    });

    wheel.startAnimation();
  };

  return (
    <div className="flex flex-col items-center">
      <canvas id="rolesWheel" width="500" height="500" ref={canvasRef}></canvas>
      <button
        onClick={spinWheel}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Spin the Wheel
      </button>
    </div>
  );
};

export default WheelComponent;
