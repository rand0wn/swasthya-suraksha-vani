export const RasadharaLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 48"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="rd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58634" />
          <stop offset="100%" stopColor="#0f3c5d" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="48" height="40" rx="12" fill="url(#rd-grad)" />
      <path
        d="M22 30.5c2.4 0 4.3-1.7 4.3-4.8V15.5h-3.8v9.8c0 .9-.5 1.5-1.3 1.5-.8 0-1.3-.6-1.3-1.5V23h-3.6v1.8c0 3.3 2.2 5.7 5.7 5.7Z"
        fill="white"
      />
      <path
        d="M30 30.5v-11h3.2l3 4.8 3-4.8h3.2v11h-3.2v-6.8l-3 4.8-3-4.8v6.8H30Z"
        fill="white"
      />
      <text
        x="60"
        y="31"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#f9fafb"
      >
        RASADHARA AI LABS
      </text>
    </svg>
  );
};
