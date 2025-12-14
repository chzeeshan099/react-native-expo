import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://YOUR_BACKEND_URL',
});
