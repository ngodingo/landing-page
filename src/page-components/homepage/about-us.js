// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import Image from 'next/image'
import { Section, Container, Grid, Col } from '../../components/layout'
import { Button } from '../../components/button'

// images
import teamworkImg from '../../../public/img/teamwork.svg'



export function AboutUs () {

  return (

    <Section id="about" >

        <Container>

            <Grid className="gap-y-8">
                        
                <Col 
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-6 md:col-start-2
                      lg:col-span-6
                      xl:col-span-7 
                    `,
                  })} 
                >

                    <div 
                      className={tidyTw({
                        size: `
                          max-w-[420px]
                          md:max-w-full
                        `,
                        layout: `
                          m-auto
                          md:px-8
                          lg:px-6
                          xl:px-12
                        `,
                      })}
                    >

                        <Image 
                          src={teamworkImg} 
                          alt="teamwork"
                          loading="lazy" 
                          className="w-full"
                        />

                    </div>

                </Col>

                <Col 
                  className={tidyTw({
                    size: `
                      == col-span-4
                      sm:col-span-8
                      lg:col-span-6
                      xl:col-span-5
                    `,
                  })}
                >

                    <div 
                      className={tidyTw({
                        size: 'h-full',
                        layout: `
                          grid
                          == place-items-center
                          lg:place-items-start lg:place-content-center
                        `,
                      })}
                    >

                        <h2 
                          className={tidyTw({
                            typography: `
                              font-semibold text-secondary-90
                              == text-heading-3 text-center
                              lg:text-heading-1 lg:text-left
                            `,
                          })} 
                        >
                          About Us
                        </h2>

                        <p 
                          className={tidyTw({
                            typography: `
                              font-normal text-secondary-50
                              == text-body-2 text-center
                              lg:text-body-1 lg:text-left
                            `,
                            layout: 'mt-4',
                          })} 
                        >
                          Ngodingo, sebuah kata yang diambil dari bahasa jawa 
                          yang apabila diartikan dalam bahasa Indonesia 
                          senada dengan ngodinglah! yang sesuai dengan esensi dari 
                          komunitas ini yaitu tentang berkarya melalui coding
                        </p>

                        <Button 
                          href="#" 
                          theme="primary" 
                          text="Learn More" 
                          className="mt-7"
                        />

                    </div>

                </Col>

            </Grid>

        </Container>

    </Section>

  )
}

/*
  ABOUT US

  structure:
  ------------------
  -section
    -container
      -grid
        -col
          -div
            -image
        -col
          -div
            -h2
            -p
            -button
  ------------------
*/