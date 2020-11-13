import api from './api';
import axios from 'axios';

export const getClients = () => api.get('/client');
export const postClient = (data, headers) => api.post('/client', data, {headers});
export const deleteClient = (id, headers) => api.delete(`/client/${id}`, {headers});
export const searchCep = (cep) => axios.get(`https://viacep.com.br/ws/${cep}/json/`);