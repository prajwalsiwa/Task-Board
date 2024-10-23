import Dashboard from '@Views/Dashboard';
import Auth from '@Views/Auth';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/login',
    name: 'Authentication',
    component: Auth,
    authenticated: false,
  },
];

export default appRoutes;
