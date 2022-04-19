import { breakpoints, ColorSchemeType } from '@constants';
import styled from 'styled-components';

export const StyledWrapper = styled.section`
    max-width: 1024px;
    margin: 0 auto;
`;

export const TechnologyIcon = styled.div<{ colorScheme: ColorSchemeType }>`
    position: relative;
    width: 64px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    background-color: white;
    border-radius: 12px;
    --shadow-color: 0deg 0% 0%;
    box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
        0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.1),
        1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.1);
`;

export const IconsContainer = styled.div`
    display: grid;
    place-items: start center;
    gap: 12px;
    font-size: 14px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, 64px);
    }
    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(auto-fit, 64px);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: repeat(auto-fit, 56px);
    }
`;
