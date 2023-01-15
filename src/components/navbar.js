// hooks
import { useState } from "react"

// components
import Link from "next/link"
import { Spin as Hamburger } from "hamburger-react"
import { Container } from "./layout"
import { tidyTw } from "../utilts/tidy-tailwind"



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
      name: '',
      icon: '',
      url: '',
    },
    {
      name: '',
      icon: '',
      url: '',
    },
    {
      name: '',
      icon: '',
      url: '',
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

                <div className="">
                  [O] ngodingo
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
                          text-secondary-90
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
                  icon
                </div>

                <div className="block lg:hidden">

                    <Hamburger 
                      toggled={isOpen} 
                      toggle={setOpen}
                    />

                </div>

            </div>

        </Container>

        <Container fluid 
          role="mobile-nav-menus-container"
          className={tidyTw({
            layout: `lg:hidden overflow-hidden`,
            transition: {
              slideDown: isOpen ? 'h-[calc(100vh-64px)]' : 'h-0 delay-100',
              prop: 'transition-all ease-in-out duration-500'
            },
          })}
        >

            <div 
              className={tidyTw({
                size: 'h-full max-h-[540px]',
                layout: 'grid place-items-center',
                transition: {
                  fadeInOut: isOpen ? 'opacity-100 delay-300' : 'opacity-0',
                  prop: 'transition-opacity ease-linear duration-200',
                },
              })}
            >
              
                <div className="flex flex-col items-center ">

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

            </div>

            <div className="w-20 h-20 bg-red-300 absolute right-[-5%] top-48 -z-10"></div>

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