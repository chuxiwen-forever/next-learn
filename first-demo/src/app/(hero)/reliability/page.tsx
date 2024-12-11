import React from 'react'
import Hero from '@C/hero'
import ReliabilitySrc from "@P/reliability.png"

import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Reliability"
}


export default function Page() {
  return (
    <div>
      <Hero imageUrl={ReliabilitySrc} altTxt='Reliability' content='Reliability'></Hero>
    </div>
  )
}
