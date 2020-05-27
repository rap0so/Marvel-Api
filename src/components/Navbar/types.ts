import { TSearchInputProps } from 'components/SearchInput/types';
import { TSelectDataProps } from 'components/SelectData/types';

export type TNavbarProps = {
  onSearch: TSearchInputProps['onSearch'];
  onSelect: TSelectDataProps['onSelect'];
  optionsToSelect: TSelectDataProps['options'];
};
