import { colors } from '@constants';
import styled from 'styled-components';

export const StyledWrapper = styled.section`
    margin: 0 auto;
    padding: 10px;
    font-weight: 300;
    max-width: 1024px;
    a {
        color: ${colors.goldfish.foreground};
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
    }
`;
