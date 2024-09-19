import ICDashboard from "../components/icons/ICDashboard";
import { SideBarType } from "../models/sidebar";

export const SideBar: SideBarType[] = [
  {
    pathName: '/',
    pathNameActive: "dashboard",
    title: 'Dashboard',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'eCommerce',
        pathName: '/',
      }
    ]
  },
  {
    pathName: '/calendar',
    pathNameActive: "calendar",
    title: 'Calendar',
    icon: ICDashboard,
  },
  {
    pathName: '/profile',
    pathNameActive: "profile",
    title: 'Profile',
    icon: ICDashboard,
  },
  {
    pathName: '/forms',
    pathNameActive: "forms",
    title: 'Forms',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'Form Elements',
        pathName: '/forms/form-elements',
      },
      {
        title: 'Form Layout',
        pathName: '/forms/form-layout',
      }
    ]
  },
  {
    pathName: '/tables',
    pathNameActive: "tables",
    title: 'Tables',
    icon: ICDashboard,
  },
  {
    pathName: '/settings',
    pathNameActive: "settings",
    title: 'Settings',
    icon: ICDashboard,
  },
]

export const SideBarOther: SideBarType[] = [
  {
    pathName: '/chart',
    pathNameActive: "chart",
    title: 'Chart',
    icon: ICDashboard,
  },
  {
    pathName: '/ui',
    pathNameActive: "ui",
    title: 'UI Elements',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'Alerts',
        pathName: '/ui/alerts',
      },
      {
        title: 'Buttons',
        pathName: '/ui/buttons',
      }
    ]
  },
  {
    pathName: '/auth',
    pathNameActive: "auth",
    title: 'Authentication',
    icon: ICDashboard,
    chidlren: [
      {
        title: 'Sign In',
        pathName: '/auth/signin',
      },
      {
        title: 'Sign Up',
        pathName: '/auth/signup',
      }
    ]
  },
  {
    pathName: '/demo',
    pathNameActive: "demo",
    title: 'Demo',
    icon: ICDashboard,
  },
]