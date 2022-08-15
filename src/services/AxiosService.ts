import { getRefreshToken } from '../application/helpers/actions';
import { IContactMe } from '../pages/contactMe/ContactMe';
import authApi from './AuthAPI';
import blogApi from './BlogAPI';
import emailApi from './EmailAPI';
interface IToken {
  token: {
    access: string;
    refresh: string;
  };
}

export interface IRefreshToken {
  refresh: string;
}

class AxiosService {
  async getPost(slug: string) {
    return blogApi.get(slug);
  }
  async login(endpoint: string, data: any): Promise<any> {
    return authApi.post(endpoint, data);
  }
  async logout() {
    localStorage.removeItem('access_token');
  }

  async refreshToken() {
    return authApi.post('refresh-token/', {
      refresh: localStorage.getItem('refresh_token'),
    });
  }
  async getPosts() {
    return blogApi.get('posts/');
  }

  async contactMe(data: IContactMe) {
    return emailApi.post('contact_me/', data);
  }
}

export default new AxiosService();
