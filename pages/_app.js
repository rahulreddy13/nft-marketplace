import '../styles/globals.css'
import * as React from 'react';

import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Layout from '../src/components/Layout';
import theme from '../src/Theme';
import createEmotionCache from '../src/createEmotionCache';
import { Provider } from 'react-redux'

import { wrapper } from '../store';


const clientSideEmotionCache = createEmotionCache();
  
function MyApp(props) {
    const { Component, emotionCache = 
        clientSideEmotionCache, pageProps } = props;
  
    return (
        // <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" 
                        content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>                  
                    <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                </ThemeProvider>
            </CacheProvider>
        // </Provider>
    );
}

export default wrapper.withRedux(MyApp)
  
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};