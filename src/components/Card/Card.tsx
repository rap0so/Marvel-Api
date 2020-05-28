import React, { FC } from 'react';
import { Box } from 'reflexbox';

import ClickableBox from 'components/ClickableBox';
import Image from 'components/Image';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';

import { TCardProps } from './types';

const Card: FC<TCardProps> = ({
  description = '',
  isSerie,
  name = '',
  onClick,
  title,
  thumbnail,
  urls,
}) => {
  const denomination = name || title;
  const detail = description || 'No description provided yet';
  const firstUrl = urls[0].url;

  const onClickCallback = isSerie
    ? () => window.location.replace(`${firstUrl}`)
    : onClick;

  return (
    <ClickableBox p={2} onClick={onClickCallback}>
      <Box>
        <Title color="#fff" fontSize="16px">
          {denomination}
        </Title>
      </Box>

      <Box>
        <Image src={thumbnail} alt={denomination} />
      </Box>

      <Box>
        <Paragraph>{detail}</Paragraph>
      </Box>
    </ClickableBox>
  );
};

export default Card;
