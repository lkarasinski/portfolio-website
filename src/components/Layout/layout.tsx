import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
