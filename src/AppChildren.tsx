import React, { useEffect } from 'react';
import DefaultLayout from './layout/DefaultLayout';
import { useLocation } from 'react-router-dom';
import DefaultLogin from './layout/DefaultLogin';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  const expiration = localStorage.getItem('expiration');
  const currentTime = Date.now();

  if (accessToken && expiration) {
    return currentTime < parseInt(expiration, 10);
  }
  return false;
};

function AppChildren({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {isAuthenticated ? (
        <DefaultLayout>{children}</DefaultLayout>
      ) : (
        <DefaultLogin>{children}</DefaultLogin>
      )}
    </div>
  );
}

export default AppChildren;
