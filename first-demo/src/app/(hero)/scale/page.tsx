import React from 'react'
import Hero from '@C/hero'
import ScaleSrc from "@P/scale.png"

import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Scale"
}


export default function Page() {
  return (
    <div>
      <Hero imageUrl={ScaleSrc} altTxt='Scale' content='Scale'></Hero>
    </div>
  )
}
