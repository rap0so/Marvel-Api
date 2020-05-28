import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Paragraph from '.';

describe('Paragraph', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const { getByText } = render(<Paragraph>Text test</Paragraph>);

    expect(getByText('Text test')).toBeInTheDocument();
  });

  it('should render styled props', () => {
    const { getByText } = render(
      <Paragraph>Not so big text example</Paragraph>,
    );

    const titleElement = getByText('Not so big text example');
    const stylesFromTitle = window.getComputedStyle(titleElement);

    expect(stylesFromTitle.getPropertyValue('overflow')).toBe('hidden');
    expect(stylesFromTitle.getPropertyValue('text-align')).toBe('center');
  });
});
