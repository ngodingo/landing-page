
export function Container ({id, className, children, fluid}) {

  const isFluidWidth = fluid
    ? 'w-full'
    : 'm-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

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



export function Col ({id, className, children}) {

  return (
    <div 
      id={id}
      className={className} >
        {children}
    </div>
  )
}




/*
  layout.js khusus untuk elemen layout

  
  Container
  - ada 2 tipe width (fluid dan default)

  Grid 
  - default width
  - default column breakpoints

  Col

  references: https://github.com/hymos-two/forzanove-beta/blob/main/components/grid.js
*/