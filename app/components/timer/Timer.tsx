import {useEffect, useState} from 'react';
import {useGameContext} from '../../game/[id]/providers/GameProvider';

/**
 * Display a timer of 30 seconds which then switch the game state
 */
export default function Timer() {
  const [time, setTime] = useState(0);

  const {setGameState} = useGameContext();

  useEffect(() => {
    // if time left is 0, go to answer view
    if (time === 0) {
      // setGameState('answer');
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
    <div>
      <svg></svg>
      <h2>{time}</h2>
    </div>
  );
}
