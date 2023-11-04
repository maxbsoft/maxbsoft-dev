import React, { useRef } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { appWithTranslation } from 'next-i18next';
import { AppProvider } from '@/context/appContext';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'normalize.css';
import 'nprogress/nprogress.css';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/globals.scss';

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface MyAppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  pageProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dehydratedState: any;
  };
}
function MyApp({ Component, pageProps }: MyAppProps) {
  const queryClientRef = useRef<QueryClient | null>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
          <meta name="description" content="description" />
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="keywords"
            content="Max Balukh, Mobile App Developer, FrontEnd developer, React Native Developer, React JS Developer, JavaScript Developer, Software Engineer"
          />
          <meta name="author" content="Max Balukh" />
          <meta name="theme-color" content="#111724" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <title>MaxBalukh - Mobile App Developer</title>
        </Head>
        <ParallaxProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ParallaxProvider>
      </AppProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
