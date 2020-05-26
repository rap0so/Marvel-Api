import React, { FC } from 'react';
import { Box, Flex } from 'reflexbox';

import Image from 'components/Image';

import { TCardProps } from './types';

const Card: FC<TCardProps> = ({
  description = '',
  name = '',
  thumbnail,
  title = '',
}) => {
  const denomination = name || title;
  const detail = description || 'No description provided yet';

  return (
    <Flex flexDirection="column" p={1}>
      <Box>
        <h2>{denomination}</h2>
      </Box>
      <Box>
        <Image src={thumbnail} alt={denomination} />
      </Box>
      {description && <Box>{detail}</Box>}
    </Flex>
  );
};

export default Card;
