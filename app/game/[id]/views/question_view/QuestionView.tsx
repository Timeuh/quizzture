import {useEffect, useState} from 'react';
import {useGameContext} from '../../providers/GameProvider';

/**
 * Display current question
 */
export default function QuestionView() {
  const [timeLeft, setTimeLeft] = useState<number>(30);

  const {setGameState} = useGameContext();

  useEffect(() => {
    // if time left is 0, go to answer view
    if (timeLeft === 0) {
      setGameState('answer');
      return;
    }

    // decrement time each second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        return prevTime - 1;
      });
    }, 1000);

    // clear interval when component unmounts
    return () => {
      return clearInterval(intervalId);
    };
  }, [timeLeft, setGameState]);

  return (
    <section>
      <h1>QuestionView</h1>
      <h2>{timeLeft} secondes restantes</h2>
    </section>
  );
}
