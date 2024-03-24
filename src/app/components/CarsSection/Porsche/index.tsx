import React from 'react'

import TitleComp from '../TitleComp'
import { MotionDiv } from '../../MotionComponents'

export default function Porsche() {
    return (
        <div className='relative '>
            <TitleComp title='prosche' />
            <div className='relative'>
                <div className='absolute top-1/3 left-1/2 z-[-1] md:z-[2] whitespace-nowrap text-[15vw] md:text-[13vw] font-bold -translate-x-1/2 -translate-y-1/2'>
                    <MotionDiv className='textOutline leading-[80%]'>
                        911 GT3
                    </MotionDiv>
                </div>
                <div className='max-w-[80vw] relative z-[3] mx-auto'>
                    <img
                        src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png" alt="porsche" />
                </div>
            </div>
        </div>
    )
}

// https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png

// https://static.tildacdn.com/tild6363-6138-4164-a135-303037616265/2_1_1_1_1_1_1_1_1_1_.png
// https://static.tildacdn.com/tild3362-3335-4334-b963-326634626162/pngimg_3_1_1_1_1_1_1.png
// https://static.tildacdn.com/tild6664-6334-4431-a262-666164393165/_.svg
// https://static.tildacdn.com/tild3234-3966-4832-a438-386463343662/___.svg