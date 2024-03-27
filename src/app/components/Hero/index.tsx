import React from "react";
import { animIn } from "../../anims";
import { MotionDiv } from "../MotionComponents";
import { splitText } from "../../utils/functions";

export default function Hero() {

    return (
        <div id="home" className="max-w-[100vw] relative h-screen flex justify-center items-center">
            <div className="absolute w-full h-[100vh] flex justify-center items-center top-0 left-0 z-[-1] overflow-hidden">
                <div className="reltive w-full h-full">
                    <video muted autoPlay playsInline src='/drifto.mp4' className="h-full w-full object-cover" loop />
                </div>
            </div>
            <h1 className="text-white  text-[12vw] lg:text-[8vw] leading-[80%] uppercase ">
                <div className="overflow-hidden">
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                        transition={{
                            staggerChildren: 0.08,
                            delayChildren: 0.3
                        }}
                    >
                        {splitText("risk it", {
                            duration: 0.8,
                            ease: "easeInOut",
                        })}
                    </MotionDiv>
                </div>
                <div className="overflow-hidden">
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                        transition={{
                            staggerChildren: 0.08,
                            delayChildren: 0.3
                        }}
                    >
                        {splitText("for", {
                            duration: 0.8,
                            ease: "easeInOut",
                        })}
                    </MotionDiv>
                </div>
                <div className="overflow-hidden">
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                        transition={{
                            staggerChildren: 0.08,
                            delayChildren: 0.3
                        }}
                    >
                        {splitText("the drift", {
                            duration: 0.8,
                            ease: "easeInOut",
                        })}
                    </MotionDiv>
                </div>
            </h1>
        </div>
    );
}
