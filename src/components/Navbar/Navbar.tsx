import React, { FC } from 'react';
import { Box, Flex } from 'reflexbox';

import SearchInput from 'components/SearchInput';

import { TNavbarProps } from './types';
import Title from 'components/Title';

const Navbar: FC<TNavbarProps> = ({ onSearch }) => (
  <Box data-testid="navbar" mb={4}>
    <Flex alignItems="center" justifyContent="space-between" py={3}>
      <Title fontSize="18px">Marvel Api Consumer</Title>

      <Box>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Flex>
    <hr />
  </Box>
);

export default Navbar;
