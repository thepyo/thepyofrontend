import * as React from 'react';
import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/default';

import axiosClient from '@/axiosConfig/axiosClient';
import { SWRConfig } from 'swr';

import createEmotionCache from '@/theme/createEmotionCache';

export default function MyApp(props) {

  const cache = createEmotionCache();

  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <SWRConfig value={{ fetcher: url => axiosClient.get(url), shouldRetryOnError: true }}>
            <CssBaseline />
            <Component {...pageProps} />
          </SWRConfig>
        </ThemeProvider>
      </CacheProvider>
    </AppCacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};