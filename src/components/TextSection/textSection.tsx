import * as React from 'react';
import { StyledWrapper } from './textSection.style';

type TextSectionProps = {
    title: string;
    children: React.ReactNode;
};

const TextSection = ({ title, children }: TextSectionProps) => {
    return (
        <StyledWrapper>
            <h2>{title}</h2>
            {children}
        </StyledWrapper>
    );
};

export default TextSection;
