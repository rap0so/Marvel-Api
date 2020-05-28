import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'providers/theme';

import SearchInput from '.';
import { TIME_TO_DEBOUNCE } from './SearchInput';

jest.useFakeTimers();

describe('SearchInput', () => {
  const fakeFn = jest.fn();

  afterEach(() => {
    fakeFn.mockClear();
    cleanup();
  });

  it('should render cmp', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SearchInput onSearch={fakeFn} />
      </ThemeProvider>,
    );

    const SearchInputElement = container.firstElementChild;

    expect(SearchInputElement).toBeInTheDocument();
  });

  it('should render with basic style when render', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput onSearch={fakeFn} />
      </ThemeProvider>,
    );

    const SearchInputElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(SearchInputElement!);

    expect(getByTestId('input').getAttribute('placeholder')).toBe(
      'Search here...',
    );
    expect(stylesFromTitle.getPropertyValue('cursor')).toBe('pointer');
    expect(stylesFromTitle.getPropertyValue('background')).toBe('transparent');
    expect(stylesFromTitle.getPropertyValue('border')).toBe('1px solid');
    expect(stylesFromTitle.getPropertyValue('border-color')).toBe(
      theme.colors.semiDark,
    );
    expect(stylesFromTitle.getPropertyValue('border-radius')).toBe('3px');
    expect(stylesFromTitle.getPropertyValue('color')).toBe(
      'rgb(255, 255, 255)',
    );
    expect(stylesFromTitle.getPropertyValue('cursor')).toBe('pointer');
    expect(stylesFromTitle.getPropertyValue('min-width')).toBe('260px');
    expect(stylesFromTitle.getPropertyValue('padding')).toBe('10px 15px');
  });

  it('should call onSearch when type', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput onSearch={fakeFn} />
      </ThemeProvider>,
    );

    const SearchInputElement = getByTestId('input') as HTMLInputElement;

    fireEvent.change(SearchInputElement, { target: { value: 'A' } });

    expect(SearchInputElement.value).toBe('A');

    waitFor(
      () => {
        expect(fakeFn).toHaveBeenCalled();
        expect(fakeFn).toHaveBeenCalledWith('A');
      },
      { timeout: TIME_TO_DEBOUNCE + 100 },
    );
  });
});
