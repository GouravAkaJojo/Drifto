import React from 'react'
import { MotionDiv } from '../MotionComponents'
import { animIn } from '@/app/anims'
import { splitText } from '@/app/utils/functions'


export default function TitleComp({ title, mixDiff = true }: { title: string, mixDiff?: boolean }) {
    return (
        <div className={`sticky top-0 bg-white ${mixDiff && "mix-blend-difference"} left-0 font-bionix z-[5]`}>
            <div className='' >
                <MotionDiv
                    initial="hide"
                    variants={animIn}
                    whileInView="show"
                    exit="exit"
                    viewport={{
                        amount: 0.5,
                        once: true,
                    }}
                    transition={{
                        staggerChildren: 0.03,
                    }}
                    className='text-black uppercase text-[6vw] lg:text-[4vw] font-black flex leading-[90%] overflow-hidden p-2'
                >{splitText(title, {
                    duration: 0.6,
                    ease: [0.83, 0, 0.17, 1]
                })}</MotionDiv>
            </div>
            <MotionDiv className='h-1 w-screen bg-black'
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />
        </div>
    )
}
