import * as React from 'react';
import { Layout } from '@components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { hotjar } from 'react-hotjar';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        hotjar.initialize(2997008, 6);
    }, []);

    return (
        <>
            <Head>
                <title>Lukasz Karasinski</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
