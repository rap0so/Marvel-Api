import { TImageProps } from 'components/Image/types';

export type TCardProps = {
  description?: string;
  name?: string;
  thumbnail?: TImageProps['src'];
  title?: string;
};
