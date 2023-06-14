import { ttw } from "common/utils"

export function Column ({size, start, end, className, children, ...props}) {

  const attr = {
    Column: {}
  }

  attr.Column.id = 'grid-col'
  attr.Column.className = ttw([
    className,
    size,
    start,
    end,
  ])

  return (
    <div {...attr.Column} {...props}>
      {children}
    </div>
  )
}