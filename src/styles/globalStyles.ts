import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%; /* para usar rem como pixel */
  }
  body {
    background: ${theme.colors.ligthOrange};
    box-shadow: inset 5px 5px 20px ${theme.colors.secondaryColor};
    min-height: 100vh;
  }
`;
