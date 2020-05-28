import { cleanup, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import Card from '.';
import { TCardProps } from './types';

describe('Card', () => {
  const fakeFn = jest.fn();

  const fakeProps: TCardProps = {
    description: 'Card with description',
    name: 'Name of card',
    onClick: fakeFn,
    thumbnail: {
      extension: '',
      path: '',
    },
    title: 'Title of card',
    urls: [
      {
        type: 'x',
        url: 'https://google.com',
      },
    ],
  };

  afterEach(() => {
    fakeFn.mockClear();
    cleanup();
  });

  it('should render cmp', () => {
    const { container } = render(<Card {...fakeProps} />);

    const CardElement = container.firstElementChild;

    expect(CardElement).toBeInTheDocument();
  });

  it('should render received props', () => {
    const { getByText } = render(<Card {...fakeProps} />);

    expect(getByText('Card with description')).toBeTruthy();
    expect(getByText('Name of card')).toBeTruthy();
  });

  it('should render fallback description', () => {
    delete fakeProps.description;

    const { getByText } = render(<Card {...fakeProps} />);

    expect(getByText('Card with description')).toBeTruthy();
  });

  it('should invoke callback when clicked and isSerie', () => {
    const { container } = render(<Card {...fakeProps} />);
    const CardElement = container.firstElementChild;

    fireEvent.click(CardElement!);

    expect(fakeFn).toHaveBeenCalled();
  });

  it('should invoke callback when clicked and isSerie', () => {
    const { container } = render(<Card {...fakeProps} />);
    const CardElement = container.firstElementChild;

    fireEvent.click(CardElement!);

    expect(fakeFn).toHaveBeenCalled();
  });

  it.only('should replace location to series page when clicked and !isSerie', () => {
    fakeProps.isSerie = true;
    // @ts-ignore
    delete window.location;
    // @ts-ignore
    window.location = { replace: fakeFn };

    const { container } = render(<Card {...fakeProps} />, {
      wrapper: MemoryRouter,
    });

    const CardElement = container.firstElementChild;

    fireEvent.click(CardElement!);

    expect(fakeFn).toHaveBeenCalled();
    expect(fakeFn).toHaveBeenCalledWith('https://google.com');
  });
});
