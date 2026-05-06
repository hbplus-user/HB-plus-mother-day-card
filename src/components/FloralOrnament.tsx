export const FloralOrnament = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.6"
    strokeLinecap="round"
  >
    <g opacity="0.7">
      <path d="M100 20 C 100 60, 80 80, 60 90" />
      <path d="M100 20 C 100 60, 120 80, 140 90" />
      <circle cx="100" cy="20" r="4" />
      <path d="M60 90 C 50 95, 45 105, 50 115" />
      <circle cx="55" cy="100" r="3" />
      <path d="M140 90 C 150 95, 155 105, 150 115" />
      <circle cx="145" cy="100" r="3" />
      <path d="M100 60 C 90 70, 85 85, 90 100" />
      <path d="M100 60 C 110 70, 115 85, 110 100" />
      <ellipse cx="90" cy="105" rx="3" ry="6" transform="rotate(-20 90 105)" />
      <ellipse cx="110" cy="105" rx="3" ry="6" transform="rotate(20 110 105)" />
      <path d="M100 100 L 100 180" />
      <path d="M100 130 C 90 135, 85 145, 92 150" />
      <path d="M100 150 C 110 155, 115 165, 108 170" />
    </g>
  </svg>
);
