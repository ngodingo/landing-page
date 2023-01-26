
const styles = {
  Project: {
    Wrapper: [
      'py-8 lg:py-16'
    ],
    Date: [
      'font-medium text-secondary-30',
      'text-body-4 lg:text-body-3'
    ],
    Title: [
      'font-semibold text-secondary-90',
      'text-heading-3 lg:text-heading-1',
      'mt-1',
    ],
    Desc: [
      'font-regular text-secondary-30',
      'text-body-3 lg:text-body-2',
      'mt-4'
    ],
    Info: {
      GroupWrapper: [
        'flex flex-row lg:flex-col gap-5',
        'mt-5 lg:mt-8'
      ],
      Title: [
        'block w-full',
        'font-medium text-secondary-50',
        'text-body-4 lg:text-body-3 lg:text-right'
      ],
      Desc: [
        'font-medium text-secondary-30',
        'text-body-4 lg:text-body-3 lg:text-right'
      ]
    },
    Image: {
      Main: [
        'w-full rounded-3xl object-cover',
        'aspect-[3/4] [@media(min-width:540px)]:aspect-video',
        'bg-primary-10',
        'mt-6 sm:mt-8'
      ],
      SecondaryWrapper: [
        'grid grid-cols-2 [@media(min-width:540px)]:grid-cols-3',
        'gap-x-4 lg:gap-x-5',
        'mt-4 lg:mt-5'
      ],
      Secondary: [
        'aspect-square rounded-3xl object-cover',
        'last:hidden [@media(min-width:540px)]:last:block',
        'bg-primary-10'
      ],
    }
  },
  Button: [
    'mt-8 m-auto'
  ]
}

export default styles