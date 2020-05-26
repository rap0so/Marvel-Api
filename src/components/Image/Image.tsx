import React, { FC } from 'react';
import notFoundImage from './not-found.jpg';
import { TImageProps } from './types';

const notFoundImageSrc = {
  extension: '',
  path: notFoundImage,
};

const Image: FC<TImageProps> = ({
  alt = 'Marvel API',
  src = notFoundImageSrc,
}) => <img alt={alt} src={`${src.path}.${src.extension}`} />;

export default Image;
