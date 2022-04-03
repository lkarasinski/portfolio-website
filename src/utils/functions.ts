export const waitForAnimation = () => {
    document.body.style.overflow = 'hidden';
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            resolve(null);
        }, 1000 * (0.4 + 0.2));
    });
};
