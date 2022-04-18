import * as React from 'react';
import { StyledWrapper } from './videoPlayer.style';
import dynamic from 'next/dynamic';

type VideoPlayerProps = {
    video: string;
};

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer = ({ video }: VideoPlayerProps) => {
    return (
        <StyledWrapper>
            <ReactPlayer
                width="100%"
                height="100%"
                volume={0}
                playing
                loop
                url={`videos/${video}`}
            />
        </StyledWrapper>
    );
};

export default VideoPlayer;
