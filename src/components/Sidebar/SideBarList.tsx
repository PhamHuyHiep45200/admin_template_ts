import React, { Dispatch, SetStateAction } from 'react';
import SidebarLinkGroup from './SidebarLinkGroup';
import { NavLink, useLocation } from 'react-router-dom';
import ICDown from '../icons/ICDown';
import { SideBarType } from '../../models/sidebar';

interface SideBarListProps {
  menu: SideBarType[];
  sidebarExpanded: boolean;
  setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
}

function SideBarList({
  menu,
  sidebarExpanded,
  setSidebarExpanded,
}: SideBarListProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <ul className="mb-6 flex flex-col gap-1.5">
      {menu.map((side) => {
        if (side?.chidlren?.length) {
          return (
            <SidebarLinkGroup
              activeCondition={
                pathname === side.pathName ||
                pathname.includes(side.pathNameActive)
              }
              key={side.pathName}
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <NavLink
                      to="#"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === side.pathName ||
                          pathname.includes(side.pathNameActive)) &&
                        'bg-graydark dark:bg-meta-4'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      {<side.icon />}
                      {side.title}
                      <ICDown open={open} />
                    </NavLink>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden transition-all duration-300`}
                      style={{
                        height: open ? (side?.chidlren?.length ?? 0) * 40 : 0,
                      }}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col pl-6 !my-0">
                        {side?.chidlren?.map((sideChid) => (
                          <li
                            key={sideChid.pathName}
                            className="h-[40px] flex items-center"
                          >
                            <NavLink
                              to={sideChid.pathName}
                              className={({ isActive }) =>
                                'group w-full relative flex items-center gap-2.5 text-sm rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-original ' +
                                (isActive && '!text-secondary')
                              }
                            >
                              {sideChid.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          );
        }
        return (
          <li key={side.pathName}>
            <NavLink
              to={side.pathName}
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes(side.pathNameActive) &&
                'bg-graydark dark:bg-meta-4'
              }`}
            >
              <side.icon />
              {side.title}
            </NavLink>
          </li>
        );
      })}
      {/* <!-- Menu Item Settings --> */}
    </ul>
  );
}

export default SideBarList;
