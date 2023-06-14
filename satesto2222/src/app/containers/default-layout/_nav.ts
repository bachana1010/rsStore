import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Administrator'
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-drop' }
  },

  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/signin'
      },
      {
        name: 'Register',
        url: '/signup'
      },
      {
        name: 'logout',
        url: '/logout'
      }
    ]
  },
];
