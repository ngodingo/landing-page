import { ttw } from "@utils"

import Image from "next/image"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"

import dummyImage from "@assets/images/app-project.png"

export function Portfolio () {
  const styles = twStyles()

  return (
    <Section id="portfolio">
      <Container>

        {[1,2].map((v,i) => (
        <div className={ttw(styles.Project.Wrapper)} key={i}>
          <Grid>
            <Column size="col-4 md:col-8 lg:col-9">
              <div>
                <span className={ttw(styles.Project.Date)}>
                  Desember 2022
                </span>
                <h3 className={ttw(styles.Project.Title)}>
                  Lorem Ipsum is simply dummy text of the printing
                </h3>
                <p className={ttw(styles.Project.Desc)}>
                  Lorem Ipsum has been the industry&apos;s standard dummy text 
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </Column>
            <Column size="col-4 md:col-8 lg:col-3">
              <div className={ttw(styles.Project.Info.GroupWrapper)}>
                <div>
                  <span className={ttw(styles.Project.Info.Title)}>
                    Design Tools
                  </span>
                  <ul className={ttw(styles.Project.Info.Desc)}>
                    <li>Figma</li>
                    <li>Adobe AE</li>
                  </ul>
                </div>
                <div>
                  <span className={ttw(styles.Project.Info.Title)}>
                    Fonts
                  </span>
                  <ul className={ttw(styles.Project.Info.Desc)}>
                    <li>Lexend Deca</li>
                    <li>Poppins</li>
                  </ul>
                </div>
              </div>
            </Column>
          </Grid>
          <div>
            <div>
              <Image 
                src={dummyImage}
                alt="project"
                className={ttw(styles.Project.Image.Main)}
              />
            </div>
            <div className={ttw(styles.Project.Image.SecondaryWrapper)}>
              <Image 
                src={dummyImage}
                alt="project"
                className={ttw(styles.Project.Image.Secondary)}
              />
              <Image 
                src={dummyImage}
                alt="project"
                className={ttw(styles.Project.Image.Secondary)}
              />
              <Image 
                src={dummyImage}
                alt="project"
                className={ttw(styles.Project.Image.Secondary)}
              />
            </div>
          </div>
        </div>
        ))}

        <div>
          <Button href="/#portfolio" variant="secondary" className={ttw(styles.Button)}>
            Load More
          </Button>
        </div>

      </Container>
    </Section>
  )
}


function twStyles () {
  return ({
    Project: {
      Wrapper: [
        'py-8 lg:py-16'
      ],
      Date: [
        'font-medium text-secondary-30',
        'text-body-4 lg:text-body-3'
      ],
      Title: [
        'font-semibold text-secondary-90',
        'text-heading-3 lg:text-heading-1',
        'mt-1',
      ],
      Desc: [
        'font-regular text-secondary-30',
        'text-body-3 lg:text-body-2',
        'mt-4'
      ],
      Info: {
        GroupWrapper: [
          'flex flex-row lg:flex-col gap-5',
          'mt-5 lg:mt-8'
        ],
        Title: [
          'block w-full',
          'font-medium text-secondary-50',
          'text-body-4 lg:text-body-3 lg:text-right'
        ],
        Desc: [
          'font-medium text-secondary-30',
          'text-body-4 lg:text-body-3 lg:text-right'
        ]
      },
      Image: {
        Main: [
          'w-full rounded-3xl object-cover',
          'aspect-[3/4] [@media(min-width:540px)]:aspect-video',
          'bg-primary-10',
          'mt-6 sm:mt-8'
        ],
        SecondaryWrapper: [
          'grid grid-cols-2 [@media(min-width:540px)]:grid-cols-3',
          'gap-x-4 lg:gap-x-5',
          'mt-4 lg:mt-5'
        ],
        Secondary: [
          'aspect-square rounded-3xl object-cover',
          'last:hidden [@media(min-width:540px)]:last:block',
          'bg-primary-10'
        ],
      }
    },
    Button: [
      'mt-8 m-auto'
    ]
  })
}