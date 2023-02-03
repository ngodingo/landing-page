import styles from "./about-style"
import { ttw } from "@utilts"

import Image from "next/image"
import { Button } from "@components"
import { Section, Container, Grid, Column } from "@layouts"

import teamworkIllustration from "@public/static-db/home/images/teamwork.svg"


export function About () {
  return(
    <Section id="about">
      <Container>
        <Grid>

          <Column size="col-4 md:col-8 lg:col-6 xl:col-7">
            <div>
              <Image
                src={teamworkIllustration}
                alt="teamwork illustration"
                className={ttw(styles.Illustration)}
                loading="lazy"
              />
            </div>
          </Column>

          <Column size="col-4 md:col-8 lg:col-6 xl:col-5">
            <div className={ttw(styles.Wrapper)}>
              <h2 className={ttw(styles.Title)}> 
                About Us
              </h2>
              <p className={ttw(styles.Desc)}>
                Ngodingo, sebuah kata yang diambil dari bahasa jawa 
                yang apabila diartikan dalam bahasa Indonesia 
                senada dengan ngodinglah! yang sesuai dengan esensi dari 
                komunitas ini yaitu tentang berkarya melalui coding
              </p>
              <Button href="/#about" variant="primary">
                Learn More
              </Button>
            </div>
          </Column>

        </Grid>
      </Container>
    </Section>
  )
}