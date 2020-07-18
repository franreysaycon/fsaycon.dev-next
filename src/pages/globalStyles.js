import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    background-color: ${({ theme }) => theme.colors.blue};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  @media (min-width: 320px) {
    html {
      font-size: calc(16px + 4 * (100vw - 320px) / 880);
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 24px;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
