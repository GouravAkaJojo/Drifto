import { useMotionValue, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { MotionDiv } from '../../MotionComponents'

export default function Specs() {
    const divRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function onMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const yPos = e.clientY, xPos = e.clientX;
        const f = divRef.current?.getBoundingClientRect()
        if (f) {
            x.set((xPos / f?.left) * 2);
            y.set((yPos / f?.top) * 4);
        }
    }

    function onLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div className='px-2 lg:px-28 bg-white font-inter font-extrabold md:text-lg overflow-hidden'>
            <Engine />
            <Build />
            <MotionDiv
                style={{ x, y }}
                transition={{
                    ease: 'easeOut',
                    duration: 0.3,
                }}
                ref={divRef}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className='my-20 transition-all ease-linear'
            >
                <img src='/porsche/porsche-blueprint-whole.gif' alt='blueprint-front' />
            </MotionDiv>
        </div>
    )
}



function Engine() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [200, -100])
    return (
        <div ref={ref} className='flex gap-2 items-center flex-wrap sm:flex-nowrap min-h-screen '>
            <MotionDiv
                style={{ y }}
                className='w-full sm:basis-1/2 flex-shrink-0 px-3 lg:px-10 justify-center'>
                <img src='/porsche/porsche-blueprint-front.gif' alt='blueprint-front' />
            </MotionDiv>
            <div className=' px-3 lg:px-10'>
                Beneath the sleek curves of the Porsche 911 GT3 lies a roaring inferno of power, embodied by its flat-six engine. With over 500 horsepower eagerly awaiting your command, it catapults from 0 to 60 mph in a spine-tingling 3.2 seconds. This demonic machine promises a top speed flirting with 200 mph, daring you to unleash its ferocity on the open road.
            </div>
        </div>
    )

}
function Build() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [200, -100])

    return (
        <div ref={ref} className='flex gap-2 items-center flex-col-reverse sm:flex-row mt-10 flex-wrap sm:flex-nowrap justify-center min-h-screen  '>
            <div className=' px-3 lg:px-10'>
                Crafted with the precision of a diabolical artisan, the Porsche 911 GT3 is a marvel of engineering prowess. Its lightweight construction, adorned with devilish aerodynamic enhancements, ensures razor-sharp handling and cornering capabilities that defy the laws of physics. Every curve, every seam, whispers of its infernal lineage, inviting drivers to dance on the edge of control with absolute confidence.
            </div>
            <MotionDiv

                style={{ y }} className='px-3 lg:px-10 w-full sm:basis-1/2 flex-shrink-0'>
                <img src='/porsche/porsche-blueprint-back.gif' alt='blueprint-front' />
            </MotionDiv>
        </div>
    )
}