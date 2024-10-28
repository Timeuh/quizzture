type Props = {
  className: string;
};

/**
 * Mask icon
 *
 * @param {string} className : the css properties for the icon
 */
export default function Mask({className}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z' />
      <path d='M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z' />
      <path d='M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z' />
    </svg>
  );
}
