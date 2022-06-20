import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PomodoroTimerTypes } from './timer.type';

export interface TimerState {
  pomoTimerType: PomodoroTimerTypes;
  cycle: number;
}

const initialState: TimerState = {
  pomoTimerType: PomodoroTimerTypes.stop,
  cycle: 0,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startMultiTimer: () => {},
    updateTimerTypes: (state, action: PayloadAction<PomodoroTimerTypes>) => {
      state.pomoTimerType = action.payload;
    },
  },
});

export const timerAction = timerSlice.actions;

export default timerSlice.reducer;
