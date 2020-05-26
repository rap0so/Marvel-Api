import { TTheme } from './types';

const colors = {
  base: '#a71e1e',
  dark: '#1f1f1f',
  light: '#F8F8F9',
  semiDark: '#252525',
};

const theme: TTheme = {
  colors,
  boxShadow: '0 1px 4px -1px #808080',
  texts: {
    normal: {
      color: colors.light,
      fontSize: '18px',
      fontWeight: 'normal',
    },
    title: {
      color: colors.light,
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
};

export default theme;
