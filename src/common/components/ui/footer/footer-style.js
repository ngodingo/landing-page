
const styles = {
  Section: [
    'bg-primary-90 selection:bg-secondary-30'
  ],
  Title: [
    'font-semibold text-white',
    'text-heading-3 lg:text-heading-1',
    'text-center lg:text-left'
  ],
  Form: [
    'block mt-8 lg:mt-0'
  ],
  Input: [
    'w-full',
    'bg-transparent border-2 rounded-3xl',
    'border-primary-30',
    'focus:border-white focus:outline-none',
    'text-body-2 font-normal text-white',
    'py-3 px-5',
  ],
  InputTextarea: [
    'mt-4 sm:overflow-hidden'
  ],
  Submit: [
    'w-full h-12',
    'block px-6 py-2.5 mt-2',
    'font-body-2 font-bold text-white',
    'rounded-3xl box-border bg-primary-50',
    'hover:scale-105 hover:cursor-pointer active:scale-100 duration-[50ms]'
  ],
  Wrapper: [
    'flex mt-8 lg:mt-0 gap-y-4',
    'flex-col-reverse items-center',
    'sm:flex-row sm:justify-between',
    'lg:flex-col lg:items-end',
  ],
  Logo: [
    'h-12 w-fit',
    'hidden lg:block'
  ],
  NavMenusWrapper: [
    'w-fit flex lg:flex-col'
  ],
  NavMenus: [
    'block py-1 px-3',
    'text-body-2',
    'text-primary-30',
    'hover:text-white',
    'active:text-white',
    'lg:text-end',
  ],
  SocialLinksWrapper: [
    'w-fit flex'
  ],
  SocialLinks: [
    'text-primary-10 rounded-full',
    'hover:bg-primary-70',
    'active:bg-primary-70',
  ],
  Copyright: [
    'h-12 bg-primary-90 border-t border-primary-70',
    'grid place-items-center',
    'px-5',
    'text-body-4 font-light text-primary-70 text-center',
  ]
}

export default styles