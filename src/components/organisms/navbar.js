// hooks
import { useState } from "react"

// components
import Link from "next/link"
import { Spin as Hamburger } from "hamburger-react"
import { Container } from "../atoms/layout"
import { tidyTw } from "../../utilts/tidy-tailwind"

import GithubIcon from "../../assets/icons/githubIcon"
import InstagramIcon from "../../assets/icons/instagramIcon"
import TwitterIcon from "../../assets/icons/twitterIcon"


export function Navbar () {

  const [isOpen, setOpen] = useState(false)

  const menus = [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Portfolio',
      url: '/#portfolio',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ]

  const socials = [
    {
      name: 'instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com/ngodingo.id',
    },
    {
      name: 'twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/ngodingo_id',
    },
    {
      name: 'github',
      icon: GithubIcon,
      url: 'https://github.com/ngodingo',
    }
  ]

  return (
    <>

    <nav 
      className={tidyTw({
        size: 'w-full',
        layout: 'fixed z-30 overflow-hidden',
        style: 'lg:bg-white/70 backdrop-blur-md',
        transition: {
          color: isOpen ? 'bg-white delay-150' : 'bg-white/70',
          prop: 'transition-color ease-in-out duration-500'
        },
      })}
    >

        <Container>

            <div 
              className={tidyTw({
                size: 'h-16',
                layout: 'flex justify-between items-center'
              })}
            >

                <div className="font-bold text-medium">
                  [O] logo
                </div>

                <div className="hidden lg:flex">

                    {menus.map((menu, i) => (

                    <Link
                      key={i}
                      href={menu.url}
                      className={tidyTw({
                        layout: 'block py-4 px-5',
                        typography: `
                          text-body-2 
                          text-black
                          hover:text-accent-50
                          active:text-primary-50
                        `,
                      })}
                    >
                      {menu.name}
                    </Link>

                    ))}

                </div>

                <div className="hidden lg:flex">
                  
                    {socials.map((social, i) => (

                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      className={tidyTw({
                        size: 'w-12 h-12',
                        layout: 'grid place-items-center',
                        style: `
                          text-black
                          hover:text-accent-50
                          active:text-primary-50
                        `
                      })}
                    >
                      <social.icon />
                    </a>

                    ))}

                </div>

                <div className="block lg:hidden">

                    <Hamburger 
                      toggled={isOpen} 
                      toggle={setOpen}
                    />

                </div>

            </div>

        </Container>

        <Container 
          fluid 
          role="mobile-nav-menus-container"
          className={tidyTw({
            layout: `lg:hidden overflow-auto`,
            transition: {
              slideY: isOpen ? 'h-[calc(100vh-64px)]' : 'h-0 delay-100',
              prop: 'transition-all ease-in-out duration-500'
            },
          })}
        >

            <div 
              className={tidyTw({
                size: 'h-full max-h-[640px]',
                layout: 'flex flex-col justify-center items-center',
                transition: {
                  fadeInOut: isOpen ? 'opacity-100 delay-300' : 'opacity-0',
                  prop: 'transition-opacity ease-linear duration-200',
                },
              })}
            >
              
                <div 
                  role="nav-menus-wrapper"
                  className="flex flex-col items-center "
                >

                    {menus.map((menu, i) => (

                    <Link
                      key={i}
                      href={menu.url}
                      onClick={() => setOpen(state => !state)}
                      className={tidyTw({
                        size: 'w-max',
                        layout: 'p-5',
                        typography: `
                          text-body-2 font-bold text-center
                          text-primary-90
                          hover:underline
                          active:text-primary-50
                        `,
                      })}
                    >
                      {menu.name}
                    </Link>

                    ))}

                </div>                

                <div 
                  role="social-icons-wrapper"
                  className="flex gap-x-2 mt-12"
                >

                    {socials.map((social, i) => (

                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      className={tidyTw({
                        size: 'w-12 h-12',
                        layout: 'grid place-items-center',
                        style: `
                          text-primary-90
                          active:text-primary-50
                        `
                      })}
                    >
                      <social.icon />
                    </a>

                    ))}
                  
                  
                </div>

            </div>

            <div 
              role="mobile-nav-bg-wrapper"
              className={tidyTw({
                size: 'w-full h-full ',
                layout: 'absolute bottom-0 -z-10 overflow-hidden grid place-items-center pt-16',
                transition: {
                  fadeInOut: isOpen ? 'opacity-80 delay-300' : 'opacity-0',
                  prop: 'transition-opacity ease-linear duration-500',
                },
              })}
            >

                <div
                  className={tidyTw({
                    size: 'min-w-full ',
                    layout: 'flex items-end gap-[20vw]',
                  })}
                >

                    <span 
                      role="blurred-circle" 
                      className={tidyTw({
                        size: `
                          == w-[80vw] h-[80vw]
                        `,
                        style: `
                          rounded-full
                          bg-accent-50/[.7] blur-[calc(80vw*0.15)]
                        `,
                        layout: 'mb-[15vh]'
                      })}
                    />

                    <span 
                      role="blurred-circle" 
                      className={tidyTw({
                        size: `
                          == w-[60vw] h-[60vw]
                        `,
                        style: `
                          rounded-full
                          bg-primary-50/[.5] blur-[calc(60vw*0.15)]
                        `,
                      })}
                    />

                </div>

            </div>

        </Container>

    </nav>

    <span
      role="circle-blur-shadow"
      className={tidyTw({
        size: `
          == w-32 h-32 
          lg:w-80 lg:h-80
        `,
        style: 'bg-primary-30/50 rounded-[50%] blur-[50px]',
        layout: `
          fixed z-20
          top-[-72px] left-[calc(50%-64px)]
          lg:top-[-250px] lg:left-[calc(50%-160px)] 
          `,
      })}
    />

    </>

  )
}