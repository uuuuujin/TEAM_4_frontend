import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MainState {
  getRandomChracter: boolean;
  nickname: string;
  email: string;
  characterImageCode: number;
  triangleImageCode: number;
  isLoggedIn: boolean;
  token: string;
}

const initialState: MainState = {
  getRandomChracter: false,
  nickname: '',
  email: '',
  characterImageCode: 1,
  triangleImageCode: 1,
  isLoggedIn: false,
  token: '',
};

export const getRandomAsync = createAsyncThunk('main/getCharacter', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/random`);
  return response.data;
});

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    logIn: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.email = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomAsync.fulfilled, (state, action) => {
        state.getRandomChracter = true;
        state.characterImageCode = action.payload.code.all;
        state.triangleImageCode = action.payload.icons.arrow;
        if (!state.isLoggedIn) {
          state.nickname = action.payload.Nick;
        }
      })
      .addCase(getRandomAsync.rejected, (state) => {
        state.getRandomChracter = false;
      });
  },
});

export const mainAction = mainSlice.actions;

export default mainSlice.reducer;
