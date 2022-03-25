import { ColorSchemeType } from 'src/utils/constants';
import styled from 'styled-components';

export const ContentContainer = styled.div`
    padding: 30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ImageWrapper = styled.div`
    transition: transform 0.3s ease;
    transform: translateY(40px);
`;

export const StyledWrapper = styled.article<{ colorScheme: ColorSchemeType }>`
    display: grid;
    place-items: center;
    max-width: 600px;
    max-height: 300px;
    cursor: pointer;
    padding: 0;
    overflow: hidden;

    color: ${({ colorScheme }) => colorScheme.foreground};
    background-color: ${({ colorScheme }) => colorScheme.background};

    border-radius: 16px;

    img {
        border-radius: 16px;
    }

    h2,
    p {
        margin: 0;
    }

    :hover {
        ${ImageWrapper} {
            transform: translateY(20px);
        }
    }
`;
