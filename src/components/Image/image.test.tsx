import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Image from '.';

import notFoundImage from './not-found.jpg';

describe('Image', () => {
  const fakeFn = jest.fn();
  const fakeProps = {
    alt: 'fake image',
    src: {
      extension: '',
      path: notFoundImage,
    },
  };

  afterEach(() => {
    fakeFn.mockClear();
    cleanup();
  });

  it('should render cmp', () => {
    const { container } = render(<Image {...fakeProps} />);

    const ImageElement = container.firstElementChild;

    expect(ImageElement?.tagName).toBe('IMG');
    expect(ImageElement).toBeInTheDocument();
  });

  it('should render with basic style when render', () => {
    const { container } = render(<Image {...fakeProps} />);

    const ImageElement = container.firstElementChild;

    const stylesFromImage = window.getComputedStyle(ImageElement!);

    expect(stylesFromImage.getPropertyValue('display')).toBe('block');
    expect(stylesFromImage.getPropertyValue('max-width')).toBe('100%');
    expect(stylesFromImage.getPropertyValue('width')).toBe('100%');
  });

  it('should render received image without extension', () => {
    const { container } = render(<Image {...fakeProps} />);

    const ImageElement = container.firstElementChild;

    expect(ImageElement?.getAttribute('src')).toBe(notFoundImage);
  });

  it('should render received image with extension', () => {
    const newFakeProps = {
      alt: 'fake image',
      src: {
        extension: 'png',
        path: 'fakeImage',
      },
    };

    const { container } = render(<Image {...newFakeProps} />);

    const ImageElement = container.firstElementChild;

    expect(ImageElement?.getAttribute('src')).toBe('fakeImage.png');
  });

  it('should render not found image when not receive src', () => {
    const { container } = render(<Image alt="fake image" />);

    const ImageElement = container.firstElementChild;

    expect(ImageElement?.getAttribute('src')).toBe(notFoundImage);
  });
});
