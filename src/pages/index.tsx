import * as React from 'react';
import type { NextPage } from 'next';
import {
    ContactPanel,
    HeroPanel,
    MyWorkPanel,
    PageTransition,
    TechnologyPanel,
    TextSection,
} from '@components';
import { colors } from '@constants';

const Home: NextPage = () => {
    return (
        <PageTransition>
            <HeroPanel />
            <MyWorkPanel />
            <TechnologyPanel
                title={'Technologies I use'}
                colorScheme={colors.goldfish}
                images={[
                    'typescript.svg',
                    'javascript.svg',
                    'react.svg',
                    'next.js.svg',
                    'gatsby.svg',
                    'nx.svg',
                    'firebase.svg',
                    'formik.svg',
                    'framerMotion.svg',
                    'styledComponents.svg',
                    'vanillaExtract.svg',
                    'xState.svg',
                    'cypress.svg',
                    'node.svg',
                    'awsAmplify.svg',
                    'awsLambda.svg',
                    'vercel.svg',
                ]}
            />
            <TextSection title={'About me'}>
                <p>
                    Hi, I&#39;m Łukasz and I&#39;m a self-taught front-end web
                    developer based in Poland. I specialize in web development
                    using React and Typescript, and I&#39;ve been doing it for
                    over a year now.
                    <br /> I like to learn new technologies, and currently
                    I&#39;m trying out Remix.run.
                    <br />
                    In the future I plan to learn rust and use it to create Web
                    Assembly apps.
                </p>
            </TextSection>
            <ContactPanel />
        </PageTransition>
    );
};

export default Home;
