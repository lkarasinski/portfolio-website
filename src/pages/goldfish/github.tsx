import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const GoldfishGithubPage: NextPage = () => {
    return (
        <Head>
            <meta
                httpEquiv="refresh"
                content="0;url=https://github.com/lkarasinski/goldfish"
            />
        </Head>
    );
};

export default GoldfishGithubPage;
