interface LogoJRProps {
  className?: string;
}

export const LogoJR: React.FC<LogoJRProps> = ({ className }) => {
  return (
    <svg
      width="32px"
      height="20px"
      className={className}
      viewBox="-249.1 199.5 300 162.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m-249 264.4h40.8v49.7c0 11.1 27.8 11.5 34.1 11.5s41.6-.4 41.6-14.5v-111.6h151.5c27.1 0 32 38.7 32 48.6 0 9.5-4.5 52-29.7 52h-15.9l45.5 57.3h-51l-74-92.9h76.7c8.9 0 9.3-12.3 9.3-14.8 0-2.6-.4-13.4-8.9-13.4h-95.4v82.4c0 36.4-57.2 43.4-78.7 43.4-29.7 0-78-10-78-40.8z" />
    </svg>
  );
};
