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
        size: `w-full`,
        layout: 'fixed z-30',
        style: 'bg-white/70 backdrop-blur-md',
      })}
    >

        <Container>

            <div 
              className={tidyTw({
                size: 'h-16',
                layout: 'flex justify-between !items-center'
              })}
            >

                <div className="">
                  logo
                </div>

                <div className="hidden lg:flex">

                    {menus.map((menu, i) => (

                        <Link
                          key={i}
                          href={menu.url}
                          className="block h-full py-4 px-5 group"
                        >
                          
                            <span
                              className={tidyTw(`
                                text-body-2 
                                text-secondary-90
                                group-hover:text-accent-50
                              `)}  
                            >
                              {menu.name}
                            </span>

                        </Link>

                    ))}

                </div>

                <div className="hidden lg:flex">
                  icon
                </div>

                <div className="block lg:hidden">
                      
                    <div className="relative z-40">

                      <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen}
                      />

                    </div>

                </div>

            </div>

        </Container>

    </nav>

    <span
      role="circle-blur-shadow"
      className={tidyTw({
        size: 'w-80 h-80',
        style: 'bg-primary-30/50 rounded-[50%] blur-[50px]',
        layout: `
          fixed left-[calc(50%-160px)] top-[-250px] z-20
          == hidden 
          lg:block
        `,
      })}
    />

    </>
  )
}


                    /* 
                    <div className={`transition-size ease-in rounded-xl fixed top-0 right-0 bg-white/50 ${isOpen ? 'w-full' : 'w-0 '} h-screen `}>
                    </div>

                    <div className={`transition-size ease-in rounded-xl fixed top-0 right-0 bg-primary-10 ${isOpen ? 'w-2/3' : 'w-0 '} h-screen `}>
                    </div> */