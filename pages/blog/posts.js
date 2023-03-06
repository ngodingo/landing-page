import styles from "./posts-style"
import { ttw } from "@utilts"

import Image from "next/image"
import Link from "next/link"
import { Chip } from "@components"
import { Pagination } from "@components"
import { Section, Container, Grid, Column } from "@layouts"
import { useState } from "react"

export function Posts ({posts}) {
  // console.log(posts[0].excerpt)
  // dummy
  // const postsX = Array.from({length: 100}, (_,i) => posts[i%3])

  // filter
  // ...

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  
  const paginatedPosts = paginate({
    items: posts,
    currentPage,
    pageSize
  })
  
  function onPageChange (page) {
    setCurrentPage(page)
  }

  return (
    <Section id="posts">
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 lg:col-6 md:col-start-2 lg:col-start-4">
            {/* <div className="w-full h-20 bg-blue-300">
              filter
            </div> */}
          </Column>
        </Grid>
        <Grid>
          <Column size="col-4 md:col-8 lg:col-8">
            <PostLists posts={paginatedPosts} />
          </Column>
          <Column size="col-0 md:col-0 lg:col-4">
            {/* <SideBar posts={posts} /> */}
          </Column>
        </Grid>
        <Grid>
          <Column size="col-full">
            <Pagination 
              itemSize={posts.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}


function PostLists ({posts}) {

  if (posts.length <= 0) return <div>loading</div>

  return (
    <div className={ttw(styles.Main.Container)}>
      {posts.map((post, i) => (
        <Link href={`blog/${post.slug}`} className={ttw(styles.Main.List.Container)} key={i}>
          <div className={ttw(styles.Main.List.Group.Wrapper)}>
            <img 
              src={post.image}
              alt="avatar"
              className={ttw(styles.Main.List.Group.AuthorImage)}
              width={24}
              height={24}
              loading="lazy"
            />
            <span className={ttw(styles.Main.List.Group.AuthorName)}>
              {post.author}
            </span>
            <span className={ttw(styles.Main.List.Group.Divider)} />
            <span className={ttw(styles.Main.List.Group.Tags)}>
              {post.category[0]}
            </span>
            <span className={ttw(styles.Main.List.Group.Divider)} />
            <span className={ttw(styles.Main.List.Group.Date)} >
              {post.date}
            </span>
            <span className={ttw(styles.Main.List.Group.Overflow)} />
          </div>
          <h3 className={ttw(styles.Main.List.Title)}>
            {post.title}
          </h3>
          <p className={ttw(styles.Main.List.Excerpt)}>
            {post.excerpt}
          </p>
        </Link>
      ))}

    </div>
  )
}


function SideBar ({posts}) {

  const continueReading = [posts[0], posts[1]]

  return (
    <div className={ttw(styles.Sidebar.Container)}>
      <h4 className={ttw(styles.Sidebar.Title)}>
        Continue Reading
      </h4>
      <div>
        {continueReading.map(post => (
          <Link href={`blog/${post.slug}`} className={ttw(styles.Sidebar.List.Container)} key={post.slug}>
            <div className={ttw(styles.Main.List.Group.Wrapper)}>
              <Image 
                src={post.author.image}
                alt="avatar"
                className={ttw(styles.Main.List.Group.AuthorImage)}
                width={24}
                height={24}
                loading="lazy"
              />
              <span className={ttw(styles.Main.List.Group.AuthorName)}>
                {post.author.name}
              </span>
              <span className={ttw(styles.Main.List.Group.Divider)} />
              <span className={ttw(styles.Main.List.Group.Tags)}>
                {post.tags[0]}
              </span>
              <span className={ttw(styles.Main.List.Group.Overflow)} />
            </div>
            <h3 className={ttw(styles.Sidebar.List.Title)}>
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}


// helper
function paginate ({items, currentPage, pageSize}) {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  return items.slice(startIndex, endIndex)
}

