import { breakpoints } from '@constants';
import styled from 'styled-components';

export const StyledWrapper = styled.section`
    margin: 150px auto 0 auto;
    padding: 10px;
    max-width: 1024px;
`;

export const WorkCardContainer = styled.div`
    display: grid;
    gap: 12px;
`;

export const HorizontalCards = styled.div<{ columns: string }>`
    display: grid;
    gap: 12px;
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: ${({ columns }) => columns};
    }
`;
