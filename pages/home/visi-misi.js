import { ttw } from "@utils"
import { Section, Container, Grid, Column } from "@layouts"


export function VisiMisi() {
  const styles = twStyles()

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
                <span className={ttw(styles.Lists.Bullet.Solid)}>
                  {i + 1}
                </span>
                <p className={ttw(styles.Lists.Desc)}>
                  {misi}
                </p>
                {(i + 1 < v.length) && (<span className={ttw(styles.Dash.Vertical)} />)}
              </div>
            ))}
          </Column>
        </Grid>

      </Container>
    </Section>
  )
}


function twStyles() {
  return ({
    Title: [
      // common
      'font-semibold text-secondary-90 ',
      // base - md
      'text-center text-heading-3',
      // >= lg
      'lg:text-right lg:text-heading-1',
      'lg:bg-white lg:w-fit lg:pr-4',
      'lg:relative lg:-top-1.5'
    ],
    Lists: {
      Wrapper: [
        'flex relative',
        'pb-5 sm:pb-5 md:pb-6 lg:pb-14 xl:pb-18',
      ],
      Bullet: {
        Solid: [
          'w-8 h-8 lg:w-12 lg:h-12 rounded-full',
          'shrink-0 grow-0',
          'mr-4 lg:mr-5',
          'border-[3px] border-primary-50 bg-primary-50',
          'grid place-items-center',
          'font-semibold text-white text-body-3 lg:text-heading-4 '
        ],
        Border: [
          'w-8 h-8 lg:w-12 lg:h-12 rounded-full',
          'shrink-0 grow-0',
          'mr-4 lg:mr-5',
          'border-[3px] border-primary-50 bg-white',
        ]
      },
      Desc: [
        'font-normal text-secondary-50',
        'text-body-3 lg:text-body-2',
      ],
    },
    Dash: {
      Vertical: [
        'h-full absolute left-[15px] lg:left-[23px] -z-40',
        'border-l-[3px] border-dashed border-primary-30',
      ],
      Horizontal: [
        'w-full absolute md:top-[15px] lg:top-[23px] -right-5 -z-40',
        'border-t-[3px] border-dashed border-primary-30'
      ]
    }
  })
}