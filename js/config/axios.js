import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fga.unb.br/api/v1'
});

export default axiosInstance;
