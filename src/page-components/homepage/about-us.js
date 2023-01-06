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

            <Grid
              className={tidyTw({
                layout: {
                  common: 'gap-y-8',
                  lg: 'lg:gap-x-5',
                }
              })}
            >
                        
                <Col 
                  className={tidyTw({
                    size: {
                      bs: 'col-span-4',
                      md: 'md:col-span-6 md:col-start-2',
                      lg: 'lg:col-span-6',
                      xl: 'xl:col-span-7',
                    }
                  })} 
                >

                    <div 
                      className={tidyTw({
                        size: {
                          bs: 'max-w-[420px]',
                          md: 'md:max-w-full',
                        },
                        layout: {
                          common: 'm-auto',
                          md: 'md:px-8',
                          lg: 'lg:px-6',
                          xl: 'xl:px-12',
                        }
                      })}
                    >

                        <Image 
                          src={teamworkImg} 
                          alt="teamwork"
                          loading="lazy" 
                          className={tidyTw({
                            size: 'w-full',
                          })}
                        />

                    </div>

                </Col>

                <Col 
                  className={tidyTw({
                    size: {
                      bs: 'col-span-4',
                      sm: 'sm:col-span-8',
                      lg: 'lg:col-span-6',
                      xl: 'xl:col-span-5',
                    }
                  })}
                >

                    <div 
                      className={tidyTw({
                        size: 'w-full h-full',
                        layout: {
                          common: 'grid',
                          bs: 'place-items-center',
                          lg: 'lg:place-items-start lg:place-content-center',
                        },
                        typography: {
                          bs: 'text-center',
                          lg: 'lg:text-left',
                        },
                      })}
                    >

                        <h2 
                          className={tidyTw({
                            typography: {
                              common: 'font-semibold text-secondary-90',
                              bs: 'text-heading-3',
                              lg: 'lg:text-heading-1',
                            }
                          })} 
                        >
                          About Us
                        </h2>

                        <p 
                          className={tidyTw({
                            typography: {
                              common: 'font-normal text-secondary-50',
                              bs: 'text-body-2',
                              lg: 'lg:text-body-1',
                            },
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
                          className={tidyTw({
                            layout: 'mt-7',
                          })}
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