"use client";
import { useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { MotionDiv } from '../../MotionComponents';

export default function Engine({ width }: { width: number }) {
    const engineRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: engineRef,
        offset: ['start end', 'end start']
    })

    const engineIMgy = useTransform(scrollYProgress, [0.2, 1], [100, -(width / 2) * 0.2])
    const textY = useTransform(scrollYProgress, [0.2, 1], [100, -(width / 2) * 0.05])


    return (
        <div
            ref={engineRef}
            className=' p-8 sm:p-14 sm:pb-44 flex justify-center uppercase flex-col gap-5 items-center md:flex-row '>
            <MotionDiv
                style={{ y: textY }}
                className=' text-lg md:text-xl basis-1/2'>
                Experience the IMPREZA WRX STI&apos;s lightning-fast acceleration, propelling you from 0 to 60 mph in a blistering few seconds. Beneath its hood roars a turbocharged 2.5-liter boxer engine, churning out a jaw-dropping 310 horsepower. This rally-bred beast doesn&apos;t just push boundaries, it obliterates them, offering an unmatched blend of power, agility, and excitement on every journey.
            </MotionDiv>
            <MotionDiv style={{ y: engineIMgy }} className='basis-1/2 flex justify-center '>
                <img src='/subaru/engine.png' alt='subaru-engine' />
            </MotionDiv>
        </div>
    )
}
