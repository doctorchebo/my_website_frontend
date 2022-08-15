import axios from 'axios';

const BASE_AUTH_API_URL = 'http://127.0.0.1:8000/authentication/';

const authApi = axios.create({
  baseURL: BASE_AUTH_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});


export default authApi;
