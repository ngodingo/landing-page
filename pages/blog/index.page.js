import { Header } from "./header"
import { Posts } from "./posts"

import { Navbar } from "@components"
import { Footer } from "@components"
import { ComingSoon } from "@components"

import { getAllPostLists } from "@services/blog"


export async function getStaticProps() {
  const posts = getAllPostLists()
  return {
    props: {
      posts
    }
  }
}


export default function Blog({ posts }) {
  // console.log(posts)

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


// renacana update: ambil artikel dari api medium
