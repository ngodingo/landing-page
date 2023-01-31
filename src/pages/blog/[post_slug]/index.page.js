import { ComingSoon } from "@components/custom/empty-state/coming-soon"

import { getAllPostLists, getPostBySlug } from "@features/blog"

export async function getStaticPaths () {
  const posts = getAllPostLists()  // type: array
  const slugs = posts.map(post => {
    return {
      params: {
        post_slug: post.slug
      }
    }
  })

  return {
    paths: slugs,
    fallback: false
  }
}


export async function getStaticProps ({params}) {
  const post = getPostBySlug(params.post_slug)
  return {
    props: {
      post
    }
  }
}


export default function Posts ({post}) {

  const isUnderConstruction = true
  if (isUnderConstruction) return <ComingSoon />

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: post.content}}/>
    </>
  )
}