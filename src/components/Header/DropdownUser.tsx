import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { LogoJR } from '../../images/logo/logoJR';
import { IconUser } from '../../images/icon/IconUser';
import { IconContact } from '../../images/icon/IconContact';
import { IconLogout } from '../../images/icon/IconLogout';
// import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../app/store';
import { setAuth } from '../../store/authSlice';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [loadingLogOut, setLoadingLogOut] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    setLoadingLogOut(true);
    dispatch(setAuth(false));
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expiration');
      navigate('/login-authentication');
      setLoadingLogOut(false);
    });
  };
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            JRE Admin
          </span>
          <span className="block text-xs">Admin Manager</span>
        </span>

        <span className="h-12 w-12 rounded-[10px] flex items-center justify-center border-solid border-[1px] border-default">
          <LogoJR />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-secondary dark:bg-secondary`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-secondary">
            <li>
              <Link
                to="/profile"
                className="flex items-center mr-1 gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-secondary lg:text-base"
              >
                <IconUser />
                My Profile
              </Link>
            </li>
          </ul>
          <button
            onClick={handleLogoutClick}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium lg:text-base !border-none"
            disabled={loadingLogOut}
          >
            {loadingLogOut ? (
              <div className="animate-spin h-5 w-5 border-2 border-t-transparent rounded-full border-[#FF5E5E] mr-2" /> // Loading spinner
            ) : (
              <div className="hover:text-secondary">
                <IconLogout />
              </div>
            )}
            <div className="text-[#FF5E5E]">
              {loadingLogOut ? 'Logging out...' : 'Log Out'}
            </div>
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
