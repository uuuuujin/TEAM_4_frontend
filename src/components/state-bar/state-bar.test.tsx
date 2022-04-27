import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import StateBar from './state-bar.component';
import { store } from '../../store/store';
import theme from '../../style/theme';

describe('state-bar', () => {
  test('rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StateBar>5분 휴식합니다.</StateBar>
        </Provider>
      </ThemeProvider>
    );
    expect(screen.getByText('상태 바 테스트')).toBeInTheDocument();
  });
});
