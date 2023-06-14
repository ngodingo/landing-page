import { Hero } from "./home/hero"
import { About } from "./home/about"
import { VisiMisi } from "./home/visi-misi"
import { Characteristic } from "./home/characteristic"
import { Blog } from "./home/blog"
import { Portfolio } from "./home/portfolio"

import { navMenus } from "@pages/_app/navigation"
import { Navbar } from "@components"
import { Footer } from "@components"

import { getAllPostLists } from "@services/blog"

export default function Home({ posts }) {
  return (
    <>
      <Navbar navMenus={navMenus} />
      <Hero />
      <About />
      <VisiMisi />
      <Characteristic />
      <Blog posts={posts} />
      <Portfolio />
      <Footer navMenus={navMenus} />
    </>
  )
}


export async function getStaticProps() {
  const posts = getAllPostLists()
  return {
    props: {
      posts
    }
  }
}