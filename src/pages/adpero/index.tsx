import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const AdperoPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Adpero"
                video="adpero.mp4"
                colorScheme={colors.adpero}
                technologies={[
                    'react.svg',
                    'typescript.svg',
                    'next.js.svg',
                    'nx.svg',
                    'firebase.svg',
                    'styledComponents.svg',
                    'formik.svg',
                    'framerMotion.svg',
                    'cypress.svg',
                    'vercel.svg',
                ]}
            >
                <p>
                    Makes it easy to organize your journeys by displaying all
                    the important information in one place. Allows you to share
                    your plans with friends simply by inviting them to your
                    journey. Gives you the ability to create polls to make
                    decisions together. Converts total cost of your journey to
                    your currency
                    <br />
                    <br />
                    This app was designed entirely by me, and since it&#39;s
                    very interactive, there were many UX/UI problems that I had
                    to solve. Because of that, this project was rebuilt a couple
                    of times, each time using a different tech stack. Eventually
                    I settled with Next.js as the front-end framework, and the
                    app was created using Nx Monorepo. While coding this project
                    I&#39;ve overcome many challenges such as creating and
                    validating dynamic forms, handling javascript dates, and
                    adding concurrent support for offline and online data
                    storage. This is the biggest app I&#39;ve created as for
                    now, and I plan to add more features in the future.
                    <br />
                    Currently I&#39;m working on UI redesign, since this version
                    of the app doesn&#39;t provide the best user experience
                    <br />
                    <br />
                    In the far future I plan to add a PWA, and allow users to
                    store their images, and journals on the website.
                </p>
            </ProjectPage>
        </PageTransition>
    );
};

export default AdperoPage;
