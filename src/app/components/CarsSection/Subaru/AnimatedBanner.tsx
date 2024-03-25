import Image from 'next/image'
import { MotionDiv } from '../../MotionComponents'
import { useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'


export default function AnimatedBanner({ width }: { width: number }) {
    const MainRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: MainRef,
        offset: ['start end', 'end start']
    })


    const textY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.3])
    const firstImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.2])
    const centerImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.1])
    const lastImgY = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * -0.2])
    const mainImagX = useTransform(scrollYProgress, [0.2, 1], [0, width / 2 * 0.07])
    return (
        <MotionDiv ref={MainRef} className='flex relative justify-center h-full items-center overflow-hidden '>
            <div
                className='absolute top-1/2 left-1/2 z-[-1] md:z-[2] md:whitespace-nowrap text-[13vw] md:text-[7vw] font-bold -translate-x-1/2 -rotate-6  -translate-y-1/2'>
                <MotionDiv
                    style={{ y: textY }} className='textOutline leading-[80%]'>
                    IMPREZA WRX STI
                </MotionDiv>
            </div>
            <div >
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
        </MotionDiv>
    )
}
