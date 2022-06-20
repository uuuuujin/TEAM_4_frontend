import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectMultiReducer = (state: RootState) => state.multi;

export const selectIsEntered = createSelector([selectMultiReducer], (multi) => multi.isEntered);

export const selectRoomId = createSelector([selectMultiReducer], (multi) => multi.roomId);

export const selectIsConnected = createSelector([selectMultiReducer], (multi) => multi.isConnected);

export const selectMembers = createSelector([selectMultiReducer], (multi) => multi.members);

export const selectMessages = createSelector([selectMultiReducer], (multi) => multi.messages);
