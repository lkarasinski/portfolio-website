import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { breakpoints } from 'src/utils/constants';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        color: #0C235A;
    }

    h1{
        font-weight: bold;
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 2rem;
        }
        @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
            font-size: 3.5rem;
        }
        @media (min-width: ${breakpoints.desktop}) {
            font-size: 4.5rem;
        }
    }

    h2{
        font-weight: bold;
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 1.5rem;
        }
        @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
            font-size: 1.875rem;
        }
        @media (min-width: ${breakpoints.desktop}) {
            font-size: 2.25rem;
        }
    }

    h3{
        font-weight: bold;
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 1.25rem;
        }
        @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
            font-size: 1.25rem;
        }
        @media (min-width: ${breakpoints.desktop}) {
            font-size: 1.5rem;
        }
    }

    p{
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 1rem;
        }
        @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
            font-size: 1rem;
        }
        @media (min-width: ${breakpoints.desktop}) {
            font-size: 1.125rem;
        }
    }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
