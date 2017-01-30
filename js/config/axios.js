import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fga.unb.br/api/v1',
  timeout: 10000
});

export default axiosInstance;
