type Props = {
  className: string;
};

/**
 * BookA icon
 *
 * @param {string} className : the css properties for the icon
 */
export default function BookA({className}: Props) {
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
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20' />
      <path d='m8 13 4-7 4 7' />
      <path d='M9.1 11h5.7' />
    </svg>
  );
}