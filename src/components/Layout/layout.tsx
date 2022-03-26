import * as React from 'react';
import { GlobalStyle } from './layout.style';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
