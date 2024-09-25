interface UserProps {
  className?: string;
}

export const IconUser: React.FC<UserProps> = ({ className }) => {
  return (
    <svg
      width="15"
      height="18"
      className={className}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.34938 7.47786C9.10265 7.47786 10.524 6.0601 10.524 4.3112C10.524 2.5623 9.10265 1.14453 7.34938 1.14453C5.59611 1.14453 4.1748 2.5623 4.1748 4.3112C4.1748 6.0601 5.59611 7.47786 7.34938 7.47786Z"
        stroke="#64748B"
        strokeWidth="1.5"
      />
      <path
        d="M13.6983 13.4155C13.6983 15.3828 13.6983 16.978 7.34915 16.978C1 16.978 1 15.3828 1 13.4155C1 11.4482 3.84283 9.85303 7.34915 9.85303C10.8555 9.85303 13.6983 11.4482 13.6983 13.4155Z"
        strokeWidth="1.5"
        stroke="#64748B"
      />
    </svg>
  );
};
