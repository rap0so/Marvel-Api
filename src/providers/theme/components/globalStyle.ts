import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  '*': {
    outline: '0',
    transition: 'all .2s ease',
  },
  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#141414',
    color: '#f5f5f1',
    fontFamily:
      'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    height: '100vh',
    margin: 0,
  },
  code: {
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  },
});

export default GlobalStyle;
