import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Counter from './counter.component';
import { store } from '../../store/store';
import theme from '../../style/theme';

describe('counter', () => {
  test('rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('Add Amount')).toBeInTheDocument();

    const countValue = screen.getByRole('document');

    expect(countValue).toHaveTextContent('0');
    fireEvent.click(screen.getByText('+'));
    expect(countValue).toHaveTextContent('1');
  });

  test('비동기 테스트', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>
    );
    const countValue = screen.getByRole('document');
    const addAsyncButton = screen.getByText('Add Async');

    expect(countValue).toHaveTextContent('1');
    expect(screen.getByRole('textbox')).toHaveValue('2');

    fireEvent.click(addAsyncButton);

    await waitFor(() => expect(countValue).toHaveTextContent('3'));
  });
});
