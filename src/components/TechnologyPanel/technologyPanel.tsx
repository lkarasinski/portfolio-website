import { ColorSchemeType } from '@constants';
import _ from 'lodash';
import Image from 'next/image';
import * as React from 'react';
import {
    IconsContainer,
    StyledWrapper,
    TechnologyIcon,
} from './technologyPanel.style';

type TechnologyPanelProps = {
    title: string;
    images: string[];
    colorScheme: ColorSchemeType;
};

const TechnologyPanel = ({
    title,
    images,
    colorScheme,
}: TechnologyPanelProps) => {
    return (
        <StyledWrapper>
            <h2>{title}</h2>
            <IconsContainer>
                {images.map((imageSrc) => (
                    <div
                        key={imageSrc}
                        style={{
                            display: 'grid',
                            placeItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <TechnologyIcon colorScheme={colorScheme}>
                            <Image
                                src={`/images/${imageSrc}`}
                                layout="fixed"
                                width="48px"
                                height="48px"
                                alt={'Technology logo'}
                            />
                        </TechnologyIcon>
                        {_.startCase(imageSrc.slice(0, -4))}
                    </div>
                ))}
            </IconsContainer>
        </StyledWrapper>
    );
};

export default TechnologyPanel;
