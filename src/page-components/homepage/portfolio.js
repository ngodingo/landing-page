// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import Image from 'next/image'
import { Button } from '../../components/atoms/button'
import { Section, Container, Grid, Col } from '../../components/atoms/layout'

import dummyImg from '../../../public/images/appProject.png'


export function Portfolio () {
  return (

    <Section id="portfolio">

        <Container className="py-12">

            <Grid
              className={tidyTw({
                layout: `
                  == mt-16
                  md:mt-24
                  first:mt-0
                `,
              })}
            >

                <Col
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-8
                      lg:col-span-9 
                    `,
                  })}
                >
                
                    <div
                      role="wrapper"
                      className=''
                    >

                        <span
                          className={tidyTw({
                            typography: `
                              font-medium text-secondary-30
                              == text-body-4
                              lg:text-body-3
                            `,
                          })}
                        >
                          Desember 2022
                        </span>

                        <h3
                          className={tidyTw({
                            typography: `
                              font-semibold text-secondary-90
                              == text-heading-3
                              lg:text-heading-1
                            `,
                            layout: 'mt-1',
                          })}
                        >
                          Lorem Ipsum is simply dummy text of the printing
                        </h3>

                        <p
                          className={tidyTw({
                            typography: `
                              font-regular text-secondary-30
                              == text-body-3
                              lg:text-body-2
                            `,
                            layout: 'mt-4',
                          })}
                        >
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley.
                        </p>

                    </div>

                </Col>

                <Col
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-8
                      lg:col-span-3 
                    `,
                  })}
                >

                    <div
                      role="wrapper"
                      className={tidyTw({
                        typography: `
                          font-medium text-secondary-30
                          == text-body-4
                          lg:text-body-3 lg:text-right
                        `,
                        layout: `
                          flex gap-5
                          lg:flex-col
                          == mt-5
                          lg:mt-10
                        `,
                      })}
                    >

                        <div>

                            <span className="text-secondary-50">
                              Design tool
                            </span>
                            
                            <br />

                            <span>
                              Figma <br /> Adobe XD
                            </span>

                        </div>

                        <div>

                            <span className="text-secondary-50">
                              Font
                            </span>

                            <br />

                            <span>
                              lexend deca
                            </span>

                        </div>

                    </div>

                </Col>

                <Col
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-8
                      lg:col-span-12
                    `,
                    layout: 'mt-8'
                  })}
                >

                    <div
                      role="image-wrapper"
                      className={tidyTw({
                        size: `
                          aspect-[3/4]
                          [@media(min-width:540px)]:aspect-video
                        `,
                        style: 'rounded-3xl bg-secondary-10/30',
                        layout: 'overflow-hidden',
                      })}
                    >

                        <Image
                          src={dummyImg}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                    </div>

                </Col>

                <Col
                  className={tidyTw({
                    size: 'col-span-2 md:col-span-4',
                    layout: 'mt-5',
                  })}
                >

                    <div
                      role="image-wrapper"
                      className={tidyTw({
                        size: 'aspect-square',
                        style: 'rounded-3xl bg-secondary-10/30',
                        layout: 'overflow-hidden',
                      })}
                    >

                        <Image
                          src={dummyImg}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                    </div>

                </Col>

                <Col
                  className={tidyTw({
                    size: 'col-span-2 md:col-span-4',
                    layout: 'mt-5',
                  })}
                >

                    <div
                      role="image-wrapper"
                      className={tidyTw({
                        size: 'aspect-square',
                        style: 'rounded-3xl bg-secondary-10/30',
                        layout: 'overflow-hidden',
                      })}
                    >

                        <Image
                          src={dummyImg}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                    </div>

                </Col>

                <Col
                  className={tidyTw({
                    size: 'md:col-span-4',
                    layout: 'hidden lg:block mt-5',
                  })}
                >

                    <div
                      role="image-wrapper"
                      className={tidyTw({
                        size: 'aspect-square',
                        style: 'rounded-3xl bg-secondary-10/30',
                        layout: 'overflow-hidden',
                      })}
                    >

                        <Image
                          src={dummyImg}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                    </div>

                </Col>

            </Grid>


            <div className="mt-8">

                <Button 
                  theme="secondary"
                  href=""
                  text="Load More"
                  className="mx-auto"
                />

            </div>

        </Container>

    </Section>

  )
}