import styles from "./Button-style"

import Link from "next/link"
import { ttw } from "../../../utilts/tidyTailwind/ttw"


export function Button ({variant, className, children, ...props}) {

  const attr = {
    wrapper: {
      className: ttw(className, styles.Wrapper)
    },
    button: {
      className: ttw(styles.Button.common, getKind(variant, styles.Button.variant)),
      ...props
    },
  }

  return (
    <div {...attr.wrapper}>
      <Link {...attr.button}>
        <span>
          {children}
        </span>
      </Link>
    </div>
  )
}








// utilts
function getKind (value, source) {

  for (var key in source) {
    if (key === value) {
      return source[key]
    }
  }
  
  return Object.values(source)[0]
}