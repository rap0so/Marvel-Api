export type TTheme = {
  boxShadow: string;
  colors: {
    base: string;
    dark: string;
    light: string;
    semiDark: string;
  };
  texts: {
    normal: {
      color: string;
      fontSize: string;
      fontWeight: string;
    };
    title: {
      color: string;
      fontSize: string;
      fontWeight: string;
    };
  };
};
