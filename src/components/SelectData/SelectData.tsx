import React, { ChangeEvent, FC } from 'react';

import { TSelectDataProps } from './types';
import SelectDataStyled from './SelectDataStyled';
import { TMarvelPublicTypes } from 'types';

const SelectData: FC<TSelectDataProps> = ({ options, onSelect }) => {
  const onChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as TMarvelPublicTypes;
    onSelect(selectedValue);
  };

  return (
    <SelectDataStyled onChange={onChangeCallback}>
      {options.map((option, idx: number) => (
        <option key={idx} value={option.value}>
          {option.text}
        </option>
      ))}
    </SelectDataStyled>
  );
};

export default SelectData;
