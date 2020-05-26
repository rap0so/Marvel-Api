import React, { FC } from 'react';
import { Box, Flex } from 'reflexbox';

import SearchInput from 'components/SearchInput';

import { TNavbarProps } from './types';

const Navbar: FC<TNavbarProps> = ({ onSearch }) => (
  <Flex justifyContent="space-between">
    <Box fontWeight="bold" fontSize="18px">
      Home
    </Box>

    <Box>
      <SearchInput onSearch={onSearch} />
    </Box>
  </Flex>
);

export default Navbar;
