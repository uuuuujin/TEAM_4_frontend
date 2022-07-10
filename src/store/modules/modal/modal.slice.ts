import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isExplainModalOpen: boolean;
  isSingleModeSelectModalOpen: boolean;
  isMultiModeSelectModalOpen: boolean;
  isProfileModalOpen: boolean;
  isResultModalOpen: boolean;
  isSocialLoginModalOpen: boolean;
  isGuideModalOpen: boolean;
  isExitModalOpen: boolean;
}

const initialState: ModalState = {
  isExplainModalOpen: false,
  isSingleModeSelectModalOpen: false,
  isMultiModeSelectModalOpen: false,
  isProfileModalOpen: false,
  isResultModalOpen: false,
  isSocialLoginModalOpen: false,
  isGuideModalOpen: false,
  isExitModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    radioExplainModal: (state) => {
      state.isExplainModalOpen = !state.isExplainModalOpen;
    },
    radioSingleModeSelectModal: (state) => {
      state.isSingleModeSelectModalOpen = !state.isSingleModeSelectModalOpen;
    },
    radioMultiModeSelectModal: (state) => {
      state.isMultiModeSelectModalOpen = !state.isMultiModeSelectModalOpen;
    },
    radioResultModal: (state) => {
      state.isResultModalOpen = !state.isResultModalOpen;
    },
    radioGuideModal: (state) => {
      state.isGuideModalOpen = !state.isGuideModalOpen;
    },
    radioExitModal: (state) => {
      state.isExitModalOpen = !state.isExitModalOpen;
    },
  },
});

export const modalAction = modalSlice.actions;

export default modalSlice.reducer;
