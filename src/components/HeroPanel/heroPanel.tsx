import {
    EnvelopeClosedIcon,
    EnvelopeOpenIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import * as React from 'react';
import { breakpoints, colors } from 'src/utils/constants';
import styled from 'styled-components';

const HeroPanel = () => {
    return (
        <StyledWrapper>
            <h1>Łukasz Karasiński</h1>
            <h3>front-end web developer</h3>
            <IconContainer>
                <a href="mailto:lukasz.karasinski.15@gmail.com">
                    <EnvelopeClosedIcon height={20} width={20} />
                </a>
                <Link href="/github" passHref>
                    <GitHubLogoIcon height={20} width={20} />
                </Link>
                <Link href="/linkedin" passHref>
                    <LinkedInLogoIcon height={20} width={20} />
                </Link>
            </IconContainer>
        </StyledWrapper>
    );
};

const IconContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 12px;
    a {
        color: ${colors.adpero.foreground};
    }
    svg {
        cursor: pointer;
    }
`;

const StyledWrapper = styled.section`
    display: grid;
    place-items: center;

    h1 {
        margin: 0;
    }
    h3 {
        margin: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 100px;
    }
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        margin-top: 150px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        margin-top: 200px;
    }
`;

export default HeroPanel;
