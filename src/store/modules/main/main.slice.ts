import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MainState {
  getRandomChracter: boolean;
  nickname: string;
  characterImageCode: number;
  triangleImageCode: number;
  isLoggedIn: boolean;
  token: string;
  email: string;
}

const initialState: MainState = {
  getRandomChracter: false,
  nickname: '',
  characterImageCode: 1,
  triangleImageCode: 1,
  isLoggedIn: false,
  token: '',
  email: '',
};

export const getRandomAsync = createAsyncThunk('main/getCharacter', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/random`);
  return response.data;
});
export type CharacterProps = { Nick: string; code: { all: number }; icons: { arrow: number } };
export type LoginProps = { accessToken: string; email: string };

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<LoginProps>) => {
      state.token = action.payload.accessToken;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.email = '';
    },
    updateCharacter: (state, action: PayloadAction<CharacterProps>) => {
      state.getRandomChracter = true;
      state.characterImageCode = action.payload.code.all;
      state.triangleImageCode = action.payload.icons.arrow;
      if (!state.isLoggedIn) {
        state.nickname = action.payload.Nick;
      }
    },
    updateNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getRandomAsync.fulfilled, (state, action) => {
  //       state.getRandomChracter = true;
  //       state.characterImageCode = action.payload.code.all;
  //       state.triangleImageCode = action.payload.icons.arrow;
  //       if (!state.isLoggedIn) {
  //         state.nickname = action.payload.Nick;
  //       }
  //     })
  //     .addCase(getRandomAsync.rejected, (state) => {
  //       state.getRandomChracter = false;
  //     });
  // },
});

export const mainAction = mainSlice.actions;

export default mainSlice.reducer;
