interface CollectionProps {
  className?: string;
}

export const ICCollections: React.FC<CollectionProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 10H5C3.897 10 3 10.897 3 12V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V12C21 10.897 20.103 10 19 10ZM5 20V12H19L19.002 20H5ZM5 6H19V8H5V6ZM7 2H17V4H7V2Z"
        fill="white"
      />
    </svg>
  );
};
