import * as React from 'react';
import { Layout } from '@components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { hotjar } from 'react-hotjar';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        hotjar.initialize(2997008, 6);
    }, []);

    return (
        <>
            {/* GOOGLE ANALYTICS */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-YM02GJY703"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YM02GJY703');
                `}
            </Script>
            {/* GOOGLE ANALYTICS END*/}
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
