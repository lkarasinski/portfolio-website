import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ColorSchemeType } from '@constants';
import {
    ContentContainer,
    ImageWrapper,
    StyledWrapper,
} from './workCard.style';

type WorkCardProps = {
    heading: string;
    description: string;
    imageUrl: string;
    colorScheme: ColorSchemeType;
    href: string;
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
                <ContentContainer>
                    <div>
                        <h2>{heading}</h2>
                        <p>{description}</p>
                    </div>
                    <ImageWrapper>
                        <Image
                            src={imageUrl}
                            width={320}
                            height={180}
                            alt={`${heading} homepage screenshot`}
                        />
                    </ImageWrapper>
                </ContentContainer>
            </StyledWrapper>
        </Link>
    );
};

export default WorkCard;
