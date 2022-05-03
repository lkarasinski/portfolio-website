import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const GoldfishLivePage: NextPage = () => {
    return (
        <Head>
            <meta
                httpEquiv="refresh"
                content="0;url=https://www.reklama-goldfish.pl/"
            />
        </Head>
    );
};

export default GoldfishLivePage;
