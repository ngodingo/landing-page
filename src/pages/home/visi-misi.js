import styles from "./visi-misi-style"
import { ttw } from "@utilts"

import { Section, Container, Grid, Column } from "@components/layout"

export function VisiMisi () {
  return (
    <Section>
      <Container>

        <Grid>
          <Column size="col-4" className="md:hidden">
            <h2 className={ttw(styles.Title.Mobile)}>
              Visi Misi
            </h2>
          </Column>
        </Grid>

        <Grid>
          <Column size="md:col-2 lg:col-3 lg:col-start-2" className="hidden md:block">
            <h2 className={ttw(styles.Title.Default)}>
              Visi
            </h2>
          </Column>
          <Column size="col-4 md:col-6 lg:col-8">
            <div className={ttw(styles.Lists.Wrapper)}>
              <span className={ttw(styles.Lists.DashVertical)} />
              <span className={ttw(styles.Lists.Bullet.Border)} />
              <p className={ttw(styles.Lists.Desc)}>
                Membentuk ekosistem mahasiswa yang semangat berkarya melalui coding
                untuk dapat bermanfaat bagi masyarakat sekitar
              </p>
            </div>
          </Column>
        </Grid>

        <Grid>
          <Column size="md:col-2 lg:col-3 lg:col-start-2" className="hidden md:block">
            <h2 className={ttw(styles.Title.Default)}>
              Misi
            </h2>
          </Column>
          <Column size="col-4 md:col-6 lg:col-8">
            {[
              'Memberikan fasilitas untuk para anggota dapat belajar bersama tentang coding dengan kurikulum yang setara dengan kebutuhan industri',
              'Memberikan peluang untuk para anggota untuk dapat mengimplementasikan keilmuan coding yang telah dipelajari, melalui karya yang muncul dari keresahan masyarakat sekitar, kemudian mensosialisasikan karyanya untuk dapat digunakan',
              'Menyalurkan anggota ke project berbayar untuk dapat mendapat penghasilan dari hasil kerja kerasnya sendiri',
            ].map((misi, i) => (
              <div className={ttw(styles.Lists.Wrapper)} key={i}>
                <span className={ttw(styles.Lists.DashVertical)} />
                <span className={ttw(styles.Lists.Bullet.Solid)} children={i+1} />
                <p className={ttw(styles.Lists.Desc)}>
                  {misi}
                </p>
              </div>
            ))}

          </Column>
        </Grid>

      </Container>
    </Section>
  )
}