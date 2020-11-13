import api from './api';

export const loginForm = (data) => api.post('/login', data)
export const logOut = () => api.get('/logout')