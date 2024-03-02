"use client";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EVOs, GTRSs, NSXs, SUPRAs } from "./data";

export default function Gallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const [height, setHeight] = useState(0)

    useEffect(() => {
        function heighter() {
            setHeight(window.innerHeight)
        }
        window.addEventListener("scroll", heighter)
        window.addEventListener("resize", heighter)
        return () => {
            window.removeEventListener("scroll", heighter)
            window.removeEventListener("resize", heighter)
        }
    }, [])

    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);

    return (
        <div
            ref={targetRef}
            className="p-2 h-[150vh] overflow-hidden py-4 bg-[#1b1b1b]"
        >
            <div className="flex gap-4 h-full max-w-[98vw] mx-auto">
                <Column cars={GTRSs} top={"top-[-60%]"} y={y1} />
                <Column cars={SUPRAs} top={"top-[-90%]"} y={y2} />
                <Column cars={EVOs} top={"top-[-65%]"} y={y3} />
                <Column cars={NSXs} top={"top-[-75%]"} y={y4} />
            </div>
        </div>
    );
}

const Column = ({
    cars,
    top,
    y,
}: {
    cars: { name: string; url: string }[];
    top: string;
    y: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{ y }}
            className={` ${top} min-w-[250px] relative w-[25%]`}
        >
            {cars.map((c) => (
                <div
                    key={c?.name}
                    className="relative mb-4 w-full h-[60vh] rounded-lg overflow-hidden"
                >
                    <div className="h-[70%] w-full absolute bottom-0 left-0 bg-gradient-to-t from-[#00000092] to-transparent z-[1]  flex items-end p-3">
                        <div className="cursor-default uppercase text-3xl font-bold text-white  hover:skew-x-6 transition-transform">
                            {c?.name}
                        </div>
                    </div>
                    <Image fill src={c?.url} alt={c.name} className="object-cover" />
                </div>
            ))}
        </motion.div>
    );
};