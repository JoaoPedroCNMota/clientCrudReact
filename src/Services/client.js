import api from './api';

export const getClients = () => api.get('/client');
export const postClient = (data) => api.post('/client', data);