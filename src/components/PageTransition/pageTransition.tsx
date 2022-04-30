import * as React from 'react';
import { motion } from 'framer-motion';

const PageTransitionAnimation = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', duration: 0 }}
    >
        {children}
    </motion.div>
);

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export default PageTransitionAnimation;
