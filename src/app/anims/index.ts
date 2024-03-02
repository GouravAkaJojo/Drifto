import { Variants } from "framer-motion";

export const animIn = {
    hide: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.5,
        },
    },
};

export const letter: Variants = {
    hide: {
        y: 130,
    },
    show: {
        y: 0,
        transformStyle: "preserve-3d",
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};