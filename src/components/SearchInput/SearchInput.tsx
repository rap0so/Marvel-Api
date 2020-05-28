import React, { FC } from 'react';
import { debounce } from 'throttle-debounce';

import { TSearchInputProps } from './types';
import SearchInputStyled from './SearchInputStyled';

export const TIME_TO_DEBOUNCE: number = 800;

const SearchInput: FC<TSearchInputProps> = ({ onSearch }) => {
  const debouncedOnSearch = debounce(TIME_TO_DEBOUNCE, (typedValue: string) =>
    onSearch(typedValue),
  );

  const onDebouncedonSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    event.currentTarget?.value && debouncedOnSearch(event.currentTarget.value);

  return (
    <SearchInputStyled
      data-testid="input"
      onChange={onDebouncedonSearch}
      placeholder="Search here..."
    />
  );
};

export default SearchInput;
