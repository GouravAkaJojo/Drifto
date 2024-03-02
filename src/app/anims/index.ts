import { Variants } from "framer-motion";

export const animIn = {
    hide: {
        opacity: 1,
    },
    show: {
        opacity: 1,
    },

};

export const letter: Variants = {
    hide: {
        y: 120,
    },
    show: {
        y: 0,
        transformStyle: "preserve-3d",
    },

};