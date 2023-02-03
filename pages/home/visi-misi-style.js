
const styles = {
  Title: [
    // common
    'font-semibold text-secondary-90 ',
    // base - md
    'text-center text-heading-3',
    // >= lg
    'lg:text-right lg:text-heading-1',
    'lg:bg-white lg:w-fit lg:pr-4',
    'lg:relative lg:-top-1.5'
  ],
  Lists: {
    Wrapper: [
      'flex relative',
      'pb-5 sm:pb-5 md:pb-6 lg:pb-14 xl:pb-18',
    ],
    Bullet: {
      Solid: [
        'w-8 h-8 lg:w-12 lg:h-12 rounded-full',
        'shrink-0 grow-0',
        'mr-4 lg:mr-5',
        'border-[3px] border-primary-50 bg-primary-50',
        'grid place-items-center',
        'font-semibold text-white text-body-3 lg:text-heading-4 '
      ],
      Border: [
        'w-8 h-8 lg:w-12 lg:h-12 rounded-full',
        'shrink-0 grow-0',
        'mr-4 lg:mr-5',
        'border-[3px] border-primary-50 bg-white',
      ]
    },
    Desc: [
      'font-normal text-secondary-50',
      'text-body-3 lg:text-body-2',
    ],
  },
  Dash: {
    Vertical: [
      'h-full absolute left-[15px] lg:left-[23px] -z-40',
      'border-l-[3px] border-dashed border-primary-30',
    ],
    Horizontal: [
      'w-full absolute md:top-[15px] lg:top-[23px] -right-5 -z-40',
      'border-t-[3px] border-dashed border-primary-30'
    ]
  }
}

export default styles