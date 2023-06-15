import { ttw } from "common/utils"

import Image from "next/image"
import Link from "next/link"
import { Section, Container, Grid, Column } from "@layouts"
import { SocialLinks } from "@components"

import ngodingoLogo from '@assets/logo/ngodingo-logo-horizontal-white.png'


export function Footer ({navMenus}) {
  const styles = twStyles();

  return (
    <>
    <Section id="contact" className={ttw(styles.Section)}>
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-3">
            <h2 className={ttw(styles.Title)}>
              Contact Us
            </h2>
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-5">
            <form action="" className={ttw(styles.Form)}>
              <input
                type="email"
                name="email" 
                id="email"  
                placeholder="enter your email"
                className={ttw(styles.Input)}
              />
              <textarea 
                type="text" 
                name="message" 
                id="message"  
                placeholder="your message here"
                rows={6}
                className={ttw(styles.Input, styles.InputTextarea)}
              />
              <input 
                type="button" 
                value="Submit" 
                className={ttw(styles.Submit)}
              />
            </form>
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-4">
            <div className={ttw(styles.Wrapper)}>
              <div className={ttw(styles.LogoWrapper)}>
                <Image 
                  src={ngodingoLogo}
                  alt="logo"
                  className={ttw(styles.Logo)}
                />
              </div>
              <div className={ttw(styles.NavMenusWrapper)}>
                {navMenus.map((navMenu, i) => (
                  <Link
                    key={i}
                    href={navMenu.url}
                    className={ttw(styles.NavMenus)}
                  >
                    {navMenu.name}
                  </Link>
                ))}
              </div>
              <div className={ttw(styles.SocialLinksWrapper)}>
                <SocialLinks className={ttw(styles.SocialLinks)} />
              </div>
            </div>
          </Column>
        </Grid>
      </Container>
    </Section>
    <section className={ttw(styles.Copyright)}>
      <span>
        Copyright © 2022 Ngodingo. All rights reserved
      </span>
    </section>
    </>
  )
}


function twStyles () {
  return ({
    Section: [
      'bg-primary-90 selection:bg-secondary-30'
    ],
    Title: [
      'font-semibold text-white',
      'text-heading-3 lg:text-heading-1',
      'text-center lg:text-left'
    ],
    Form: [
      'block mt-8 lg:mt-0',
      'max-w-md mx-auto md:max-w-none'
    ],
    Input: [
      'w-full',
      'bg-transparent border-2 rounded-3xl',
      'border-primary-30',
      'focus:border-white focus:outline-none',
      'text-body-2 font-normal text-white',
      'py-3 px-5',
    ],
    InputTextarea: [
      'mt-4 sm:overflow-hidden'
    ],
    Submit: [
      'w-full h-12',
      'block px-6 py-2.5 mt-2',
      'font-body-2 font-bold text-white',
      'rounded-3xl box-border bg-primary-50',
      'hover:scale-105 hover:cursor-pointer active:scale-100 duration-[50ms]'
    ],
    Wrapper: [
      'flex mt-8 lg:mt-0 gap-y-4',
      'flex-col-reverse items-center',
      'sm:flex-row sm:justify-between',
      'lg:flex-col lg:items-end',
      'max-w-md mx-auto md:max-w-none'
    ],
    LogoWrapper: [
      'hidden lg:block'
    ],
    Logo: [
      'h-12 w-fit',
    ],
    NavMenusWrapper: [
      'w-fit flex lg:flex-col'
    ],
    NavMenus: [
      'block py-1 px-3',
      'text-body-2',
      'text-primary-30',
      'hover:text-white',
      'active:text-white',
      'lg:text-end',
    ],
    SocialLinksWrapper: [
      'w-fit flex'
    ],
    SocialLinks: [
      'text-primary-10 rounded-full',
      'hover:bg-primary-70',
      'active:bg-primary-70',
    ],
    Copyright: [
      'h-12 bg-primary-90 border-t border-primary-70',
      'grid place-items-center',
      'px-5',
      'text-body-4 font-light text-primary-70 text-center',
    ]
  })
}