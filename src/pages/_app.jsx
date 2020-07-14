/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import theme from '../theme';
import 'typeface-lobster';
import 'typeface-oswald';

const MyApp = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
