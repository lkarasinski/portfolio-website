import * as React from 'react';
import Link from 'next/link';
import { StyledWrapper } from './contactPanel.style';

const ContactPanel = () => {
    const [url, setUrl] = React.useState('');
    React.useEffect(() => {
        setUrl(location.origin.replace(/^https?:\/\//, ''));
    }, []);

    return (
        <StyledWrapper>
            <h2>Contact</h2>
            <p>
                email:&#3;
                <a href="mailto:lukasz.karasinski.15@gmail.com">
                    lukasz.karasinski.15@gmail.com
                </a>
            </p>
            <p>
                github: <Link href="/github">{`${url}/github`}</Link>
            </p>
            <p>
                linkedin: <Link href="/linkedin">{`${url}/linkedin`}</Link>
            </p>
        </StyledWrapper>
    );
};

export default ContactPanel;
