import { breakpoints, ColorSchemeType } from '@constants';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledWrapper = styled(motion.div)<{
    colorScheme: ColorSchemeType;
}>`
    color: ${({ colorScheme }) => colorScheme.foreground};
`;

export const TopContainer = styled.section<{ colorScheme: ColorSchemeType }>`
    max-width: 1024px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        padding: 10px 30px;
        margin: 0 6px;
        background-color: ${({ colorScheme }) => colorScheme.foreground};
        color: #ffffff;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        font-size: 16px;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 10px 20px;
            font-size: 14px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            padding: 8px 15px;
            font-size: 12px;
        }
    }

    h1 {
        margin: 0;
        color: ${({ colorScheme }) => colorScheme.foreground};
    }
`;

export const BackButton = styled.div<{ colorScheme: ColorSchemeType }>`
    max-width: 1024px;
    margin: 0 auto 0 auto;
    font-size: 50px;
    padding-left: 10px;

    margin-top: 50px;

    a {
        color: ${({ colorScheme }) => colorScheme.foreground};
    }

    svg {
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 40px;
        margin-top: 25px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 10px;
        font-size: 30px;
    }
`;

export const GlobalStyle = createGlobalStyle<{ colorScheme: ColorSchemeType }>`
html{
    background-color: ${({ colorScheme }) => colorScheme.background};
} `;
