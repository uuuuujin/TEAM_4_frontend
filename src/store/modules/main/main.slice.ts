import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MainState {
  getRandomChracter: boolean;
  nickname: string;
  characterImageCode: number;
  triangleImageCode: number;
}

const initialState: MainState = {
  getRandomChracter: false,
  nickname: '포동포동한 아기고양이',
  characterImageCode: 1,
  triangleImageCode: 1,
};

export const getRandomAsync = createAsyncThunk('main/getCharacter', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/random`);
  return response.data;
});

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomAsync.fulfilled, (state, action) => {
        state.getRandomChracter = true;
        state.nickname = action.payload.Nick;
        state.characterImageCode = action.payload.code.all;
        state.triangleImageCode = action.payload.icons.arrow;
        // if (!window.localStorage.getItem('nickname_key')) {
        //   window.localStorage.setItem('nickname_key', action.payload.Nick);
        //   window.localStorage.setItem('imgCode_key', action.payload.code.all);
        //   state.nickname = action.payload.Nick;
        //   state.all = action.payload.code.all;
        // } else {
        //   state.nickname = window.localStorage.getItem('nickname_key')!;
        //   state.all = parseInt(window.localStorage.getItem('imgCode_key')!, 10);
        // }
      })
      .addCase(getRandomAsync.rejected, (state) => {
        state.getRandomChracter = false;
      });
  },
});

// export const mainAction = mainSlice.actions;

export default mainSlice.reducer;
