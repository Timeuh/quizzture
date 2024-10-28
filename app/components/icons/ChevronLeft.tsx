type Props = {
  className: string;
};

/**
 * ChevronLeft icon
 *
 * @param {string} className : the css properties for the icon
 */
export default function ChevronLeft({className}: Props) {
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
      <path d='m15 18-6-6 6-6' />
    </svg>
  );
}