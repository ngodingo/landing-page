import { ttw } from "common/utils"

export function Grid ({className, children, ...props}) {
  const styles = twStyles()

  const attr = {
    Grid: {}
  }

  attr.Grid.id = 'grid-row'
  attr.Grid.className = ttw([
    className,
    styles.Grid.common
  ])

  return (
    <div {...attr.Grid} {...props}>
      {children}
    </div>
  )
}

function twStyles () {
  return ({
    Grid: {
      common: [
        'grid',
        'grid-cols-4 md:grid-cols-8 lg:grid-cols-12',
        'gap-x-4 xl:gap-x-5', 
      ]
    }
  })
}