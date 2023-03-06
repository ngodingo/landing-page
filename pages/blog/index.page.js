import { Header } from "./header"
import { Posts } from "./posts"

import { Navbar } from "@components"
import { Footer } from "@components"
import { ComingSoon } from "@components"

import parse from "rss-to-json"
import parseHtml from "html-react-parser"
// import { getAllPostLists } from "@services/blog"


// export async function getStaticProps () {
//   const posts = getAllPostLists()
//   return {
//     props: {
//       posts
//     }
//   }
// }

export async function getServerSideProps () {

  const authorImage = "https://cdn-images-1.medium.com/fit/c/150/150/1*oIcOJ0B6qd6UBFvqmJ59Fw.png"

  function generateSlug (url) {
    let slug = url.split("/").pop().split("?").shift()
    return slug
  }

  function generateExcerpt (content) {
    let excerpt = parseHtml(content).find(item => item.type === "p")
    return excerpt.props.children
  }

  const data = await parse('https://medium.com/feed/@ngodingo.team')
  .then(response => response.items.map(item => ({
    id: item.id,
    title: item.title,
    author: item.author,
    image: authorImage,
    category: item.category,
    slug: generateSlug(item.link),
    excerpt: generateExcerpt(item.content),
  })))

  return {
    props: {
      posts: data
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


// renacana update: ambil artikel dari api medium
