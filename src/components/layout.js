import { tidyTw } from "../utilts/tidy-tailwind"


export function Section ({id, className, children}) {

  const twClassName = tidyTw({
    size: 'w-full',
    layout: `
      == py-9
      md:py-12
      lg:py-14
      xl:py-20
    `,
    custom: className,
  })

  return (
    <section 
      id={id} 
      className={twClassName} 
    >
      {children}
    </section>
  )
}


export function Container ({id, className, children, fluid}) {

  const containerWidth = {
    fluid: 'w-full',
    fixed: `
      container m-auto
      == px-5
      sm:px-5
      md:px-6
      lg:px-8
      xl:px-[70px]
      2xl:px-[198px]
    `,
  }

  function getLayout () {
    return fluid ? containerWidth.fluid : containerWidth.fixed
  }


  const twClassName = tidyTw({
    layout: getLayout(),
    custom: className,
  })

  return (
    <div 
      role="container" 
      id={id} 
      className={twClassName} 
    >
      {children}
    </div>
  )
}



export function Grid ({id, className, customGap, children}) {

  const twClassName = tidyTw({
    display: 'grid',
    colsCount: `
      == grid-cols-4
      md:grid-cols-8
      lg:grid-cols-12
    `,
    gap: !customGap && `
      == gap-x-4
      xl:gap-x-5
    `,
    custom: className,
  })

  return (
    <div 
      role="grid" 
      id={id} 
      className={twClassName} 
    >
      {children}
    </div>
  )
}



export function Col ({id, className, children}) {

  return (
    <div 
      role="column-grid" 
      id={id}
      className={className} 
    >
      {children}
    </div>
  )
}




/*
  layout.js
  
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