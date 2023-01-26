import { Hero } from "./home/hero"
import { About } from "./home/about"
import { VisiMisi } from "./home/visi-misi"
import { Characteristic } from "./home/characteristic"
import { Blog } from "./home/blog"
import { Portfolio } from "./home/portfolio"

import { Navbar } from "@components/ui"
import { Footer } from "@components/ui"

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <Characteristic />
      <Blog />
      <Portfolio />
      <Footer />
    </>
  )
}