import React, { ReactNode } from 'react';

const DefaultLogin: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>;
};

export default DefaultLogin;
