import React, { FC } from 'react';

import ImageStyled from './ImageStyled';
import notFoundImage from './not-found.jpg';
import { TImageProps } from './types';

const notFoundImageSrc = {
  extension: '',
  path: notFoundImage,
};

const Image: FC<TImageProps> = ({
  alt = 'Marvel API',
  src = notFoundImageSrc,
}) => {
  const extension = src.extension ? `.${src.extension}` : '';
  const fullPath = `${src.path}${extension}`;

  return <ImageStyled alt={alt} src={fullPath} data-testid="image" />;
};

export default Image;
