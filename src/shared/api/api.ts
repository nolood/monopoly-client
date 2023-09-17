import axios from 'axios';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

export const setTokenToApi = (token?: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
