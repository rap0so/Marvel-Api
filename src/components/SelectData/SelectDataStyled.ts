import styled from 'styled-components';

const SelectDataStyled = styled.select(({ theme }) => ({
  '&:hover, &:focus': {
    backgroundColor: theme.colors.semiDark,
    borderColor: theme.colors.light,
  },
  background: 'transparent',
  border: '1px solid',
  borderColor: theme.colors.semiDark,
  borderRadius: '3px',
  color: '#fff',
  cursor: 'pointer',
  minWidth: '260px',
  padding: '10px 15px',
}));

export default SelectDataStyled;
