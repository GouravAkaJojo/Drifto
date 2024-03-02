import React from 'react'
import { splitText } from '../../utils/functions'
import { MotionDiv } from '../../MotionComponents'
import { animIn } from '../../anims'
import TitleComp from '../TitleComp'

export default function Porsche() {
    return (
        <div className='relative h-[100vh]'>
            <TitleComp title='prosche' />
        </div>
    )
}
