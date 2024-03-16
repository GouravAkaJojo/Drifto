"use client"
import React, { useEffect, useRef, useState } from 'react'
import TitleComp from '../TitleComp'
import Image from 'next/image'
import { MotionDiv } from '../../MotionComponents'
import { useScroll, useTransform } from 'framer-motion'

export default function Subaru() {
    const MainRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: MainRef,
        offset: ['start end', 'end start']
    })

    const [width, setWidth] = useState(0)

    useEffect(() => {
        function getWidth() {
            setWidth(window.innerWidth)
        }
        getWidth()
        window.addEventListener("resize", getWidth)
        return () => {
            window.removeEventListener("resize", getWidth)
        }
    }, [])

    const textY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.3])
    const firstImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.2])
    const centerImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.1])
    const lastImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.2])
    const mainImagX = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * 0.07])


    return (
        <MotionDiv ref={MainRef} className='relative h-screen md:h-[120vh]'>
            <div
                className='absolute top-1/2 left-1/2 z-[-1] md:z-[2] md:whitespace-nowrap text-[15vw] md:text-[8vw] font-bold -translate-x-1/2 -rotate-6 font-bionix -translate-y-1/2'>
                <MotionDiv
                    style={{ y: textY }} className='textOutline leading-[80%]'>
                    IMPREZA WRX STI
                </MotionDiv>
            </div>
            <TitleComp title='subaru' />
            <div className='flex justify-center h-full items-center overflow-hidden '>
                <div>
                    <div className='flex justify-center items-center gap-3 md:gap-10'>
                        <MotionDiv
                            style={{ y: firstImgY }}
                            className=" w-[150px] sm:w-[250px] lg:w-[320px] h-[400px] md:w-[230px] md:h-[500px] relative">
                            <Image fill src={"/subaru/subaru-front-tilt.png"} alt='subaru-covers' className='object-contain left-0 right-0' />
                        </MotionDiv>
                        <MotionDiv
                            style={{ y: centerImgY }}
                            className="hidden md:block w-[150px] sm:w-[250px] lg:w-[320px] h-[400px] md:w-[230px] md:h-[500px] relative">
                            <Image fill src={"/subaru/subaru-front.png"} alt='subaru-covers' className='object-contain left-0 right-0' />
                        </MotionDiv>
                        <MotionDiv
                            style={{ y: lastImgY }}
                            className="w-[150px] sm:w-[250px] lg:w-[320px] h-[400px] md:w-[230px] md:h-[500px] relative">
                            <Image fill src={"/subaru/subaru-back.png"} alt='subaru-covers' className='object-contain left-0 right-0' />
                        </MotionDiv>
                    </div>
                    <MotionDiv
                        style={{ x: mainImagX }}
                        className='relative aspect-video md:w-[900px] w-[90vw] mt-[-220px] mx-auto md:mt-[-300px] z-[3] '>
                        <Image fill src="/subaru/subaru-back-tilt.png" alt='subaru' />
                    </MotionDiv>
                </div>
            </div>
        </MotionDiv>
    )
}

