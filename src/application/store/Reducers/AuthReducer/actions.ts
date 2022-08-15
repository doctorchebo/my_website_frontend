import AxiosService from '../../../../services/AxiosService';
import { removeTokens } from '../../../helpers/actions';
import { login, logout } from './AuthSlice';
interface ICredentials {
  email: string;
  password: string;
}
export const onLogin = (credentials: ICredentials) => {
  return (dispatch: any) => {
    AxiosService.login('login/', credentials)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        dispatch(login());
      })
      .catch((error) => Promise.reject(error));
  };
};

export const onLogout = () => {
  return (dispatch: any) => {
    removeTokens();
    dispatch(logout());
  };
};
