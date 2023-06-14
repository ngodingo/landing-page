import { ttw } from "common/utils"

export function Container ({id, className, children, fluid, role, ...props}) {
  const styles = twStyles()

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
    <div {...attr.Container} {...props}>
      {children}
    </div>
  )
}

function twStyles () {
  return ({
    Container: {
      size: {
        default: [
          'container m-auto',
          'px-5 md:px-6 lg:px-8 xl:px-[70px] 2xl:px-[198px]',
        ],
        fluid: 'w-full'
      }
    }
  })
}