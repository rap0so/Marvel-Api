import { TMarvelPublicTypes } from 'types';

export type TSelectDataProps = {
  onSelect: (selectedValue?: TMarvelPublicTypes) => void;
  options: {
    text: string;
    value: TMarvelPublicTypes;
  }[];
};
