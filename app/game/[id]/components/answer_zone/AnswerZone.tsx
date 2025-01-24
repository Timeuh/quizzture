import {cAnswerZone_container, cAnswerZone_input} from './AnswerZone.styles';

/**
 * Zone where players write their answers
 */
export default function AnswerZone() {
  return (
    <form className={cAnswerZone_container}>
      <input type='text' placeholder='Réponse ...' className={cAnswerZone_input} />
    </form>
  );
}
