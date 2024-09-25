import { ICAllNotifications } from '../components/icons/ICAllNotifications';
import { IcApplication } from '../components/icons/IcApplication';
import { ICCollections } from '../components/icons/ICCollections';
import { ICDashboard } from '../components/icons/ICDashboard';
import { ICManageCollection } from '../components/icons/ICManageCollection';
import { ICManageUser } from '../components/icons/ICManageUser';
import { SideBarType } from '../models/sidebar';

export const SideBar: SideBarType[] = [
  {
    pathName: '/',
    pathNameActive: 'dashboard',
    title: 'Manage',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'Login authentication',
        pathName: '/',
      },
      {
        title: 'User Login Management',
        pathName: '/',
      },
    ],
  },
  {
    pathName: '/calendar',
    pathNameActive: 'calendar',
    title: 'User Management',
    icon: ICManageUser,
    chidlren: [
      {
        title: 'Login authentication',
        pathName: '/',
      },
      {
        title: 'User Login Management',
        pathName: '/',
      },
    ],
  },
  {
    pathName: '/profile',
    pathNameActive: 'profile',
    title: 'NFT Collections Management',
    icon: ICManageCollection,
  },
  {
    pathName: '/forms',
    pathNameActive: 'forms',
    title: 'NFT Management',
    icon: ICCollections,
    chidlren: [
      {
        title: 'Form Elements',
        pathName: '/forms/form-elements',
      },
      {
        title: 'Form Layout',
        pathName: '/forms/form-layout',
      },
    ],
  },
  {
    pathName: '/tables',
    pathNameActive: 'tables',
    title: 'Application Management',
    icon: IcApplication,
  },
  {
    pathName: '/settings',
    pathNameActive: 'settings',
    title: 'Notifications',
    icon: ICAllNotifications,
  },
];
