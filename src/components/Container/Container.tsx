import React, { FC } from 'react';
import { BoxProps } from 'reflexbox';

import ContainerStyled from './ContainerStyled';

const Container: FC<BoxProps> = (props) => (
  <ContainerStyled m="auto" maxWidth="1200px" p={[2, 3]} {...props}>
    {props.children}
  </ContainerStyled>
);

export default Container;
