import React from "react";
import { animIn, letter } from "../anims";
import { MotionDiv } from "../MotionComponents";

export default function Hero() {

    function splitText(text: string) {
        return text.split("").map((l, index) => (
            <MotionDiv variants={letter} key={index}>
                {l === " " ? "\u00A0" : l}
            </MotionDiv>
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
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("risk it")}
                    </MotionDiv>
                </div>
                <div className="overflow-hidden">
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("for")}
                    </MotionDiv>
                </div>
                <div className="overflow-hidden">
                    <MotionDiv
                        variants={animIn}
                        initial="hide"
                        animate="show"
                        className="flex"
                    >
                        {splitText("the drift")}
                    </MotionDiv>
                </div>
            </h1>
        </div>
    );
}
