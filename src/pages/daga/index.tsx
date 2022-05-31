import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const DagaPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Daga"
                video="daga.mp4"
                colorScheme={colors.daga}
                technologies={[
                    'react.svg',
                    'typescript.svg',
                    'next.js.svg',
                    'styledComponents.svg',
                    'awsAmplify.svg',
                ]}
            >
                <p>
                    Simple business card website for a local company
                    specializing in garbage packaging solutions.
                </p>
            </ProjectPage>
        </PageTransition>
    );
};

export default DagaPage;
