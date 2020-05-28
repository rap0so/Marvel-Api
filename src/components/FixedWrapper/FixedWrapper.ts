import { Box, BoxType } from 'reflexbox';
import styled, { StyledComponent } from 'styled-components';
import { compose, position, PositionProps } from 'styled-system';

const FixedWrapper: StyledComponent<
  BoxType,
  any,
  PositionProps,
  never
> = styled(Box)(compose(position));

export default FixedWrapper;
