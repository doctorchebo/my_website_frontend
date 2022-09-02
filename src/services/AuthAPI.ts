import axios from 'axios';

const BASE_AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

const authApi = axios.create({
  baseURL: BASE_AUTH_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});


export default authApi;
