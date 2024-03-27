"use client"
import TitleComp from '../TitleComp'
import AnimatedBanner from './AnimatedBanner'
import Specs from './Specs'


export default function Porsche() {


    return (
        <div id='porsche' className='relative'>
            <TitleComp title='prosche' />
            <AnimatedBanner />
            <Specs />
        </div>
    )
}