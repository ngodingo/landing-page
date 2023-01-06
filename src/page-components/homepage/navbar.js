import { useState } from "react"


import Link from "next/link"
import { Container } from "../../components/layout"


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

  return (
    <nav className='fixed w-full z-10 bg-white/70 backdrop-blur-md'>
      <Container>
        <div className="flex w-full h-16 justify-between">
          <div className="h-full">
            logo
          </div>
          <div className="h-full flex">
            {menus.map(menu => (
              <Link
                href={menu.url}
                className="block h-full py-4 px-5 group" >
                <span className="text-body-2 text-secondary-90 group-hover:text-accent-50">
                  {menu.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="h-full flex">
            icon
          </div>
        </div>
      </Container>
    </nav>
  )
}