import axios from 'axios';

export const BASE_URL = 'https://fga.unb.br';
export const API_URL = `${BASE_URL}/api/v1`;
export const TIMEOUT = 10000;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT
});

export default axiosInstance;
