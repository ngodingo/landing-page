import { Hero } from "./home/hero"
import { About } from "./home/about"
import { VisiMisi } from "./home/visi-misi"
import { Characteristic } from "./home/characteristic"
import { Blog } from "./home/blog"
import { Portfolio } from "./home/portfolio"

import { Navbar } from "@components/ui"
import { Footer } from "@components/ui"

import { getAllPostLists } from "@features/blog"

export default function Home ({posts}) {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <Characteristic />
      <Blog posts={posts} />
      <Portfolio />
      <Footer />
    </>
  )
}


export async function getStaticProps () {
  const posts = getAllPostLists()
  return {
    props: {
      posts
    }
  }
}