const styles = {
  Wrapper: {
    common: 'w-max h-max rounded-3xl group hover:cursor-pointer'
  },
  Button: {
    common: [
      'font-body-2 font-bold',
      'w-full min-w-[48px] min-h-[48px] px-4 py-2 rounded-3xl',
      'relative flex items-center',
      'group-hover:-top-1 group-hover:-left-1 group-hover:shadow-[4px_4px]',
      'group-active:top-0 group-active:left-0 group-active:shadow-none',
    ],
    variant: {
      primary: [
        'bg-primary-50 text-white border-2 border-primary-50',
        'group-hover:shadow-primary-90 group-hover:border-primary-90',
        'group-active:bg-transparent group-active:text-primary-90',
      ],
      secondary: [
        'text-primary-50 border-2 border-primary-50',
        'group-hover:shadow-primary-50',
        'group-active:bg-primary-50 group-active:text-white',
      ],
    },
  },
}

export default styles