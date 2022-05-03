import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const BienbotPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Bienbot"
                video="placeholder.mp4"
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
            >
                <p>Work in progress</p>
            </ProjectPage>
        </PageTransition>
    );
};

export default BienbotPage;
