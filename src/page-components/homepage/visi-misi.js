// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import { Section, Container, Grid, Col } from '../../components/layout'



export function VisiMisi () {
  const visiMisi = {
    visi: 'Membentuk ekosistem mahasiswa yang semangat berkarya melalui coding untuk dapat bermanfaat bagi masyarakat sekitar',
    misi: [
      'Memberikan fasilitas untuk para anggota dapat belajar bersama tentang coding dengan kurikulum yang setara dengan kebutuhan industri',
      'Memberikan peluang untuk para anggota untuk dapat mengimplementasikan keilmuan coding yang telah dipelajari, melalui karya yang muncul dari keresahan masyarakat sekitar, kemudian mensosialisasikan karyanya untuk dapat digunakan',
      'Menyalurkan anggota ke project berbayar untuk dapat mendapat penghasilan dari hasil kerja kerasnya sendiri',
    ]
  }

  return (
    <Section>
      {/**/}
      <Container className="md:hidden">
        <div className="w-full h-full text-center">
          <h2 className="text-heading-3 lg:text-heading-1 font-semibold text-secondary-90">
            Visi dan Misi
          </h2>
        </div>
      </Container>
      {/**/}
      <Container className="mt-4">
        <Grid>
          <Col size="col-span-4 md:col-span-2 lg:col-start-2 lg:col-span-3" className="hidden md:block">
            <div className="w-full h-full relative">
              <span role="stepper-dash-horizontal" className="absolute w-full border-t-[3px] border-dashed border-primary-30 md:top-[15px] lg:top-[23px] -z-10"></span>
              <h2 className="text-heading-3 lg:text-heading-1 font-semibold text-secondary-90 w-max pr-6 bg-white">
                Visi
              </h2>
            </div>
          </Col>
          <Col size="col-span-4 md:col-span-6 lg:col-span-8">
            <div className="w-full h-full relative">
              <span role="stepper-dash-vertical" className="absolute h-full border-l-[3px] border-dashed border-primary-30 left-[15px] lg:left-[23px] -z-10"></span>
              <div className="grid grid-cols-[32px_1fr] lg:grid-cols-[48px_1fr] gap-x-4">
                <span role="stepper-circle" className="grid place-items-center basis-8 w-8 h-8 lg:w-12 lg:h-12 bg-white border-[3px] border-primary-50 rounded-full"></span>
                <p className="text-body-3 lg:text-body-2 font-normal text-secondary-50 pb-5 md:pb-10 lg:pb-14 xl:pb-18">{visiMisi.visi}</p>
              </div>
            </div>
          </Col>
        </Grid>
      </Container>
      {/**/}
      <Container>
        <Grid>
          <Col size="col-span-4 md:col-span-2 lg:col-start-2 lg:col-span-3" className="hidden md:block">
            <div className="w-full h-full relative">
              <span role="stepper-dash-horizontal" className="absolute w-full border-t-[3px] border-dashed border-primary-30 md:top-[15px] lg:top-[23px] -z-10"></span>
              <h2 className="text-heading-3 lg:text-heading-1 font-semibold text-secondary-90 w-max pr-4 bg-white">
                Misi
              </h2>
            </div>
          </Col>
          <Col size="col-span-4 md:col-span-6 lg:col-span-8">
            <div className="w-full h-full relative">
              <span role="stepper-dash-vertical" className="absolute h-full border-l-[3px] border-dashed border-primary-30 left-[15px] lg:left-[23px] -z-10"></span>
              {visiMisi.misi.map((value, i) => (
              <div className="grid grid-cols-[32px_1fr] lg:grid-cols-[48px_1fr] gap-x-4 last:bg-white group" key={i}>
                <span role="stepper-circle" className="grid place-items-center basis-8 w-8 h-8 lg:w-12 lg:h-12 bg-primary-50 rounded-full text-body-3 lg:text-heading-4 font-semibold text-white">{i+1}</span>
                <p className="text-body-3 lg:text-body-2 font-normal text-secondary-50 pb-5 lg:pb-12 group-last:pb-0">{value}</p>
              </div>
              ))}
            </div>
          </Col>
        </Grid>
      </Container>
      {/**/}
    </Section>
  )
}