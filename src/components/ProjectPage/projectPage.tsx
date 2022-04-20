import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TechnologyPanel, TextSection, VideoPlayer } from '@components';
import {
    BackButton,
    GlobalStyle,
    StyledWrapper,
    TopContainer,
} from './projectPage.style';
import { ColorSchemeType } from '@constants';

type ProjectPageProps = {
    title: string;
    video: string;
    children: React.ReactNode;
    colorScheme: ColorSchemeType;
    technologies: string[];
};

const ProjectPage = ({
    title,
    children,
    video,
    colorScheme,
    technologies,
}: ProjectPageProps) => {
    const router = useRouter();

    return (
        <>
            <GlobalStyle colorScheme={colorScheme} />
            <StyledWrapper
                colorScheme={colorScheme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <header>
                    <BackButton colorScheme={colorScheme}>
                        <Link href="/" passHref>
                            <a tabIndex={0}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </a>
                        </Link>
                    </BackButton>
                    <TopContainer colorScheme={colorScheme}>
                        <h1>{title}</h1>
                        <nav>
                            <Link href={router.asPath + '/github'}>
                                <a target="blank">Github</a>
                            </Link>
                            <Link href={router.asPath + '/live'}>
                                <a target="blank">View live</a>
                            </Link>
                        </nav>
                    </TopContainer>
                </header>
                <div>
                    <VideoPlayer video={video} />
                    <TechnologyPanel
                        title="Technologies used"
                        images={technologies}
                        colorScheme={colorScheme}
                    />
                    <TextSection title="About this project">
                        {children}
                    </TextSection>
                </div>
            </StyledWrapper>
        </>
    );
};

export default ProjectPage;
