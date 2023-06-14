import styles from "./blog-style"
import { ttw, formatDate } from "common/utils"

import Link from "next/link"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"


export function Blog ({posts}) {
  return (
    <Section className={ttw(styles.Section)}>
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8 lg:col-start-3">
            {posts.map((post, i) => (
            <Link href={`blog/${post.slug}`} key={i}>
              <div className={ttw(styles.PostList.Wrapper)}>  
                <span className={ttw(styles.PostList.Date)}>
                  {formatDate(post.date)}
                </span>
                <h3 className={ttw(styles.PostList.Title)}>
                  {post.title}
                </h3>
                <p className={ttw(styles.PostList.Desc)}>
                  {post.excerpt}
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