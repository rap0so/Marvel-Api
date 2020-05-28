import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ContainerStyled from 'components/Container/ContainerStyled';
import { Box } from 'reflexbox';

const NotFound: FC = () => (
  <ContainerStyled flexDirection="column" textAlign="center" mt={6}>
    <Box color="white">
      <h1>Page Not Found</h1>
    </Box>
    <Box>
      <p>
        Do you wanna <Link to="/">get back to home?</Link>
      </p>
    </Box>
  </ContainerStyled>
);

export default NotFound;
