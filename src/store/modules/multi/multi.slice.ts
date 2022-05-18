import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member, ChatMessage } from './multi.type';

export interface MultiState {
  isConnecting: boolean;
  isConnected: boolean;
  members: Member[];
  messages: ChatMessage[];
}

const initialState: MultiState = {
  isConnecting: false,
  isConnected: false,
  members: [],
  messages: [],
};

export const mutliSlice = createSlice({
  name: 'multi',
  initialState,
  reducers: {
    startConnecting: (state) => {
      state.isConnecting = true;
    },
    connectionSuccessed: (state) => {
      state.isConnecting = false;
      state.isConnected = true;
    },
    connectionFailed: (state) => {
      state.isConnecting = false;
    },
    connectionFinished: (state) => {
      state.isConnecting = false;
      state.isConnected = false;
    },
  },
});

export const multiAction = mutliSlice.actions;

export default mutliSlice.reducer;
