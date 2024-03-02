import React from 'react'
import { MotionDiv } from '../MotionComponents'
import { splitText } from '../utils/functions'
import { animIn } from '../anims'

export default function TitleComp({ title }: { title: string }) {
    return (
        <div className='sticky top-0 left-0'>
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
                    className='uppercase text-[6vw] lg:text-[4vw] font-black flex overflow-hidden p-2'
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
