import { useState } from "react"

import styles from "./navbar-style"
import { ttw } from "@utilts"

import Image from "next/image"
import Link from "next/link"
import { Spin as Hamburger } from "hamburger-react"
import { Container } from "@components/layout"
import { SocialLinks } from "@components/custom/social-links/social-links"

import navMenus from '@components/ui/navbar/nav-menus'

import ngodingoLogoSm from '@public/assets/logo/ngodingo-logo-basic-primary.png'
import ngodingoLogoLg from '@public/assets/logo/ngodingo-logo-horizontal-primary.png'


export function Navbar () {
  const [ isOpen, setOpen ] = useState(false) 

  const attr = {
    Nav: {},
    NavMenusWrapper: {},
    SocialLinksWrapper: {},
  }

  attr.Nav.className = ttw([
    styles.Nav.common,
    isOpen 
      ? styles.Nav.state.open
      : styles.Nav.state.close
  ])

  attr.NavMenusWrapper.className = ttw([
    styles.NavMenusWrapper,
    styles.transition.fadeInOutMenus(isOpen)
  ])

  attr.SocialLinksWrapper.className = ttw([
    styles.SocialLinksWrapper,
    styles.transition.fadeInOutMenus(isOpen)
  ])


  return (
    <nav className={attr.Nav.className}>
      <Container className={ttw(styles.Container)}>
        <div className={ttw(styles.Wrapper)}>
          <div className={ttw(styles.NavLogoHamburgerGroup)}>
            <Link 
              href="/" 
              className={ttw(styles.LogoWrapper)} 
              onClick={() => setOpen(false)}
              >
              <Image 
                src={ngodingoLogoSm}
                alt="logo"
                className={ttw(styles.Logo, 'block sm:hidden')}
                priority
              />
              <Image 
                src={ngodingoLogoLg}
                alt="logo"
                className={ttw(styles.Logo, 'hidden sm:block')}
                priority
              />
            </Link>
            <div className={ttw(styles.HamburgerWrapper)}>
              <Hamburger 
                toggled={isOpen} 
                toggle={setOpen}
                hideOutline={false}
              />
            </div>
          </div>
          <div className={ttw(attr.NavMenusWrapper.className)}>
            {navMenus.map((navMenu, i) => (
              <Link 
                key={i}
                href={navMenu.url}
                onClick={() => setOpen(false)}
                className={ttw(styles.NavMenus)}
              >
                {navMenu.name}
              </Link>

            ))}
          </div>
          <div className={ttw(attr.SocialLinksWrapper.className)}>
            <SocialLinks className={ttw(styles.SocialLinks)} />
          </div>
        </div>
      </Container>
    </nav>
  )
}