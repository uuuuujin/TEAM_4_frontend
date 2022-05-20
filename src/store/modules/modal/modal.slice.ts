import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isExplainModalOpen: boolean;
  isSingleModeSelectModalOpen: boolean;
  isMultiModeSelectModalOpen: boolean;
  isProfileModalOpen: boolean;
  isResultModalOpen: boolean;
  isSocialLoginModalOpen: boolean;
}

const initialState: ModalState = {
  isExplainModalOpen: false,
  isSingleModeSelectModalOpen: false,
  isMultiModeSelectModalOpen: false,
  isProfileModalOpen: false,
  isResultModalOpen: false,
  isSocialLoginModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    radioMultiModeSelectModal: (state) => {
      state.isMultiModeSelectModalOpen = !state.isMultiModeSelectModalOpen;
    },
    radioSingleModeSelectModal: (state) => {
      state.isSingleModeSelectModalOpen = !state.isSingleModeSelectModalOpen;
    },
  },
});

export const modalAction = modalSlice.actions;

export default modalSlice.reducer;
