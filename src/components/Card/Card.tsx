import React, { FC } from 'react';
import { Box } from 'reflexbox';

import Image from 'components/Image';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';

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
    <Box p={2}>
      <Box>
        <Title color="#fff" fontSize="16px">
          {denomination}
        </Title>
      </Box>
      <Box>
        <Image src={thumbnail} alt={denomination} />
      </Box>
      {description && (
        <Box>
          <Paragraph>{detail}</Paragraph>
        </Box>
      )}
    </Box>
  );
};

export default Card;
