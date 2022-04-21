import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Modal from './modal.component';
import { store } from '../../store/store';
import theme from '../../style/theme';

describe('modal', () => {
  test('rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Modal isOpen onClose={() => {}} title="모달 테스트">
            <div>content</div>
          </Modal>
        </Provider>
      </ThemeProvider>
    );
    expect(screen.getByText('모달 테스트')).toBeInTheDocument();
  });
});
