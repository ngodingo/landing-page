import { ttw } from "@utils"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"


export function Header({ posts }) {
  const styles = twStyles()

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
  const styles = twStyles()

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
  const styles = twStyles()

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
  const styles = twStyles()

  return (
    <div className={ttw(styles.Background.Container)}>
      <div className={ttw(styles.Background.Wrapper)}>
        <span className={ttw(styles.Background.Circle1)} />
        <span className={ttw(styles.Background.Circle2)} />
      </div>
    </div>
  )
}


function twStyles () {
  return ({
    MainCard: {
      Container: [
        'm-auto md:m-0 xl:ml-5',
        'p-6 sm:p-8 md:p-10 xl:p-16',
        'max-w-md md:max-w-none',
        'bg-white rounded-3xl',
        'flex flex-col gap-4 md:gap-5 lg:gap-6'
      ],
      Author: {
        Wrapper: [
          'flex items-center gap-x-3'
        ],
        Image: [
          'w-6 h-6 rounded-full bg-secondary-10'
        ],
        Name: [
          'font-light text-secondary-30',
          'text-body-4 md:text-body-3'
        ],
      },
      Title: [
        'font-medium text-primary-90',
        'text-body-1 md:text-heading-4 lg:text-heading-2'
      ],
      Excerpt: [
        'font-light text-secondary-50 line-clamp-3',
        'text-body-3 md:text-body-2'
      ],
      ButtonGroup: [
        'flex gap-2 mt-2'
      ],
    },
    SecondaryCardsGroup: [
      'flex flex-col gap-5'
    ],
    SecondaryCard: {
      Container: [
        'lg:mx-5',
        'md:p-8 lg:p-10',
        'bg-white rounded-3xl',
        'flex flex-col gap-4',
        'group hover:cursor-pointer',
      ],
      Author: {
        Wrapper: [
          'flex items-center gap-x-3'
        ],
        Image: [
          'w-6 h-6 rounded-full bg-secondary-10',
        ],
        Name: [
          'font-light text-secondary-30',
          'text-body-4 md:text-body-3'
        ],
      },
      Title: [
        'font-regular text-primary-90',
        'text-body-2',
        'line-clamp-3',
        'group-hover:underline',
        'group-active:underline'
      ],
    },
    Background: {
      Container: [
        'w-full h-full',
        'absolute top-0 -z-40 overflow-hidden',
        'grid place-items-center',
      ],
      Wrapper: [
        'min-w-full',
        'flex justify-center',
      ],
      Circle1: [
        'w-48 h-48 md:w-56 md:h-56 rounded-full',
        'bg-accent-50/[.6] blur-2xl',
        'md:relative md:-left-28 lg:-left-56 lg:-top-8 xl:-left-80 xl:-top-12'
      ],
      Circle2: [
        'w-80 h-80 md:w-96 md:h-96 rounded-full',
        'bg-primary-50/[.6] blur-3xl'
      ]
    }
  })
}