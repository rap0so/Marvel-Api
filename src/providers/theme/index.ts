import { TTheme } from './types';

const colors = {
  base: '#404040',
  dark: '#F8F8F9',
  light: '#39b2c2',
};

const numberFromZeroToHundred = [...Array(10)].map((_, idx) => String(idx * 5));

const theme: TTheme = {
  colors,
  boxShadow: '0 1px 4px -1px #808080',
  spaces: numberFromZeroToHundred,
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
