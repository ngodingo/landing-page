import Link from "next/link"
import { tidyTw } from "../../../../utilts/tidy-tailwind"

import { Section, Container, Grid, Col } from "../../../../components/atoms/layout"
import { SocialLinks } from "../../../../components/molecules/socialLinks"

import { navMenus } from "../navbar/navbar"

export function Footer () {
  return (
    <Section id="contact" className="bg-primary-90 !pb-0">

        <Container>

            <Grid>

                <Col 
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-6 md:col-start-2
                      lg:col-span-3
                    `
                })}>

                    <h2 
                      className={tidyTw({
                        typography: `
                          font-semibold text-white
                          == text-heading-3 text-center
                          lg:text-heading-1 lg:text-left
                        `,
                      })} 
                    >
                      Contact Us
                    </h2>

                </Col>

                <Col 
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-6 md:col-start-2
                      lg:col-span-5   
                    `
                })}>

                    <form action="" className="block mt-8 lg:mt-0">

                      <input 
                        type="email" 
                        name="email" 
                        id="email"  
                        placeholder="enter your email"
                        className={tidyTw({
                          size: 'w-full',
                          style: `
                            bg-transparent border-2 rounded-3xl
                            border-primary-30
                            focus:border-white focus:outline-none
                          `,
                          typography: `
                            text-body-2 font-normal text-white
                          `,
                          layout: 'py-3 px-5'
                        })} 
                      />

                      <textarea 
                        type="text" 
                        name="email" 
                        id="email"  
                        placeholder="your message here"
                        rows={6}
                        className={tidyTw({
                          size: 'w-full',
                          style: `
                            bg-transparent border-2 rounded-3xl
                            border-primary-30
                            focus:border-white focus:outline-none
                          `,
                          typography: `
                            text-body-2 font-normal text-white
                          `,
                          layout: 'py-3 px-5 mt-4 overflow-hidden'
                        })} 
                      />

                      <input 
                        type="button" 
                        value="Submit" 
                        className={tidyTw({
                          size: 'w-full h-12',
                          layout: 'block px-6 py-2.5 mt-2',
                          typography: 'font-body-2 font-bold text-white',
                          style: 'rounded-3xl box-border bg-primary-50',
                          interaction: 'hover:scale-105 hover:cursor-pointer active:scale-100 duration-[50ms]'
                        })}
                      />

                    </form>
                  
                </Col>

                <Col 
                  className={tidyTw({
                    size: `
                      == col-span-4
                      md:col-span-6 md:col-start-2
                      lg:col-span-4   
                    `
                })}>

                    <div
                      className={tidyTw({
                        layout: `
                          flex mt-8 lg:mt-0 gap-y-4
                          == flex-col-reverse items-center
                          sm:flex-row sm:justify-between
                          lg:flex-col lg:items-end
                        `
                      })}
                    >

                        <div className="hidden lg:block pr-3">

                            <span className="text-heading-4 text-white"> 
                              ngodingo
                            </span>

                        </div>

                        <div className="w-fit flex lg:flex-col">

                            {navMenus.map((menu, i) => (
                            <Link
                              key={i}
                              href={menu.url}
                              className={tidyTw({
                                layout: 'block py-1 px-3',
                                typography: `
                                  text-body-2 
                                  text-primary-30
                                  hover:text-white
                                  active:text-primary-50
                                  lg:text-end
                                `,
                              })}
                            >
                              {menu.name}
                            </Link>
                            ))}

                        </div>
                        
                        <div className="w-fit flex">
                          
                            <SocialLinks className="text-white" />

                        </div>

                    </div>
                  
                </Col>

            </Grid>

        </Container>

        <Container fluid>

          <div className="h-12 grid place-items-center border-t border-primary-70 mt-8 md:mt-14">
            
            <span className="text-body-4 font-light text-primary-70">
              Copyright © 2022 Ngodingo. All rights reserved
            </span>

          </div>

        </Container>

    </Section>
  )
}