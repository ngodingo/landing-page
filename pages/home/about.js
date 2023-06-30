import { ttw } from "@utils";

import Image from "next/image";
import { Button } from "@components";
import { Section, Container, Grid, Column } from "@layouts";

import teamworkIllustration from "@assets/images/teamwork.svg";

export function About() {
  const styles = twStyles();

  return (
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
              <h2 className={ttw(styles.Title)}>About Us</h2>
              <p className={ttw(styles.Desc)}>
                Ngodingo, sebuah kata yang diambil dari bahasa jawa yang apabila
                diartikan dalam bahasa Indonesia senada dengan ngodinglah! yang
                sesuai dengan esensi dari komunitas ini yaitu tentang berkarya
                melalui coding
              </p>
              <Button href="/#about" variant="primary">
                Learn More
              </Button>
            </div>
          </Column>
        </Grid>
      </Container>
    </Section>
  );
}

function twStyles() {
  return {
    Illustration: [
      "w-full rounded-3xl overflow-hidden mx-auto",
      "max-w-[420px] md:max-w-[500px] lg:max-w-[456px] xl:max-w-[520px]",
      "bg-primary-10",
    ],
    Wrapper: [
      "h-full",
      "flex flex-col justify-center",
      "items-center lg:items-start",
      "text-center lg:text-start",
    ],
    Title: [
      "font-semibold text-secondary-90",
      "text-heading-3 lg:text-heading-1",
      "mt-8 lg:mt-0",
    ],
    Desc: [
      "font-light text-secondary-50",
      "text-body-2 lg:text-body-1",
      "mt-4 mb-8",
    ],
  };
}
