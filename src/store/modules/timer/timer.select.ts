import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectTimerReducer = (state: RootState) => state.timer;

export const selectPomodoroTimerType = createSelector([selectTimerReducer], (timer) => timer.pomoTimerType);

export const selectTimerStart = createSelector([selectTimerReducer], (timer) => timer.start);

export const selectTimerCycle = createSelector([selectTimerReducer], (timer) => timer.cycle);

export const selectTimerMode = createSelector([selectTimerReducer], (timer) => timer.mode);
