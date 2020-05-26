import React, { FC } from 'react';

import { MAX_WIDTH_CONTAINER } from 'consts/styles';

import ContainerStyled from './ContainerStyled';

const Container: FC = ({ children }) => (
  <ContainerStyled p={[2, 3]} maxWidth={MAX_WIDTH_CONTAINER}>
    {children}
  </ContainerStyled>
);

export default Container;
