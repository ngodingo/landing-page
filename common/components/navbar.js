import { useState } from "react"

import { ttw } from "common/utils"

import Image from "next/image"
import Link from "next/link"
import { Spin as Hamburger } from "hamburger-react"
import { Container } from "@layouts"
import { SocialLinks } from "@components"

import ngodingoLogoSm from '@assets/logo/ngodingo-logo-basic-primary.png'
import ngodingoLogoLg from '@assets/logo/ngodingo-logo-horizontal-primary.png'


export function Navbar({navMenus}) {
  const styles = twStyles();
  
  const [isOpen, setOpen] = useState(false)

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


function twStyles() {
  return ({
    Nav: {
      common: [
        'fixed top-0 z-30 overflow-hidden',
        'w-full lg:h-16',
        'lg:bg-white/70 backdrop-blur-md',
        'transition-all ease-in-out duration-500',
      ],
      state: {
        open: [
          'h-screen bg-white/90'
        ],
        close: [
          'h-16 bg-white/60 delay-150'
        ],
      },
    },
    Container: [
      'h-full'
    ],
    Wrapper: [
      'h-full flex flex-col',
      'lg:flex-row lg:justify-between lg:items-center',
    ],


    NavLogoHamburgerGroup: [
      'h-16 flex justify-between items-center flex-none'
    ],
    LogoWrapper: [
      'lg:w-48',
    ],
    Logo: [
      'w-fit h-14 lg:h-12 rounded-3xl hover:bg-primary-10/30'
    ],
    HamburgerWrapper: [
      'lg:hidden',
      'active:bg-primary-10 rounded-3xl'
    ],

    NavMenusWrapper: [
      'flex-none',
      'flex flex-col items-center',
      'lg:flex-row lg:justify-center',
      'pt-[calc((80vh-244px-82px)/2)]',
      'lg:pt-0',
    ],
    NavMenus: {
      common: [
        'text-body-2 text-center',
        'rounded-3xl rounded-bl-none',
        'hover:bg-primary-10',
        'active:bg-primary-10',
        'w-fit'
      ],
      mobile: [
        'px-12 py-4',
        'font-bold text-primary-90',
        'active:text-primary-90',
      ],
      desktop: [
        'lg:px-4 lg:py-2',
        'lg:font-medium lg:text-black',
        'lg:active:text-primary-50'
      ]
    },

    SocialLinksWrapper: [
      'flex justify-center mt-8',
      'lg:w-48 lg:justify-end lg:mt-0',

    ],
    SocialLinks: [
      'text-primary-90 lg:text-black',
      'rounded-full',
      'hover:bg-primary-10',
      'active:bg-primary-10'
    ],

    transition: {
      fadeInOutMenus: (isIn) => [
        isIn
          ? 'opacity-100 delay-200'
          : 'opacity-0',
        'transition-opacity duration-500',
        'lg:opacity-100',
      ]
    }
  })
}