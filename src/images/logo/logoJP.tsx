interface LogoJPProps {
  className?: string;
}

export const LogoJP: React.FC<LogoJPProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 43C38.9706 43 43 38.9706 43 34C43 29.0294 38.9706 25 34 25C29.0294 25 25 29.0294 25 34C25 38.9706 29.0294 43 34 43Z"
        fill="#D22F27"
      />
      <path
        d="M5 17H61V49H5V17Z"
        stroke="#D4D4D4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
