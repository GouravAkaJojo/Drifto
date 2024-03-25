"use client"
import React, { useEffect, useRef, useState } from 'react'
import TitleComp from '../TitleComp'
import { MotionDiv, MotionImage } from '../../MotionComponents'
import { CloudsE } from '@/app/utils/data'
import { useScroll, useTransform } from 'framer-motion'

export default function Porsche() {
    const MainRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: MainRef,
        offset: ["start end", "end start"]
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


    const leftA = useTransform(scrollYProgress, [0.1, 1], [0, -width / 1.5])
    const leftB = useTransform(scrollYProgress, [0.1, 1], [0, -width / 2.5])
    const leftSlow = useTransform(scrollYProgress, [0.1, 1], [0, -width / 8])

    const rightA = useTransform(scrollYProgress, [0.1, 1], [0, width / 1.5])
    const rightB = useTransform(scrollYProgress, [0.1, 1], [0, width / 2.5])
    const rightSlow = useTransform(scrollYProgress, [0.1, 1], [0, -width / 8])

    const TextY = useTransform(scrollYProgress, [0.1, 1], [50, -width / 10])
    const scale = useTransform(scrollYProgress, [0.1, 1], [1, 0.8]);

    const isUnderTab = width <= 768

    return (
        <div className='relative  '>
            <TitleComp title='prosche' />
            <div ref={MainRef} className='relative py-10 overflow-hidden'>
                <div className='absolute top-1/3 left-1/2 z-[1] whitespace-nowrap text-[15vw] md:text-[13vw] font-bold -translate-x-1/2 -translate-y-1/2'>
                    <MotionDiv className='textOutline relative leading-[80%]'>
                        {/* 
                        // LEFT SIDE CLOUDS
                        */}
                        <MotionImage
                            style={{ x: leftA }}
                            src={isUnderTab ? CloudsE.BLACKONE : CloudsE.WHITEONE} alt="cloud" className='absolute 2xl:h-[200%] -top-[60%] md:-top-1/3 z-[2] -left-[20%] lg:left-0' />
                        <MotionImage
                            style={{ x: leftB }}
                            src={CloudsE.DUSKYONE} alt="cloud" className='hidden md:block 2xl:h-[200%] -top-[80%]  absolute  -left-[20%] z-[1]' />

                        <MotionImage
                            style={{ x: leftSlow }}
                            src={CloudsE.BLACKONE} alt="cloud" className='hidden md:block opacity-80 xl:h-[200%]  absolute -top-2/3 left-0 z-[-2]' />
                        <MotionDiv
                            style={{ y: TextY }}
                        >
                            911 GT3
                        </MotionDiv>
                        {/* 
                         // RIGHT SIDE CLOUDS    
                         */}
                        <MotionImage
                            style={{ x: rightSlow }}
                            src={CloudsE.BLACKONE} alt="cloud" className='hidden opacity-80 md:block absolute xl:h-[200%] -top-2/3 right-[5%] z-[-2]' />
                        <MotionImage
                            style={{ x: rightB }}
                            src={CloudsE.DUSKYONE} alt="cloud" className=' hidden md:block absolute -top-[80%] 2xl:h-[200%] -right-[20%] z-[1]' />
                        <MotionImage
                            style={{ x: rightA }}
                            src={isUnderTab ? CloudsE.BLACKONE : CloudsE.WHITEONE} alt="cloud" className='absolute -top-[60%] md:-top-1/3 2xl:h-[200%]  -right-[20%] lg:right-0 z-[2]' />
                    </MotionDiv>
                </div>
                <div className='max-w-[80vw] relative z-[3] mx-auto'>
                    <MotionImage
                        style={{ scale }}
                        src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png" alt="porsche" />
                </div>
            </div>

            {/* <div className='bg-white'>
                <img className='mix-blend-difference' src="/porsche/porsche-blueprint-whole.gif" alt="" />
            </div> */}

        </div>
    )
}