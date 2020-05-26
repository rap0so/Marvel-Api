import React, { FC } from 'react';
import { debounce } from 'throttle-debounce';

import { TSearchInputProps } from './types';
import SearchInputStyled from './SearchInputStyled';

const TIME_TO_DEBOUNCE = 800;

const SearchInput: FC<TSearchInputProps> = ({ onSearch }) => {
  const debouncedOnSearch = debounce(TIME_TO_DEBOUNCE, (typedValue: string) =>
    onSearch(typedValue),
  );

  const onDebouncedonSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    debouncedOnSearch(event.currentTarget.value);

  return <SearchInputStyled onChange={onDebouncedonSearch} />;
};

export default SearchInput;
