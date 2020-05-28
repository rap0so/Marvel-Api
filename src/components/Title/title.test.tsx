import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Title from '.';

describe('Title', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const { getByText } = render(<Title>Title test</Title>);

    expect(getByText('Title test')).toBeInTheDocument();
  });

  it('should receive title props', () => {
    const { getByText } = render(<Title fontSize="16px">Big Title</Title>);

    const titleElement = getByText('Big Title');
    const stylesFromTitle = window.getComputedStyle(titleElement);

    expect(stylesFromTitle.getPropertyValue('font-size')).toBe('16px');
    expect(stylesFromTitle.getPropertyValue('font-weight')).toBe('bold');
  });
});
