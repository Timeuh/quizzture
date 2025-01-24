import {
  cQuestionDisplay_container,
  cQuestionDisplay_questionHeading,
  cQuestionDisplay_questionNumber,
} from './QuestionDisplay.styles';

type Props = {
  questionNumber: number;
  questionHeading: string;
};

/**
 * Display a question from the game
 *
 * @param {number} questionNumber - The number of the question
 * @param {string} questionHeading - The heading of the question
 */
export default function QuestionDisplay({questionNumber, questionHeading}: Props) {
  return (
    <div className={cQuestionDisplay_container}>
      <h2 className={cQuestionDisplay_questionNumber}>Question {questionNumber}</h2>
      <p className={cQuestionDisplay_questionHeading}>{questionHeading}</p>
    </div>
  );
}
