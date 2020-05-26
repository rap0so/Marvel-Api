export type TTheme = {
  boxShadow: string;
  colors: {
    light: string;
    dark: string;
    base: string;
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
