import Dashboard from '@Views/Dashboard';
import Auth from '@Views/Auth';
import TaskBoard from '@Views/TaskBoard';
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
  {
    path: '/task-board',
    name: 'Task Board',
    component: TaskBoard,
    authenticated: false,
  },
];

export default appRoutes;
