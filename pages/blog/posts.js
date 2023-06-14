import { ttw, formatDate } from "@utils"

import Image from "next/image"
import Link from "next/link"
import { Chip } from "@components"
import { Section, Container, Grid, Column } from "@layouts"

export function Posts({ posts }) {
  const styles = twStyles()

  // const postdate = posts[0].date;
  // const date = new Date( Date.parse(postdate))

  // console.log(date.getDate(), date.getMonth(), date.getFullYear())
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
            <PostLists posts={posts} />
          </Column>
          <Column size="col-0 md:col-0 lg:col-4">
            {/* <SideBar posts={posts} /> */}
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


function PostLists({ posts }) {
  const styles = twStyles()

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
              {formatDate(post.date)}
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


function SideBar({ posts }) {
  const styles = twStyles()

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


function twStyles () {
  return ({
    Main: {
      Container: [
        'max-w-md md:max-w-none mx-auto',
        // 'divide-y'
      ],
      List: {
        Container: [
          'block py-6 md:py-8',
          'flex flex-col gap-y-3 md:gap-y-4',
          'group',
        ],
        Group: {
          Wrapper: [
            'flex flex-nowrap items-center gap-x-3',
            'w-full overflow-hidden',
            'font-light text-secondary-30',
            'text-body-4 md:text-body-3',
            'relative'
          ],
          Overflow: [
            'absolute right-0 w-8 h-full',
            'bg-gradient-to-r from-white/10 to-white'
          ],
          AuthorImage: [
            'w-6 h-6 rounded-full bg-secondary-10',
          ],
          AuthorName: [
            'flex-none'
          ],
          Tags: [
            'text-primary-30 flex-none'
          ],
          Date: [
            'hidden md:inline'
          ],
          Divider: [
            'w-1 h-1 rounded-full bg-secondary-30 flex-none'
          ]
        },
        Title: [
          'font-medium text-secondary-90',
          'text-body-2 md:text-heading-4',
          'group-hover:underline group-hover:decoration-secondary-10',
          'group-active:underline group-active:decoration-primary-30/50 group-active:text-primary-30'
        ],
        Excerpt: [
          'font-light text-secondary-30',
          'text-body-2',
          'md:line-clamp-2 lg:line-clamp-3',
          'hidden md:inline'
        ]
      }
    },
    Sidebar: {
      Container: [
        'flex flex-col',
        'px-10 py-8',
        'border-l border-secondary-10',
        'sticky top-24'
      ],
      Title: [
        'font-medium text-primary-90',
        'font-body-2',
        'pb-6'
      ],
      List: {
        Container: [
          'block py-6',
          'flex flex-col gap-y-4',
          'group'
        ],
        Title: [
          'font-medium text-secondary-90',
          'font-body-2',
          'group-hover:underline group-hover:decoration-secondary-10',
          'group-active:underline group-active:decoration-primary-30/50 group-active:text-primary-30'
        ]
      }
    }
  })
}