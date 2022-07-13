import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectMainReducer = (state: RootState) => state.main;

export const selectGetRandomChracter = createSelector([selectMainReducer], (main) => main.getRandomChracter);

export const selectNickname = createSelector([selectMainReducer], (main) => main.nickname);

export const selectCharacterImgCode = createSelector([selectMainReducer], (main) => main.characterImageCode);

export const selectTriangleImgCode = createSelector([selectMainReducer], (main) => main.triangleImageCode);

export const selectEmail = createSelector([selectMainReducer], (main) => main.email);
