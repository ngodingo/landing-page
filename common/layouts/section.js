import { ttw } from "common/utils"

export function Section ({id, className, children, ...props}) {
  const styles = twStyles()

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

function twStyles () {
  return ({
    Section: {
      common: [
        'py-9 md:py-12 lg:py-14 xl:py-20',
        'scroll-mt-16',
      ]
    }
  })
}