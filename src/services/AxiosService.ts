import axios from 'axios';
const BASE_API_URL = 'http://127.0.0.1:8000/';

interface IToken {
  token: {
    access: string;
    refresh: string;
  };
}

class AxiosService {
  get() {
    return axios.get(BASE_API_URL);
  }
  async post(endpoint: string, data: any) {
    const URL = endpoint !== '' ? BASE_API_URL + endpoint : BASE_API_URL;
    return axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  async login(endpoint: string, data: any): Promise<any> {
    const URL = endpoint !== '' ? BASE_API_URL + endpoint : BASE_API_URL;
    return axios
      .post(URL, data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        console.log('LoggedIn');
      })
      .catch((err) => console.log(err));
  }
  async logout() {
    localStorage.removeItem('access_token');
    console.log('logged out');
  }
}

export default new AxiosService();
