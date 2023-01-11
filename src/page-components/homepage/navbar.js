import { useState } from "react"


import Link from "next/link"
import { Container } from "../../components/layout"
import { tidyTw } from "../../utilts/tidy-tailwind"


export function Navbar () {
  const [isOpen, setOpen] = useState(false)

  const menus = [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Blog',
      url: '#blog',
    },
    {
      name: 'Portfolio',
      url: '#portfolio',
    },
    {
      name: 'Contact',
      url: '#contact',
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
        layout: 'fixed z-30',
        style: 'bg-white/70 backdrop-blur-md',
      })}
    >

        <Container>

            <div 
              className={tidyTw({
                size: 'h-16',
                layout: 'flex justify-between'
              })}
            >

                <div className="h-full">
                  logo
                </div>

                <div className="h-full hidden lg:flex">

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

                <div className="h-full hidden lg:flex">
                  icon
                </div>

                <div className="h-full flex lg:hidden">
                  mobile nav
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