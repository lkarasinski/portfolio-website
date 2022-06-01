import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const BienbotPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Bienbot"
                video="bienbot.mp4"
                colorScheme={colors.bienbot}
                technologies={[
                    'react.svg',
                    'typescript.svg',
                    'nx.svg',
                    'next.js.svg',
                    'node.svg',
                    'styledComponents.svg',
                    'formik.svg',
                    'firebase.svg',
                    'cypress.svg',
                    'awsAmplify.svg',
                ]}
                liveDisabled
            >
                <p>
                    Work in progress
                    <br />
                    <br />
                    This project consists of a Frontend made in Next.js, a
                    Backend made in Express and a Discord bot made in
                    Discord.js.
                    <br />
                    <br />
                    The dashboard was designed by me and provides easy insight
                    into the statistics of discord servers. The UI Component
                    Library was created using Storybook, Styled Components and
                    Framer Motion.
                    <br />
                    <br />
                    So far, only the Dashboard and the User&#39;s page are done,
                    but work on the design of the other pages is underway. And
                    since I&#39;m not a UI Designer, it takes the longest time
                    to create.
                    <br />
                    <br />
                    When all the pages are finished, we will implement state
                    management using the Redux Toolkit library.
                    <br />
                    <br />I am creating this project with{' '}
                    <a target="blank" href="https://github.com/mattponiat">
                        @mattponiat
                    </a>
                </p>
            </ProjectPage>
        </PageTransition>
    );
};

export default BienbotPage;
