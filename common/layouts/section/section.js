import styles from "./section-style"
import { ttw } from "@utilts"


export function Section ({id, className, children, ...props}) {

  const attr = {
    Section: {}
  }

  attr.Section.id = id
  attr.Section.className = ttw([
    className, 
    styles.Section.common
  ])

  return (
    <section {...attr.Section} {...props}>
      {children}
    </section>
  )
}