import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectCounterReducer = (state: RootState) => state.counter;

export const selectCount = createSelector([selectCounterReducer], (counter) => counter.value);
