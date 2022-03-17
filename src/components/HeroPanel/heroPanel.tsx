import * as React from 'react';
import { breakpoints } from 'src/utils/constants';
import styled from 'styled-components';

const HeroPanel = () => {
    return (
        <StyledWrapper>
            <h1>Łukasz Karasiński</h1>
            <h3>front-end web developer</h3>
        </StyledWrapper>
    );
};

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
