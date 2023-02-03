import styles from "./grid-style"
import { ttw } from "@utilts"


export function Grid ({className, children, ...props}) {

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