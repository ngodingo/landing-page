import styles from "./portfolio-style"
import { ttw } from "@utilts"

import Image from "next/image"
import { Section, Container, Grid, Column } from "@components/layout"

import dummyImage from "@public/static-db/home/images/app-project.png"
import { Button } from "@components/ui"

export function Portfolio () {
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