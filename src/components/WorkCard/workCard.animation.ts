export const wrapperAnimation = {
    transition: {
        ease: 'linear',
        duration: 0.4,
        delay: 0.2,
    },
    variants: {
        default: { scale: 1 },
        clicked: {
            scale: 10,
            zIndex: 10,
        },
    },
};

export const contentAnimation = {
    transition: {
        ease: 'linear',
        duration: 0.2,
    },
    variants: {
        default: { opacity: 1 },
        clicked: { opacity: 0 },
    },
};
