import { NextRouter } from 'next/router';
import { waitForAnimation } from '@functions';

export const handleMiddleClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    href: string
) => {
    if (event.button === 1) {
        event.preventDefault();
        window?.open(href, '_blank')?.focus();
    }
};

export const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
    href: string,
    router: NextRouter,
    containerRef: React.MutableRefObject<any>
) => {
    if (event.key === 'Enter') {
        setIsClicked(true);
        containerRef.current.blur();
        handleRouteChange(href, router);
    }
};

export const handleRouteChange = async (href: string, router: NextRouter) => {
    await waitForAnimation();
    router.push(href);
};

export const handleClick = (
    setIsClicked: (a: boolean) => void,
    href: string,
    router: NextRouter
) => {
    setIsClicked(true);
    handleRouteChange(href, router);
};
