import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Member, ChatMessage } from './multi.type';

export interface MultiState {
  isEntered: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  id: number;
  roomId: string;
  members: Member[];
  messages: ChatMessage[];
}

const initialState: MultiState = {
  isEntered: false,
  isConnected: false,
  isConnecting: false,
  id: 0,
  roomId: '',
  members: [],
  messages: [],
};

export const createRoomAsync = createAsyncThunk('multi/createRoom', async (email: string) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/mode/friends`, {
    host: email,
  });
  return response.data;
});

export const enterRoomAsync = createAsyncThunk(
  'multi/enterRoom',
  async ({ roomId, nickname }: { roomId: string; nickname: string }) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/mode/friends/${roomId}`, {
      nick: nickname,
    });
    return response.data;
  }
);

export const mutliSlice = createSlice({
  name: 'multi',
  initialState,
  reducers: {
    startConnectSocket: () => {},
    connectionSuccessed: (state) => {
      state.isConnecting = false;
      state.isConnected = true;
    },
    connectionFinished: (state) => {
      state.isConnecting = false;
      state.isEntered = false;
      state.isConnected = false;
    },
    updateRoomId: (state, action: PayloadAction<{ roomId: string }>) => {
      state.roomId = action.payload.roomId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoomAsync.pending, (state) => {
        state.isConnecting = true;
      })
      .addCase(createRoomAsync.fulfilled, (state, action) => {
        state.roomId = action.payload.roomid;
      })
      .addCase(createRoomAsync.rejected, (state) => {
        state.isConnecting = false;
      })
      .addCase(enterRoomAsync.pending, (state) => {
        state.isConnecting = true;
      })
      .addCase(enterRoomAsync.fulfilled, (state, action) => {
        state.members = action.payload.memberList;
        state.id = action.payload.room.id;
        state.isEntered = true;
      });
  },
});

export const multiAction = mutliSlice.actions;

export default mutliSlice.reducer;