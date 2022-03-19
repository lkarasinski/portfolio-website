import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

type WorkCardProps = {
    heading: string;
    description: string;
    imageUrl: string;
    colorScheme: ColorSchemeType;
    href: string;
};

type ColorSchemeType = {
    background: string;
    foreground: string;
};

const WorkCard = ({
    heading,
    description,
    imageUrl,
    colorScheme,
    href,
}: WorkCardProps) => {
    return (
        <Link href={href} passHref>
            <StyledWrapper colorScheme={colorScheme}>
                <div>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <Image
                        src={imageUrl}
                        width={318}
                        height={179}
                        alt={`${heading} homepage screenshot`}
                    />
                </div>
            </StyledWrapper>
        </Link>
    );
};

const StyledWrapper = styled.article<{ colorScheme: ColorSchemeType }>`
    display: grid;
    place-items: center;
    max-width: 600px;
    cursor: pointer;

    color: ${({ colorScheme }) => colorScheme.foreground};
    background-color: ${({ colorScheme }) => colorScheme.background};

    border-radius: 16px;

    img {
        transition: transform 0.3s ease;
        margin-top: auto;
        border-radius: 16px;
        transform: translateY(30px);
    }

    :hover {
        img {
            transform: translateY(10px);
        }
    }
`;

export default WorkCard;
