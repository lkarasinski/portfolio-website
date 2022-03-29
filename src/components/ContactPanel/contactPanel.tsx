import * as React from 'react';
import Link from 'next/link';
import { StyledWrapper } from './contactPanel.style';

const ContactPanel = () => {
    return (
        <StyledWrapper>
            <h2>Contact</h2>
            <p>
                email:{' '}
                <a href="mailto:lukasz.karasinski.15@gmail.com">
                    lukasz.karasinski.15@gmail.com
                </a>
            </p>
            <p>
                github: <Link href="/github">lkarasinski.pl/github</Link>
            </p>
            <p>
                linkedin: <Link href="/linkedin">lkarasinski.pl/linkedin</Link>
            </p>
        </StyledWrapper>
    );
};

export default ContactPanel;
