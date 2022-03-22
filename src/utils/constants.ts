export const breakpoints = {
    // Max value for mobile screen width
    mobile: '540px',
    // Max value for tablet screen width
    tablet: '1024px',
    // Min value for desktop screen width
    desktop: '1025px',
};

export type ColorSchemeType = {
    background: string;
    foreground: string;
};

export type ColorsType = Record<string, ColorSchemeType>;

export const colors: ColorsType = {
    goldfish: {
        background: '#F1F5FD',
        foreground: '#0C235A',
    },
    adpero: {
        background: '#F0F2FF',
        foreground: '#001166',
    },
    daga: {
        background: '#FFFAF0',
        foreground: '#664400',
    },
    bienbot: {
        background: '#F1F1FE',
        foreground: '#0A0A5C',
    },
};
