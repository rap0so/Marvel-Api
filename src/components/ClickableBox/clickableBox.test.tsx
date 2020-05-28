import { cleanup, render } from '@testing-library/react';
import React from 'react';

import ClickableBox from '.';

describe('ClickableBox', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const { container } = render(<ClickableBox>Any text</ClickableBox>);

    const ClickableBoxElement = container.firstElementChild;

    expect(ClickableBoxElement).toBeInTheDocument();
  });

  it('should have cursor pointer on style props', () => {
    const { container } = render(<ClickableBox>Big Title</ClickableBox>);

    const ClickableBoxElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(ClickableBoxElement!);

    expect(stylesFromTitle.getPropertyValue('cursor')).toBe('pointer');
  });
});
