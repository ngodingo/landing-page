import styles from "./posts-style"
import { ttw } from "@utilts"



import { Chip } from "@components/ui"

import Image from "next/image"
import Link from "next/link"
import { Section, Container, Grid, Column } from "@components/layout"

export function Posts ({posts}) {
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
            <PostLists posts={posts}/>
          </Column>
          <Column size="col-0 md:col-0 lg:col-4">
            <SideBar posts={posts} />
          </Column>
        </Grid>
        <Grid>
          <Column size="col-full">
            {/* <div className="w-full h-20 bg-orange-300">
              pagination
            </div> */}
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}


function PostLists ({posts}) {

  // console.log(posts[0].tags)

  return (
    <div className={ttw(styles.Main.Container)}>
      {posts.map(post => (
        <Link href={`blog/${post.slug}`} className={ttw(styles.Main.List.Container)} key={post.slug}>
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