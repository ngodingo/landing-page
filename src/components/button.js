import Link from "next/link"


export function Button ({text, href, theme, className}) {

  const btnTheme = {
    primary: {
      normal: 'bg-primary-50 border-2 border-primary-50 text-white',
      hover: 'group-hover:border-primary-90 group-hover:shadow-[4px_4px] group-hover:shadow-primary-90',
      active: 'group-active:bg-transparent group-active:text-primary-90 group-active:shadow-none'
    },
    secondary: {
      normal: 'border-2 border-primary-50 text-primary-50',
      hover: 'group-hover:shadow-[4px_4px] group-hover:shadow-primary-50',
      active: 'group-active:bg-primary-50 group-active:text-white group-active:shadow-none',
    }
  }

  const defaultClassName = {
    common: 'block h-12 px-6 py-2.5 rounded-3xl font-lexend-deca font-body-2 font-bold box-border duration-[50ms]',
    normal: 'mt-1 ml-1',
    hover: 'group-hover:m-0 group-hover:mb-1 group-hover:mr-1',
    active: 'group-active:m-0 group-active:mt-1 group-active:ml-1',
  }


  function getBtnTheme () {
    const {primary, secondary} = btnTheme

    switch (theme) {
      case 'primary':
        return `${primary.normal} ${primary.hover} ${primary.active}`
      case 'secondary':
        return `${secondary.normal} ${secondary.hover} ${secondary.active}`
      default:
        return;
    }
  }

  function getDefaultClassName () {
    const {common, normal, hover, active} = defaultClassName
    return `${normal} ${common} ${hover} ${active}`
  }


  return (
    <div className={`group w-max ${className}`}>
      <Link 
        href={href} 
        className={`${getDefaultClassName()} ${getBtnTheme()}`} >
          {text}
      </Link>
    </div>
  )
}