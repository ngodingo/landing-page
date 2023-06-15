import { ttw, formatDate } from "@utils"

import Link from "next/link"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"


export function Blog ({posts}) {
  const styles = twStyles()

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


function twStyles () {
  return ({
    Section: [
      'bg-primary-10 selection:bg-primary-90'
    ],
    PostList: {
      Wrapper: [
        'py-8 group',
        'border-b border-secondary-10',
      ],
      Date: [
        'font-medium text-secondary-30',
        'text-body-4 lg:text-body-3'
      ],
      Title: [
        'font-semibold',
        'text-secondary-90 group-hover:text-primary-50',
        'text-heading-4 lg:text-heading-3',
        'mt-1'
      ],
      Desc: [
        'font-regular text-secondary-30 line-clamp-2',
        'text-body-3 lg:text-body-2',
        'mt-2'
      ],
    },
    Button: [
      'm-auto mt-8'
    ]
  })
}