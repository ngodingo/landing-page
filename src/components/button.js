import Link from "next/link"


export function Button ({text, href, theme, className}) {

  const btnTheme = {
    primary: 'bg-primary-50 border-2 border-primary-50 text-white hover:border-primary-90 hover:shadow-[4px_4px] hover:shadow-primary-90',
    secondary: 'border-2 border-primary-50 text-primary-50 hover:shadow-[4px_4px] hover:shadow-primary-50'
  }

  const defaultClassName = 'block w-content h-12 px-6 py-2.5 rounded-3xl font-lexend-deca font-body-2 font-bold box-border mt-1 ml-1 hover:m-0 hover:mb-1 hover:mr-1 duration-[50ms]'

  function getBtnTheme () {
    switch (theme) {
      case 'primary':
        return btnTheme.primary
      case 'secondary':
        return btnTheme.secondary
      default:
        return;
    }
  }

  return (
    <div>
      <Link 
        href={href} 
        className={`${defaultClassName} ${getBtnTheme()} ${className}`} >
          {text}
      </Link>
    </div>
  )
}