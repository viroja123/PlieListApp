import axios from 'axios';
import { baseUrl } from '../utils/Constants';
import { store } from '../store';

const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

API.interceptors.request.use(config => {
  const token = store.getState()?.auth?.user?.data?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;