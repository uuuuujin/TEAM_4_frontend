import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
}

const getToken = () => {
  if (localStorage.getItem('@token')) return true;
  return false;
};

const initialState: UserState = {
  isLoggedIn: getToken(),
};

const removeToken = () => {
  localStorage.removeItem('@token');
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      removeToken();
      state.isLoggedIn = false;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
