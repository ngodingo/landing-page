import styles from "./blog-style"
import { ttw } from "@utilts"

import Link from "next/link"
import { Button } from "@components/ui"
import { Section, Container, Grid, Column } from "@components/layout"


export function Blog () {

  const posts = [
    {
      id: '0',
      title: 'JavaScript learning roadmap 2023 — The Ultimate Guide',
      desc: 'What is JavaScript? — A high-level definition JavaScript is a scripting or programming language that allows you to implement complex featur ...',
      image: '',
      date: 'Desember 2022',
      slug: '/blog',
    },
    {
      id: '1',
      title: 'Mastering Dart & Flutter DevTools — Part 1: Introduction & Installation',
      desc: 'After building a full-fledged feature rich Flutter app, you might experience an urge to build a release bundle, upload it on the app store or play store and share it with the world ...',
      image: '',
      date: 'Desember 2022',
      slug: '/blog',
    },
    {
      id: '2',
      title: 'Basic concepts that every rookie data scientist should know!',
      desc: 'When we are dealing with data, no matter the volume, the better it’s mapped out the easier for us to handle it. In data science there is a term called Estimates of Location ...',
      image: '',
      date: 'Desember 2022',
      slug: '/blog',
    }
  ]

  return (
    <Section className={ttw(styles.Section)}>
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8 lg:col-start-3">
            {posts.map((post, i) => (
            <Link href={post.slug} key={i}>
              <div className={ttw(styles.PostList.Wrapper)}>  
                <span className={ttw(styles.PostList.Date)}>
                  {post.date}
                </span>
                <h3 className={ttw(styles.PostList.Title)}>
                  {post.title}
                </h3>
                <p className={ttw(styles.PostList.Desc)}>
                  {post.desc}
                </p>
              </div>
            </Link>
            ))}
          </Column>
        </Grid>
        <Grid>
          <Column size="col-full">
            <Button href="/blog" variant="secondary" className={ttw(styles.Button)}>
              Load More
            </Button>
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}