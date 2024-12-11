
import HomeSrc from "@P/home.png"
import Hero from '@C/hero'
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Home"
}

export default function Page() {
  return (
    <Hero imageUrl={HomeSrc} altTxt='Home' content='Home'></Hero>
  )
}
