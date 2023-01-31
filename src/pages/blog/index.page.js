import { Header } from "./header"
import { Posts } from "./posts"

import { Navbar } from "@components/ui"
import { Footer } from "@components/ui"
import { ComingSoon } from "@components/custom/empty-state/coming-soon"

import { getAllPostLists } from "@features/blog"


export async function getStaticProps () {
  const posts = getAllPostLists()
  return {
    props: {
      posts
    }
  }
}


export default function Blog ({posts}) {

  console.log(posts)

  const isUnderConstruction = false
  if (isUnderConstruction) return <ComingSoon />


  return (
    <>
      <Navbar />
      <Header posts={posts} />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}