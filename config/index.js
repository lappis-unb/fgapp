import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fga.unb.br/api/v1'
});
