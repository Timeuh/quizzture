import {useEffect, useState} from 'react';
import {useGameContext} from '../../providers/GameProvider';
import PlayerDisplay from '@components/player_display/PlayerDisplay';
import {vQuestionView_container, vQuestionView_header, vQuestionView_questionCount} from './QuestionView.styles';
import Timer from '@components/timer/Timer';
import QuestionDisplay from '../../components/question_display/QuestionDisplay';
import AnswerZone from '../../components/answer_zone/AnswerZone';

/**
 * Display current question
 */
export default function QuestionView() {
  const [timeLeft, setTimeLeft] = useState<number>(30);

  const {setGameState, players} = useGameContext();

  useEffect(() => {
    // if time left is 0, go to answer view
    if (timeLeft === 0) {
      // setGameState('answer');
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
    <section className={vQuestionView_container}>
      <div className={vQuestionView_header}>
        <PlayerDisplay player={players[0]} background={'transparent'} />
        <Timer />
        <h3 className={vQuestionView_questionCount}>
          Question <span>x</span>/20
        </h3>
      </div>
      <QuestionDisplay questionNumber={1} questionHeading={'Quelle est la capitale du Botswana ?'} />
      <AnswerZone />
    </section>
  );
}
