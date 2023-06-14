import { navMenus } from "@pages/_app/navigation"
import { ComingSoon, Footer, Navbar } from "@components"

import { Content } from "./content"

import { getAllPostLists, getPostBySlug } from "@services/blog"

export async function getStaticPaths() {
  const posts = getAllPostLists()  // type: array
  const slugs = posts.map(post => {
    return { params: { post_slug: post.slug } }
  })

  return {
    paths: slugs,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.post_slug)
  return { props: { post } }
}


export default function Posts({ post }) {
  // console.log(post)

  const isUnderConstruction = false
  if (isUnderConstruction) return <ComingSoon />

  return (
    <>
      <Navbar navMenus={navMenus} />
      <Content post={post} />
      <Footer navMenus={navMenus} />
    </>
  )
}