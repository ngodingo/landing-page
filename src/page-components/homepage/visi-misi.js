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

        <Container className="md:hidden">

          <div className="">
              
                <h2 
                  className={tidyTw({
                    typography: `
                      font-semibold text-secondary-90 text-center
                      == text-heading-3
                      lg:text-heading-1
                    `,
                  })}
                >
                  Visi dan Misi
                </h2>

            </div>

        </Container>

        {/**/}

        <Container className="mt-4">

            <Grid>

                <Col
                  className={tidyTw({
                    size:`
                      == col-span-4
                      md:col-span-2
                      lg:col-span-3 lg:col-start-2
                    `,
                    layout: `
                      hidden
                      md:block
                    `,
                  })}
                >
                  
                    <div className="relative">

                        <span 
                          role="stepper-dash-horizontal"
                          className={tidyTw({
                            size: 'w-full',
                            style: 'border-t-[3px] border-dashed border-primary-30',
                            layout: `
                              absolute -z-10 -right-5
                              md:top-[15px] 
                              lg:top-[23px]
                            `,
                          })}
                        />

                        <h2
                          className={tidyTw({
                            typography: `
                              font-semibold text-secondary-90
                              == text-heading-3 
                              lg:text-heading-1
                            `,
                          })}
                        >

                            <span className="pr-6 bg-white">Visi</span>
                          
                        </h2>

                    </div>

                </Col>

                <Col 
                  size=""
                  className={tidyTw({
                    size: `
                      == col-span-4 
                      md:col-span-6 
                      lg:col-span-8
                    `,
                  })}
                >

                    <div className="relative">

                        <span 
                          role="stepper-dash-vertical"
                          className={tidyTw({
                            size: 'h-full',
                            style: 'border-l-[3px] border-dashed border-primary-30',
                            layout: `
                              absolute -z-10
                              == left-[15px] 
                              lg:left-[23px]
                            `,
                          })}
                        />

                        <div
                          className={tidyTw({
                            layout: `
                              flex gap-x-4
                              == pb-5 
                              sm:pb-8
                              md:pb-10 
                              lg:pb-14 
                              xl:pb-18
                            `,
                          })}
                        >

                            <span 
                              role="stepper-circle-bordered" 
                              className={tidyTw({
                                size: 'w-8 h-8 lg:w-12 lg:h-12',
                                layout: 'shrink-0 grow-0',
                                style: 'border-[3px] border-primary-50 bg-white rounded-full',
                              })}
                            />

                            <p
                              className={tidyTw({
                                typography: `
                                  font-normal text-secondary-50
                                  == text-body-3 
                                  lg:text-body-2
                                `,
                              })}
                            >
                              {visiMisi.visi}
                            </p>

                        </div>

                    </div>

                </Col>

            </Grid>

        </Container>

        {/**/}

        <Container>

            <Grid>

                <Col
                  className={tidyTw({
                    size:`
                      == col-span-4
                      md:col-span-2
                      lg:col-span-3 lg:col-start-2
                    `,
                    layout: `
                      hidden
                      md:block
                    `,
                  })}
                >
                  
                    <div className="relative">

                        <span 
                          role="stepper-dash-horizontal"
                          className={tidyTw({
                            size: 'w-full',
                            style: 'border-t-[3px] border-dashed border-primary-30',
                            layout: `
                              absolute -z-10 -right-5
                              md:top-[15px] 
                              lg:top-[23px]
                            `,
                          })}
                        />

                        <h2
                          className={tidyTw({
                            typography: `
                              font-semibold text-secondary-90
                              == text-heading-3 
                              lg:text-heading-1
                            `,
                          })}
                        >

                            <span className="pr-6 bg-white">Misi</span>
                          
                        </h2>

                    </div>

                </Col>

                <Col 
                  size=""
                  className={tidyTw({
                    size: `
                      == col-span-4 
                      md:col-span-6 
                      lg:col-span-8
                    `,
                  })}
                >

                    <div className="relative">

                        <span 
                          role="stepper-dash-vertical"
                          className={tidyTw({
                            size: 'h-full',
                            style: 'border-l-[3px] border-dashed border-primary-30',
                            layout: `
                              absolute -z-10
                              == left-[15px] 
                              lg:left-[23px]
                            `,
                          })}
                        />

                        {visiMisi.misi.map((value, i) => (

                        <div
                          key={i}
                          className={tidyTw({
                            layout: `
                              flex gap-x-4
                              == pb-5 
                              sm:pb-8
                              md:pb-10 
                              lg:pb-14 
                              xl:pb-18
                              last:pb-0 last:bg-white
                            `,
                          })}
                        >

                            <span 
                              role="stepper-circle-bordered" 
                              className={tidyTw({
                                size: 'w-8 h-8 lg:w-12 lg:h-12',
                                style: 'bg-primary-50 rounded-full',
                                layout: `
                                  shrink-0 grow-0
                                  grid place-items-center
                                `,
                                typography: `
                                  font-semibold text-white
                                  == text-body-3 
                                  lg:text-heading-4 
                                `,
                              })}
                            > 
                              {i+1}
                            </span>

                            <p
                              className={tidyTw({
                                typography: `
                                  font-normal text-secondary-50
                                  == text-body-3 
                                  lg:text-body-2
                                `,
                              })}
                            >
                              {value}
                            </p>

                        </div>

                        ))}

                    </div>

                </Col>

            </Grid>

        </Container>

    </Section>
  )
}



/*
  VISI MISI

  structure:
  ------------------
  -section
    -container
      -div
        -h2 'visi dan misi'
    -container
      -grid
        -col
          -div
            -span dash-horizontal
            -h2 'visi'
        -col
          -div
            -span dash-vertical
            -div
              -span circle
              -p
    -container
      -grid
        -col
          -div
            -span dash-horizontal
            -h2 'misi'
        -col
          -div
            -span dash-vertical
            {looping 3
            -div
              -span circle
              -p
            -div
              -span circle
              -p
            -div
              -span circle
              -p
            }
  ------------------
*/