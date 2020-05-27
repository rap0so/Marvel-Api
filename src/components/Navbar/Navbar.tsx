import React, { FC } from 'react';
import { Box, Flex } from 'reflexbox';

import SearchInput from 'components/SearchInput';
import SelectData from 'components/SelectData';

import { TNavbarProps } from './types';
import Title from 'components/Title';

const Navbar: FC<TNavbarProps> = ({
  onSearch,
  onSelect,
  optionsToSelect: options,
}) => (
  <Box mb={4}>
    <Flex alignItems="center" justifyContent="space-between" py={3}>
      <Title fontSize="18px">Home</Title>

      <Box>
        <SearchInput onSearch={onSearch} />
        <SelectData onSelect={onSelect} options={options} />
      </Box>
    </Flex>
    <hr />
  </Box>
);

export default Navbar;
