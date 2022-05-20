import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectModalReducer = (state: RootState) => state.modal;

export const selectIsMultiModeSelectModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isMultiModeSelectModalOpen
);
