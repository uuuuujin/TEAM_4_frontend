import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MainState {
  getRandomChracter: boolean;
  // nickname: string;
  // imgCode: number;
}

const initialState: MainState = {
  getRandomChracter: false,
  // nickname: '',
  // imgCode: 0,
};

export const getRandomAsync = createAsyncThunk('main/getCharacter', async () => {
  const response = await axios.get(`http://${process.env.REACT_APP_API_URL}/user/random`);
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
        if (!window.localStorage.getItem('nickname_key')) {
          window.localStorage.setItem('nickname_key', action.payload.Nick);
          window.localStorage.setItem('imgCode_key', action.payload.code.all);
        }

        // state.nickname = action.payload.Nick;
        // state.imgCode = action.payload.code.all;
      })
      .addCase(getRandomAsync.rejected, (state) => {
        state.getRandomChracter = false;
      });
  },
});

// export const mainAction = mainSlice.actions;

export default mainSlice.reducer;
