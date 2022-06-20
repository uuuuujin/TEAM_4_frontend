import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectTimerReducer = (state: RootState) => state.timer;

export const selectPomodoroTimerType = createSelector([selectTimerReducer], (multi) => multi.pomoTimerType);
