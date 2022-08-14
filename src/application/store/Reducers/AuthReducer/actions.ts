import AxiosService from '../../../../services/AxiosService';
interface ICredentials {
    email: string;
    password: string;
}
export const onLogin = (credentials: ICredentials) => {
  return (dispatch: any) => {
    AxiosService.login('authentication/login/', credentials);
  };
};
