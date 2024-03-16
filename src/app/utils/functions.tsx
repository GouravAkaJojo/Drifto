import { AnimationProps, Variants } from "framer-motion";
import { MotionDiv } from "../components/MotionComponents";
import { letter } from "../anims";

export function splitText(text: string, transition: AnimationProps["transition"]) {
    return text.split("").map((l, index) => (
        <MotionDiv
            transition={transition}
            variants={letter} key={index}>
            {l === " " ? "\u00A0" : l}
        </MotionDiv>
    ));
}