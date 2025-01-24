import {useEffect, useState} from 'react';
import {useGameContext} from '../../game/[id]/providers/GameProvider';
import {cTimer_timer} from '@components/timer/Timer.styles';

/**
 * Display a timer of 30 seconds which then switch the game state
 */
export default function Timer() {
  const [time, setTime] = useState(0);

  const {setGameState} = useGameContext();

  // circle specs
  const size = 100;
  const duration = 30;
  const radius = (size - 5) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (time / duration) * circumference;

  useEffect(() => {
    // if time left is 0, go to answer view
    if (time === 0) {
      // setGameState('answer');
      setTime(30);
      return;
    }

    // decrement time each second
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        return prevTime - 1;
      });
    }, 1000);

    // clear interval when component unmounts
    return () => {
      return clearInterval(intervalId);
    };
  }, [time, setGameState]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        className={cTimer_timer(size)}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x='50%' y='50%' textAnchor='middle' dy='0.3em' fontSize='40' fill={'currentColor'}>
        {time}
      </text>
    </svg>
  );
}
