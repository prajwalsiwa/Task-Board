import { api } from '.';

export const signInUser = (data: any) => api.post('auth/login', data);

export const logoutUser = () => api.post('/user/logout/');
