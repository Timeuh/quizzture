type Props = {
  className: string;
};

/**
 * Copy text icon
 *
 * @param {string} className : the css properties for the icon
 */
export default function Copy({className}: Props) {
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
      <rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
      <path d='M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2' />
      <path d='M16 4h2a2 2 0 0 1 2 2v4' />
      <path d='M21 14H11' />
      <path d='m15 10-4 4 4 4' />
    </svg>
  );
}