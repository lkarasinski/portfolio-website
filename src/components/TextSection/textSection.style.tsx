import { breakpoints, colors } from '@constants';
import styled from 'styled-components';

export const StyledWrapper = styled.section`
    max-width: 1024px;
    margin: 0 auto;

    p {
        @media (min-width: ${breakpoints.desktop}) {
            font-size: 20px;
        }
        @media (max-width: ${breakpoints.tablet}) {
            font-size: 18px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 16px;
        }
    }
`;
