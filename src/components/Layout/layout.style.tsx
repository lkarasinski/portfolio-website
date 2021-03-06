import { breakpoints, colors } from '@constants';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        outline-color: ${colors.goldfish.foreground};
    }

    
    html{
        scrollbar-gutter: stable;
        overflow-x: hidden;
        overflow-y: scroll;

    }
    
    
    body {
        font-family: 'Open Sans', sans-serif;
        color: #0C235A;
        margin: 0;
        overflow-x: hidden;
        line-height: 1.5;
        @media (max-width: ${breakpoints.tablet}) {
            padding: 0 10px;
        }
        padding-bottom: 200px;
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
