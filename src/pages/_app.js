/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Head } from 'next/document';
import GlobalStyle from './globalStyles';
import theme from '../theme';
import PreviewImage from '../public/preview-image.png';
import 'typeface-blinker';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>FSAYCON.DEV - Personal Website of Franrey Saycon</title>
      <meta
        name="description"
        content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
      and building website/mobile apps."
      />
      <link rel="canonical" href="https://fsaycon.dev/" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Homepage" />
      <meta
        property="og:description"
        content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
      and building website/mobile apps."
      />
      <meta property="og:image" content={PreviewImage} />
      <meta property="og:url" content="https://fsaycon.dev/" />
      <meta property="og:site_name" content="FSAYCON.DEV - Personal Website of Franrey Saycon" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
