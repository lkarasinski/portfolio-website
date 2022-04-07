import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ColorSchemeType } from '@constants';
import {
    ContentContainer,
    ImageWrapper,
    StyledWrapper,
} from './workCard.style';
import {
    handleClick,
    handleKeyDown,
    handleMiddleClick,
} from './workCard.helpers';
import { contentAnimation, wrapperAnimation } from './workCard.animation';

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
    const [isClicked, setIsClicked] = React.useState(false);
    const containerRef = React.useRef<any>();
    const router = useRouter();

    return (
        <StyledWrapper
            colorScheme={colorScheme}
            tabIndex={0}
            ref={containerRef}
            onClick={() => handleClick(setIsClicked, href, router)}
            onKeyPress={(event) =>
                handleKeyDown(event, setIsClicked, href, router, containerRef)
            }
            onAuxClick={(event) => handleMiddleClick(event, href)}
            animate={isClicked ? 'clicked' : 'default'}
            {...wrapperAnimation}
        >
            <ContentContainer
                animate={isClicked ? 'clicked' : 'default'}
                {...contentAnimation}
            >
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
    );
};

export default WorkCard;
