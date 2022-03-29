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
                        imageUrl="/placeholder.png"
                        colorScheme={colors.goldfish}
                        href="/goldfish"
                    />
                    <WorkCard
                        heading="Adpero"
                        description="Journey manager"
                        imageUrl="/placeholder.png"
                        colorScheme={colors.adpero}
                        href="/adpero"
                    />
                </HorizontalCards>
                <HorizontalCards columns="400px 600px">
                    <WorkCard
                        heading="Daga"
                        description="Garbage packaging company website "
                        imageUrl="/placeholder.png"
                        colorScheme={colors.daga}
                        href="/goldfish"
                    />
                    <WorkCard
                        heading="Biebot"
                        description="Discord bot with dashboard"
                        imageUrl="/placeholder.png"
                        colorScheme={colors.bienbot}
                        href="/adpero"
                    />
                </HorizontalCards>
            </WorkCardContainer>
        </StyledWrapper>
    );
};

export default MyWorkPanel;