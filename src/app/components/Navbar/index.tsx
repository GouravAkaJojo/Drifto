"use client"
import {
    useAnimate,
    motion,
    DynamicAnimationOptions,
    stagger,
} from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scope, onCloseNav, onOpenNav, onTextHover, onTextLeave } = useNavAnimation({ setIsOpen });

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <div ref={scope} className="font-bionix">
            <div
                onClick={onOpenNav}
                className="fixed uppercase top-5 text-2xl right-5 mix-blend-difference text-white z-[10] cursor-pointer"
            >
                Menu
            </div>
            <div >
                <motion.div
                    initial={{ y: "-110%" }}
                    className="nav fixed top-0 left-0 w-screen h-screen z-[20] bg-white"
                >
                    <div className="nav-inner relative w-full h-full">
                        <div className="absolute right-0 top-0 z-[99]">
                            <div
                                onClick={onCloseNav}
                                className="p-6 md:p-8 navbar-close w-fit bg-white cursor-pointer relative before:absolute before:top-0 before:left-0 before:z-[1] before:bg-white before:mix-blend-difference before:w-full before:h-full before:-translate-y-full hover:before:translate-y-0 ">
                                <AiOutlineClose className="text-xl" />
                            </div>
                        </div>
                        <ul className=" flex flex-col justify-center h-full w-full">
                            {MENU_ITEMS.map((word, index) => (

                                <motion.div
                                    key={index}
                                    className="overflow-hidden cursor-pointer"
                                >
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        className="link"
                                        onMouseEnter={() => onTextHover(word)}
                                        onMouseLeave={() => onTextLeave(word)}
                                        style={{ whiteSpace: 'pre' }}
                                    >
                                        {word.split("").map((char, index) => (
                                            <motion.div
                                                key={char + index}
                                                className=" relative inline-block text-[15vw] md:text-[8vw] sm:tracking-[-0.2rem] leading-[110%] uppercase font-extrabold"
                                            >
                                                <motion.div style={{ transformOrigin: "top" }} className={`real-${word}`}>
                                                    {char === ' ' ? '\u00A0' : char}
                                                </motion.div>
                                                <motion.div
                                                    initial={{ rotateX: 90 }}
                                                    style={{ transformOrigin: "bottom" }}
                                                    className={`dupli-${word} absolute top-0 left-0`}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                    <div
                                        className="lines w-0 h-[2px] bg-black"
                                    />
                                </motion.div>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div >
        </div >
    );
}

const transition: DynamicAnimationOptions = {
    type: "tween",
    ease: [0.83, 0, 0.17, 1],
    duration: 1,
};

function useNavAnimation({
    setIsOpen,
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [scope, animate] = useAnimate();

    function onOpenNav() {
        setIsOpen(true);
        animate([
            [".nav", { y: 0 }, { ...transition, at: "-0.7" }],
            [".link", { y: 0 }, { ...transition, at: "-0.6", delay: stagger(0.1) }],
            [
                ".lines",
                { width: "100%" },
                { ...transition, at: "<", delay: stagger(0.1) },
            ],
        ]);
    }

    function onCloseNav() {
        setIsOpen(false);
        animate([
            [".lines", { width: 0 }, { ...transition, delay: stagger(0.1) }],
            [".link", { y: "100%" }, { ...transition, delay: stagger(0.1), at: "<" }],
            [".nav", { y: "-110%" }, { ...transition, at: "-0.8" }]
        ]);
    }

    function onTextHover(word: string) {
        const adjustedStagger = (word === "Home" || word === "Jdms") ? 0.04 : 0.03;
        animate([
            [
                `.real-${word}`,
                { rotateX: 90, rotateY: "7deg", y: -30 },
                { delay: stagger(adjustedStagger), ease: [0.45, 0, 0.55, 1] },
            ],
            [
                `.dupli-${word}`,
                { rotateX: 0, rotateY: 0 },
                { delay: stagger(adjustedStagger), at: "-.4", ease: [0.45, 0, 0.55, 1] },
            ],
        ]);
    }

    function onTextLeave(word: string) {
        const adjustedStagger = (word === "Home" || word === "Jdms") ? 0.04 : 0.03;


        animate([
            [
                `.dupli-${word}`,
                { rotateX: 90, rotateY: "7deg" },
                { delay: stagger(adjustedStagger), ease: [0.45, 0, 0.55, 1] },
            ],
            [
                `.real-${word}`,
                { rotateX: 0, y: 0, rotateY: 0 },
                { delay: stagger(adjustedStagger), at: "-.4", ease: [0.45, 0, 0.55, 1] },
            ],
        ]);
    }

    return { scope, onCloseNav, onOpenNav, onTextHover, onTextLeave };
}

const MENU_ITEMS = ["Home", "Subaru", "Porsche", "Jdms"];