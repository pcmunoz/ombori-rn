import API from '../api';

export const getUsers = page => API.get(`users?page=${page}&per_page=10`);

export const getUser = id => API.get(`users/${id}`);

