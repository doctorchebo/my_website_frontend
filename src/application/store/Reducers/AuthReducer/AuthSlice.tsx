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
    isLoggedIn(state) {
        state.isLoggedIn = true;
    },
  },
});

const { actions, reducer } = authSlice;
export const { isLoggedIn } = actions;
export default reducer;
