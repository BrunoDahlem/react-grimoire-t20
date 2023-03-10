import React from 'react';

import { GlobalStyles } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export type AppProps = {
  Component: React.JSXElementConstructor<unknown>;
  pageProps: object;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
