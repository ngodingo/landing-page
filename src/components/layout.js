import { tidyTw } from "../utilts/tidy-tailwind"


export function Section ({id, className, children}) {
  return (
    <section 
      id={id} 
      className={tidyTw({
        layout: {
          bs: 'py-9',
          md: 'md:py-12',
          lg: 'lg:py-14',
          xl: 'xl:py-20',
        },
        custom: className,
      })}
    >
      {children}
    </section>
  )
}


export function Container ({id, className, children, fluid}) {

  const isFluidWidth = fluid
    ? 'w-full'
    : 'container m-auto px-5 sm:px-5 md:px-6 lg:px-8 xl:px-[70px] 2xl:px-[198px]'

  return (
    <div 
      id={id}
      className={`${isFluidWidth} ${className}`} >
        {children}
    </div>
  )
}



export function Grid ({id, className, children}) {

  const defaultClassName = `w-full grid`
  const defaultCols = 'grid-cols-4 md:grid-cols-8 lg:grid-cols-12'

  return (
    <div
      id={id}
      className={`${defaultClassName} ${defaultCols} ${className}`} >
        {children}
    </div>
  )
}



export function Col ({id, className, size, children}) {

  return (
    <div 
      id={id}
      className={`${className} ${size}`} >
        {children}
    </div>
  )
}




/*
  layout.js khusus untuk elemen layout
  
  Container
  - ada 2 tipe width (fluid dan default)
  - fluid
    - width : 100%
  - default
    - base : 100%, padding-x-20px
    - sm   : max 620
    - md   : max 720
    - lg   : max 960
    - xl   : max 1140

  Grid 
  - default width
  - jumlah kolom 4/8/12 menyesuaikan viewport 
    - base : 4
    - md   : 8
    - lg   : 12

  Col
  - kolom2 pada grid

  references: https://github.com/hymos-two/forzanove-beta/blob/main/components/grid.js


  tailwind viewport list (default)
  - sm: 640px  & higher
  - md: 768px  & higher
  - lg: 1024px & higher
  - xl: 1280px & higher

*/