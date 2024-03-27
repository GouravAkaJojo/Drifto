"use client"
import React, { useEffect, useState } from 'react'
import TitleComp from '../TitleComp'

import Engine from './Engine'
import AnimatedBanner from './AnimatedBanner'

export default function Subaru() {
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

    return (
        <div id="subaru" className='relative'>
            <TitleComp title='subaru' />
            <AnimatedBanner width={width} />
            <Engine width={width} />
        </div >
    )
}

