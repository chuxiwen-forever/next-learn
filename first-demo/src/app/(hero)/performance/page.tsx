import React from 'react'
import Hero from '@C/hero'
import PerformanceSrc from "@P/performance.png"

import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Performance"
}


export default function Page() {
  return (
    <div>
      <Hero imageUrl={PerformanceSrc} altTxt='Performance' content='Performance'></Hero>
    </div>
  )
}
