import styles from "./button-style"
import Link from "next/link"
import { ttw } from "@utilts"


export function Button ({variant = 'primary', className, children, ...props}) {

  const attr = {
    Wrapper: {},
    Button: {},
  }

  attr.Wrapper.className = ttw([
    className,
    styles.Wrapper.common
  ])

  attr.Button.className = ttw([
    variant === 'primary' && styles.Button.variant.primary,
    variant === 'secondary' && styles.Button.variant.secondary,
    styles.Button.common
  ])

  return (
    <div {...attr.Wrapper}>
      <Link {...attr.Button} {...props}>
        <span>
          {children}
        </span>
      </Link>
    </div>
  )
}