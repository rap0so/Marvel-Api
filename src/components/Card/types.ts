import { TGeneralCallback, TMarvelPublicResult } from 'types';

export type TCardProps = {
  description?: TMarvelPublicResult['description'];
  isSerie?: boolean;
  name?: TMarvelPublicResult['name'];
  onClick?: TGeneralCallback;
  thumbnail?: TMarvelPublicResult['thumbnail'];
  title?: TMarvelPublicResult['title'];
  urls: TMarvelPublicResult['urls'];
};
