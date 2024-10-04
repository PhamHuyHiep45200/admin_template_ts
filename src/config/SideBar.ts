import { ICAllNotifications } from '../components/icons/ICAllNotifications';
import { IcApplication } from '../components/icons/IcApplication';
import { ICCollections } from '../components/icons/ICCollections';
import { ICDashboard } from '../components/icons/ICDashboard';
import { ICManageCollection } from '../components/icons/ICManageCollection';
import { ICManageUser } from '../components/icons/ICManageUser';
import { SideBarType } from '../models/sidebar';

export const SideBar: SideBarType[] = [
  {
    pathName: '/home',
    pathNameActive: '/userlogin-management',
    title: 'Manage',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'Login authentication',
        pathName: '/home',
      },
      {
        title: 'User Login Management',
        pathName: '/userlogin-management',
      },
    ],
  },
  {
    pathName: '/user-info',
    pathNameActive: '/user-info',
    title: 'User Management',
    icon: ICManageUser,
    // chidlren: [
    //   {
    //     title: ' User Informations JRE APP',
    //     pathName: '/user-info',
    //   },
    //   {
    //     title: 'Wallet Informations',
    //     pathName: '/wallet-info',
    //   },
    //   {
    //     title: 'Available NFT Informations',
    //     pathName: '/nft-available',
    //   },
    //   {
    //     title: 'Activity History',
    //     pathName: '/activity-history',
    //   },
    // ],
  },
  {
    pathName: '/nft-collections-management',
    pathNameActive: '/nft-collections-management',
    title: 'NFT Collections Management',
    icon: ICManageCollection,
  },
  {
    pathName: '/nft-manage',
    pathNameActive: '/nft-manage',
    title: 'NFT Management',
    icon: ICCollections,
  },
  {
    pathName: '/operator-notice',
    pathNameActive: '/campain-notice',
    title: 'Application Management',
    icon: IcApplication,
    chidlren: [
      {
        title: 'Operator Notice',
        pathName: '/operator-notice',
      },
      {
        title: 'Campain Notice',
        pathName: '/campain-notice',
      },
    ],
  },
  {
    pathName: '/notifications',
    pathNameActive: 'notifications',
    title: 'Notifications',
    icon: ICAllNotifications,
  },
];
