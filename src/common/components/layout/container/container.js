import styles from "./container-style"
import { ttw } from "@utilts"

export function Container ({id, className, children, fluid, role, ...props}) {

  const attr = {
    Container: {}
  }

  attr.Container.id = 'container'
  attr.Container.className = ttw([
    className,
    fluid 
      ? styles.Container.size.fluid 
      : styles.Container.size.default
  ])

  return (
    <div {...attr.Container}>
      {children}
    </div>
  )
}