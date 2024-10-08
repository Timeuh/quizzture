import {cLines_container, cLines_line} from '@components/lines/Lines.styles';

type Props = {
  direction: 'left' | 'right';
};

/**
 * Lines decoration for home page
 *
 * @param {'left' | 'right'} direction : the direction of the lines
 */
export default function Lines({direction}: Props) {
  // array of 20 lines
  const lines = new Array(20).fill(0);

  return (
    <div id={`lines-${direction}`} className={cLines_container(direction)}>
      {lines.map((_, index: number) => {
        return <div key={index} className={cLines_line} />;
      })}
    </div>
  );
}
