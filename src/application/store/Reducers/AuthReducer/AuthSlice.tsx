import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const authState: IAuthState = {
  isLoggedIn: false,
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;
export default reducer;
