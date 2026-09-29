const paths = {
  arrow: 'M5 19 19 5M5 5h14v14',
  right: 'M4 12h16m-6-6 6 6-6 6',
  down: 'M12 4v16m-6-6 6 6 6-6',
  download: 'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  moon: 'M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'm6 6 12 12M6 18 18 6',
  pin: 'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  window: 'M3 4h18v16H3ZM3 9h18M6 6.5h.01M9 6.5h.01',
  database: 'M20 6c0 2-4 3-8 3s-8-1-8-3 4-3 8-3 8 1 8 3ZM4 6v12c0 2 4 3 8 3s8-1 8-3V6M4 12c0 2 4 3 8 3s8-1 8-3',
  cloud: 'M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11H6Z',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z',
  terminal: 'M3 4h18v16H3Zm3 5 3 3-3 3m6 0h5',
  check: 'm5 12 4 4L19 6',
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
