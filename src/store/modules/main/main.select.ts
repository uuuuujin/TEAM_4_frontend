import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectMainReducer = (state: RootState) => state.main;

export const selectGetRandomChracter = createSelector([selectMainReducer], (main) => main.getRandomChracter);

// export const selectNickname = createSelector([selectMainReducer], (main) => main.nickname);

// export const selectImgCode = createSelector([selectMainReducer], (main) => main.imgCode);
