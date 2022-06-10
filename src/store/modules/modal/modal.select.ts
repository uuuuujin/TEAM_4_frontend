import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectModalReducer = (state: RootState) => state.modal;

export const selectIsMultiModeSelectModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isMultiModeSelectModalOpen
);

export const selectIsSingleModeSelectModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isSingleModeSelectModalOpen
);

export const selectIsGuideModalOpen = createSelector([selectModalReducer], (modal) => modal.isGuideModalOpen);
