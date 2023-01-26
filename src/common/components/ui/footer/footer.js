import styles from "./footer-style"
import { ttw } from "@utilts"

import Image from "next/image"
import Link from "next/link"
import { Section, Container, Grid, Column } from "@components/layout"
import { SocialLinks } from "@components/custom/social-links/social-links"

import navMenus from "@components/ui/navbar/nav-menus"

import ngodingoLogo from '@public/assets/logo/ngodingo-logo-horizontal-white.png'


export function Footer () {
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
              <div>
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