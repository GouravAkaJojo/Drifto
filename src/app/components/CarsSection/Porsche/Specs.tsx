import { useMotionValue } from 'framer-motion'
import React from 'react'
import { MotionDiv } from '../../MotionComponents'

export default function Specs() {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    function onMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const yPos = e.clientY
        const xPos = e.clientX

        x.set(xPos / 30);
        y.set(yPos / 30);
    }

    function onLeave() {
        x.set(0);
        y.set(0);
    }


    return (
        <div className='px-2 md:px-28 bg-white font-inter font-medium text-lg '>
            <div className='flex gap-2 items-center '>
                <div className='basis-1/2 flex-shrink-0 px-10'>
                    <img src='/porsche/porsche-blueprint-front.gif' alt='blueprint-front' />
                </div>
                <div className='px-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis ducimus quia sit laborum praesentium? Repellendus similique impedit quisquam ipsa exercitationem optio deserunt hic vitae possimus! Praesentium, doloribus quia optio voluptatibus nesciunt illum nostrum. Quo similique quod dolore architecto libero? Non delectus reiciendis labore, nulla nobis unde fugiat vitae dignissimos!
                </div>
            </div>
            <div className='flex gap-2 items-center mt-10'>
                <div className='px-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis ducimus quia sit laborum praesentium? Repellendus similique impedit quisquam ipsa exercitationem optio deserunt hic vitae possimus! Praesentium, doloribus quia optio voluptatibus nesciunt illum nostrum. Quo similique quod dolore architecto libero? Non delectus reiciendis labore, nulla nobis unde fugiat vitae dignissimos!
                </div>
                <div className='px-10 basis-1/2 flex-shrink-0'>
                    <img src='/porsche/porsche-blueprint-back.gif' alt='blueprint-front' />
                </div>
            </div>
            <MotionDiv
                style={{ x, y }}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"

                }}
                className='py-20'>
                <img src='/porsche/porsche-blueprint-whole.gif' alt='blueprint-front' />
            </MotionDiv>
        </div>
    )
}
