"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

export default function Hero() {

    const animIn = {
        hide: {
            opacity: 1,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const child: Variants = {
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

    function splitText(text: string) {
        return text.split("").map((letter, index) => (
            <motion.div variants={child} key={index}>
                {letter === " " ? "\u00A0" : letter}
            </motion.div>
        ));
    }

    return (
        <div className="max-w-[100vw] relative h-screen flex justify-center items-center">
            <div className="absolute w-full h-[100vh] flex justify-center items-center top-0 left-0 z-[-1] overflow-hidden">
                <div className="reltive w-full h-full">
                    <video muted autoPlay playsInline src='/drifto.mp4' className="h-full w-full object-cover" loop />
                </div>
            </div>
            <h1 className="text-white font-black text-[8vw] leading-[80%] uppercase font-gabarito">
                <div className="overflow-hidden">
                    <motion.div
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("risk it")}
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("for")}
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("the drift")}
                    </motion.div>
                </div>
            </h1>
        </div>
    );
}