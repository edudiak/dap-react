import { ViewportProvider } from '@/context/ViewPortContext';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import Head from 'next/head';

import Layout from '@/components/layout';

import '@/styles/globals.scss';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${dmSans.style.fontFamily};
          }
          .font-plex-mono {
            font-family: ${plexMono.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>Dog Aging Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dap-favicon.png" />
      </Head>
      {/* <ViewportProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </ViewportProvider> */}
    </>
  );
}
