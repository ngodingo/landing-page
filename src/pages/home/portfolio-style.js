
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
        'w-full rounded-3xl',
        'bg-primary-10',
        'aspect-[3/4] [@media(min-width:540px)]:aspect-video object-cover',
        'mt-8',
      ],
      Secondary: [
        'w-full rounded-3xl',
        'bg-primary-10',
        'aspect-square object-cover',
      ],
      SecondaryGrid: [
        'grid grid-cols-2 [@media(min-width:540px)]:grid-cols-3',
        'gap-x-4 lg:gap-x-5 gap-y-4',
        'mt-4 lg:mt-5',
        'h-[calc((100vw-56px)/2)] [@media(min-width:540px)]:h-auto overflow-hidden'
      ]
    }
  },
  Button: [
    'mt-8 m-auto'
  ]
}

export default styles