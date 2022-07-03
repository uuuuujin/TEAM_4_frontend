import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectUserReducer = (state: RootState) => state.user;

export const selectIsLoggedIn = createSelector([selectUserReducer], (user) => user.isLoggedIn);
