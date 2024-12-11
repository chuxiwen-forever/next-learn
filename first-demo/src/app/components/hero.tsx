import { StaticImageData } from 'next/image'
import React from 'react'

import Image from "next/image"

interface Iprops {
    imageUrl: StaticImageData
    altTxt: string
    content: string
}

export default function Page(props: Iprops) {
    return (
        <div className='h-screen relative'>
            <div className="absolute inset-0 -z-10">
                <Image src={props.imageUrl} fill style={{ objectFit: 'cover' }} alt={props.altTxt} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
            </div>
            <div className="flex justify-center pt-80">
                <h1 className="text-white text-6xl">{props.content}</h1>
            </div>
        </div>
    )
}
