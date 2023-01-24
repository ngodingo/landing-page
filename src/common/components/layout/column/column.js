import { ttw } from "@utilts"

export function Column ({size, start, end, className, children, ...props}) {

  const attr = {
    Column: {}
  }

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