import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { removeTokens } from '../application/helpers/actions';
import authApi from './AuthAPI';
import AxiosService from './AxiosService';

const BASE_BLOG_API_URL = process.env.REACT_APP_BLOG_API_URL;
const blogApi = axios.create({
  baseURL: BASE_BLOG_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
blogApi.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

blogApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const config = error?.config;
    if (error.response) {
      if (error.response.status === 401 && !config?.sent) {
        config.sent = true;
        return AxiosService.refreshToken()
          .then((res) => {
            config.headers['Authorization'] = `Bearer ${res.data.access}`;
            localStorage.setItem('access_token', res.data.access);
            return axios(config);
          })
          .catch((error) => {
            Promise.reject(error);
            removeTokens();
          });
      } else if (error.response.status === 403) {
      }
    }
  }
);

export default blogApi;
