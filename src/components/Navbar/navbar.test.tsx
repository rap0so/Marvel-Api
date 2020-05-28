import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Navbar from '.';
import { ThemeProvider } from 'styled-components';
import theme from 'providers/theme';

describe('Navbar', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const fakeFn = jest.fn();

    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Navbar onSearch={fakeFn} />
      </ThemeProvider>,
    );

    expect(getByTestId('navbar')).toBeInTheDocument();
    expect(getByText('Marvel Api Consumer')).toBeInTheDocument();
  });
});
