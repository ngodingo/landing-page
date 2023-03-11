import styles from "./header-style"
import { ttw } from "@utilts"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"


export function Header({ posts }) {

  return (
    <Section className="relative !pt-24">
      <Container>
        <Grid>
          <Column size="col-4 md:col-5 lg:col-7">
            <div>
              <MainCard post={posts[0]} />
            </div>
          </Column>
          <Column size="col-0 md:col-3 lg:col-5" >
            <div className={ttw(styles.SecondaryCardsGroup)}>
              {posts.length > 1 && <SecondaryCard post={posts[1]} />}
              {posts.length > 2 && <SecondaryCard post={posts[2]} />}
            </div>
          </Column>
        </Grid>
      </Container>
      <Background />
    </Section>
  )
}


function MainCard({ post }) {
  return (
    <div className={ttw(styles.MainCard.Container)}>
      <div className={ttw(styles.MainCard.Author.Wrapper)}>
        <Image
          src={post.author.image}
          alt="avatar"
          className={ttw(styles.MainCard.Author.Image)}
          width={24}
          height={24}
          loading="lazy"
        />
        <span className={ttw(styles.MainCard.Author.Name)}>
          {post.author.name}
        </span>
      </div>
      <h3 className={ttw(styles.MainCard.Title)}>
        {post.title}
      </h3>
      <p className={ttw(styles.MainCard.Excerpt)}>
        {post.excerpt}
      </p>
      <div className={ttw(styles.MainCard.ButtonGroup)}>
        <Button href={`blog/${post.slug}`} variant="primary">
          Read Now
        </Button>
        <Button href="#posts" variant="secondary">
          Load More
        </Button>
      </div>
    </div>
  )
}


function SecondaryCard({ post }) {
  return (
    <Link href={`blog/${post.slug}`} className={ttw(styles.SecondaryCard.Container)}>
      <div className={ttw(styles.MainCard.Author.Wrapper)}>
        <Image
          src={post.author.image}
          alt="avatar"
          className={ttw(styles.MainCard.Author.Image)}
          width={24}
          height={24}
          loading="lazy"
        />
        <span className={ttw(styles.MainCard.Author.Name)}>
          {post.author.name}
        </span>
      </div>
      <h3 className={ttw(styles.SecondaryCard.Title)}>
        {post.title}
      </h3>
    </Link>
  )
}


function Background() {
  return (
    <div className={ttw(styles.Background.Container)}>
      <div className={ttw(styles.Background.Wrapper)}>
        <span className={ttw(styles.Background.Circle1)} />
        <span className={ttw(styles.Background.Circle2)} />
      </div>
    </div>
  )
}