import styled, { StyledComponent } from 'styled-components';
import { compose, fontSize, FontSizeProps } from 'styled-system';

const Title: StyledComponent<'h2', any, FontSizeProps, never> = styled.h2(
  compose(fontSize),
);

export default Title;
