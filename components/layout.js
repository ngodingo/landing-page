
export function Section ({id, className, children}) {

  const defaultClassName = 'w-full'

  return (
    <section 
      id={id}
      className={defaultClassName + className} >
        {children}
    </section>
  )
}


export function Container ({id, className, children, fluid}) {

  const isFluidWidth = fluid
    ? 'w-full'
    : 'sm:max-w-[620px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

  return (
    <div 
      id={id}
      className={isFluidWidth + className} >
        {children}
    </div>
  )
}


export function Grid ({id, className, children, cols}) {

  const defaultClassName = `w-full grid grid-cols-${cols}`

  return (
    <div
      id={id}
      className={defaultClassName + className} >
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

  cols
  kolom pada grid bernilai 1-12



  references: https://github.com/hymos-two/forzanove-beta/blob/main/components/grid.js
*/