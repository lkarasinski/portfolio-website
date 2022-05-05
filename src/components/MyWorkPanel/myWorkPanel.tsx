import { WorkCard } from '@components';
import * as React from 'react';
import { colors } from 'src/utils/constants';
import {
    HorizontalCards,
    StyledWrapper,
    WorkCardContainer,
} from './myWorkPanel.style';

const MyWorkPanel = () => {
    return (
        <StyledWrapper>
            <h2>My Work</h2>
            <WorkCardContainer>
                <HorizontalCards columns="450px 550px">
                    <WorkCard
                        heading="Goldfish"
                        description="Advertisment company website"
                        imageUrl="/images/goldfish.png"
                        colorScheme={colors.goldfish}
                        href="/goldfish"
                    />
                    <WorkCard
                        heading="Adpero"
                        description="Journey manager"
                        imageUrl="/images/adpero.png"
                        colorScheme={colors.adpero}
                        href="/adpero"
                    />
                </HorizontalCards>
                <HorizontalCards columns="400px 600px">
                    <WorkCard
                        heading="Daga"
                        description="Garbage packaging company website "
                        imageUrl="/images/daga.png"
                        colorScheme={colors.daga}
                        href="/daga"
                    />
                    <WorkCard
                        heading="Bienbot"
                        description="Discord bot with dashboard"
                        imageUrl="/images/bienbot.png"
                        colorScheme={colors.bienbot}
                        href="/bienbot"
                    />
                </HorizontalCards>
            </WorkCardContainer>
        </StyledWrapper>
    );
};

export default MyWorkPanel;
