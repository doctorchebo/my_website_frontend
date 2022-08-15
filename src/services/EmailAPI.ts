import axios from 'axios';

const BASE_EMAIL_API_URL = 'http://127.0.0.1:8000/email/';
const emailApi = axios.create({
  baseURL: BASE_EMAIL_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default emailApi;
