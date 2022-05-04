import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const GoldfishPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Goldfish"
                video="goldfish.mp4"
                colorScheme={colors.goldfish}
                technologies={[
                    'react.svg',
                    'typescript.svg',
                    'gatsby.svg',
                    'vanillaExtract.svg',
                    'formik.svg',
                    'framerMotion.svg',
                    'XState.svg',
                    'cypress.svg',
                    'awsAmplify.svg',
                    'awsLambda.svg',
                ]}
            >
                <p>
                    This is a commercial project for an Out of House
                    Advertisment agency. This project was designed entirely by
                    me. <br /> The goal of this website is to draw the
                    user&#39;s attention and remember it, while providing all
                    the necessary information. <br /> The scroll parallax
                    animation was initially built with locomotive-scroll, but
                    Gatsby had weird issues with this library, so I&#39;ve
                    decided to switch to Framer Motion, which did not cause any
                    problems.
                    <br /> The contact form is build with Formik, XState for
                    handling the state and yup for validation. <br />
                    The backend code for the contact form is running on AWS
                    Lambda, and the website is hosted on AWS Amplify.
                </p>
            </ProjectPage>
        </PageTransition>
    );
};

export default GoldfishPage;
