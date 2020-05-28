import { cleanup, render } from '@testing-library/react';
import React from 'react';

import FixedWrapper from '.';

describe('FixedWrapper', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const { container } = render(
      <FixedWrapper>Something inside the wrapper</FixedWrapper>,
    );

    const FixedWrapperElement = container.firstElementChild;

    expect(FixedWrapperElement).toBeInTheDocument();
  });

  it('should be able to receive position style props', () => {
    const { container } = render(
      <FixedWrapper position="fixed">Something Fixed</FixedWrapper>,
    );

    const FixedWrapperElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(FixedWrapperElement!);

    expect(stylesFromTitle.getPropertyValue('position')).toBe('fixed');
  });

  it('should style based on props', () => {
    const { container } = render(
      <FixedWrapper
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="center"
        position="fixed"
        width="100%"
      >
        Big Title
      </FixedWrapper>,
    );

    const FixedWrapperElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(FixedWrapperElement!);

    expect(stylesFromTitle.getPropertyValue('align-items')).toBe('center');
    expect(stylesFromTitle.getPropertyValue('display')).toBe('flex');
    expect(stylesFromTitle.getPropertyValue('height')).toBe('100%');
    expect(stylesFromTitle.getPropertyValue('justify-content')).toBe('center');
    expect(stylesFromTitle.getPropertyValue('position')).toBe('fixed');
    expect(stylesFromTitle.getPropertyValue('width')).toBe('100%');
  });
});
