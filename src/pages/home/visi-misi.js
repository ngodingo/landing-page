import styles from "./visi-misi-style"
import { ttw } from "@utilts"

import { Section, Container, Grid, Column } from "@components/layout"

export function VisiMisi () {
  return (
    <Section>
      <Container>

        <Grid>
          <Column size="col-full" className="lg:hidden mb-4">
            <h2 className={ttw(styles.Title)}>
              Visi Misi
            </h2>
          </Column>
        </Grid>

        <Grid>
          <Column size="lg:col-3 lg:col-start-2" className="hidden lg:block">
            <div className="relative">
              <span className={ttw(styles.Dash.Horizontal)} />
              <h2 className={ttw(styles.Title)}>
                Visi
              </h2>
            </div>
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8">
            <div className={ttw(styles.Lists.Wrapper)}>
              <span className={ttw(styles.Lists.Bullet.Border)} />
              <p className={ttw(styles.Lists.Desc)}>
                Membentuk ekosistem mahasiswa yang semangat berkarya melalui coding
                untuk dapat bermanfaat bagi masyarakat sekitar
              </p>
              <span className={ttw(styles.Dash.Vertical)} />
            </div>
          </Column>
        </Grid>

        <Grid>
          <Column size="lg:col-3 lg:col-start-2" className="hidden lg:block">
            <div className="relative">
              <span className={ttw(styles.Dash.Horizontal)} />
              <h2 className={ttw(styles.Title)}>
                Misi
              </h2>
            </div>
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8">
          {[
            'Memberikan fasilitas untuk para anggota dapat belajar bersama tentang coding dengan kurikulum yang setara dengan kebutuhan industri',
            'Memberikan peluang untuk para anggota untuk dapat mengimplementasikan keilmuan coding yang telah dipelajari, melalui karya yang muncul dari keresahan masyarakat sekitar, kemudian mensosialisasikan karyanya untuk dapat digunakan',
            'Menyalurkan anggota ke project berbayar untuk dapat mendapat penghasilan dari hasil kerja kerasnya sendiri',
          ].map((misi, i, v) => (
            <div className={ttw(styles.Lists.Wrapper)} key={i}>
              <span className={ttw(styles.Lists.Bullet.Solid)} children={i+1} />
              <p className={ttw(styles.Lists.Desc)}>
                {misi}
              </p>
              {(i+1 < v.length) && (<span className={ttw(styles.Dash.Vertical)} />)}
            </div>
          ))}
          </Column>
        </Grid>

      </Container>
    </Section>
  )
}