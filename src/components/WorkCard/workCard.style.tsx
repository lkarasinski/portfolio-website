import { motion } from 'framer-motion';
import { ColorSchemeType } from 'src/utils/constants';
import styled from 'styled-components';

export const ContentContainer = styled(motion.a)`
    padding: 30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ImageWrapper = styled.div`
    transition: transform 0.3s ease;
    transform: translateY(40px);
    z-index: 0;
`;

export const StyledWrapper = styled(motion.article)<{
    colorScheme: ColorSchemeType;
}>`
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

    outline-color: ${({ colorScheme }) => colorScheme.foreground};

    :hover,
    :focus {
        ${ImageWrapper} {
            transform: translateY(20px);
        }
    }
`;
