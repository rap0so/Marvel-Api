import React, { FC } from 'react';

import ContainerStyled from './ContainerStyled';

const Container: FC = ({ children }) => (
  <ContainerStyled m="auto" maxWidth="1200" p={[2, 3]}>
    {children}
  </ContainerStyled>
);

export default Container;
