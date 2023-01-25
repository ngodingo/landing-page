import { Hero } from "./home/hero"
import { About } from "./home/about"
import { VisiMisi } from "./home/visi-misi"
import { Characteristic } from "./home/characteristic"
import { Blog } from "./home/blog"
import { Portfolio } from "./home/portfolio"

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <VisiMisi />
      <Characteristic />
      <Blog />
      <Portfolio />
    </>
  )
}