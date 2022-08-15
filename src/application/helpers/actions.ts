export const getAccessToken = () => {
  const access_token = localStorage.getItem('access_token');
  return access_token;
};

export const getRefreshToken = () => {
  const refresh_token = localStorage.getItem('refresh_token');
  return { refresh: refresh_token };
};

export const removeTokens = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
};

export interface ITokens {
  access_token: string;
  refresh_token: string;
}
