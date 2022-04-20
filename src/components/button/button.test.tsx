import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Button from './button.component';
import { store } from '../../store/store';
import theme from '../../style/theme';

describe('button', () => {
  test('rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Button>test 버튼</Button>
        </Provider>
      </ThemeProvider>
    );
    expect(screen.getByText('test 버튼')).toBeInTheDocument();
  });
});
