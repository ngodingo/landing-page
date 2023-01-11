import Link from "next/link"
import { tidyTw } from "../utilts/tidy-tailwind"


export function Button ({text, href, theme, className}) {
  
  const wrapperTwClassName = tidyTw({
    common: 'w-max group p-0.5',
    custom: className,
  })

  const btnTwClassName = tidyTw({
    default: `
      block h-12 px-6 py-2.5 rounded-3xl font-body-2 font-bold box-border duration-[50ms]
      == mt-1 ml-1
      group-hover:m-0 group-hover:mb-1 group-hover:mr-1
      group-active:m-0 group-active:mt-1 group-active:ml-1
    `,
    theme: {
      primary: (theme === 'primary') && `
        == bg-primary-50 border-2 border-primary-50 text-white
        group-hover:border-primary-90 group-hover:shadow-[4px_4px] group-hover:shadow-primary-90
        group-active:bg-transparent group-active:text-primary-90 group-active:shadow-none
      `,
      secondary: (theme === 'secondary') && `
        == border-2 border-primary-50 text-primary-50
        group-hover:shadow-[4px_4px] group-hover:shadow-primary-50
        group-active:bg-primary-50 group-active:text-white group-active:shadow-none
      `,
    }
  })

  return (
    <div className={wrapperTwClassName}>
      <Link 
        href={href} 
        className={btnTwClassName}
      >
        {text}
      </Link>
    </div>
  )
}