import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PomodoroTimerTypes } from './timer.type';

export interface TimerState {
  pomoTimerType: PomodoroTimerTypes;
  cycle: number;
  mode: 'single' | 'multi';
  start: boolean;
  finish: boolean;
}

const initialState: TimerState = {
  pomoTimerType: PomodoroTimerTypes.short_pomo,
  cycle: 1,
  start: false,
  finish: false,
  mode: 'single',
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startMultiTimer: (state) => {
      state.mode = 'multi';
    },
    startSingleTimer: (state, action: PayloadAction<PomodoroTimerTypes>) => {
      state.mode = 'single';
      state.start = true;
      state.pomoTimerType = action.payload;
    },
    changeMultiTimer: () => {},
    updateTimerTypes: (state, action: PayloadAction<{ pomo: PomodoroTimerTypes; cycle: number }>) => {
      state.pomoTimerType = action.payload.pomo;
      state.cycle = action.payload.cycle;
      state.start = true;
      state.finish = false;
    },
    finishTimer: (state) => {
      state.finish = true;
      state.start = false;
    },
    resetTimer: (state) => {
      state.start = false;
      state.finish = true;
      state.cycle = 1;
    },
  },
});

export const timerAction = timerSlice.actions;

export default timerSlice.reducer;
