const paths = {
  arrow: 'M5 19 19 5M5 5h14v14',
  menu: 'M4 6h16M4 12h16M4 18h16',
  check: 'm5 12 4 4L19 6',
  github: 'M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6a4.3 4.3 0 0 0-.1-3.3s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0C6.7 2.4 5.7 2.7 5.7 2.7A4.3 4.3 0 0 0 5.6 6a4.7 4.7 0 0 0-1.3 3.6c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3v3.4',
  linkedin: 'M9 8v10m0-6a4 4 0 0 1 8 0v6M5 8v10M5 5v.01M2 2h20v20H2z',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  phone: 'M6 3h4l1 5-3 2a14 14 0 0 0 6 6l2-3 5 1v4a3 3 0 0 1-3 3A18 18 0 0 1 3 6a3 3 0 0 1 3-3z',
  award: 'M18 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM8 13l-2 8 6-3 6 3-2-8',
  link: 'M10 13a4 4 0 0 0 6 .4l4-4a4 4 0 0 0-5.7-5.7L12 6m0 12-2.3 2.3A4 4 0 0 1 4 14.6l4-4a4 4 0 0 1 6 .4',
  download: 'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',
  pin: 'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
};

export default function Icon({ name = 'arrow', size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
