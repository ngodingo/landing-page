
const styles = {
  Section: [
    'relative',
    'h-[85vh] min-h-[480px] max-h-[768px]',
  ],
  Container: [
    'h-full',
  ],
  Wrapper: [
    'h-full pt-16',
    'flex flex-col justify-center items-center'
  ],
  DisplayText: [
    'font-semibold text-secondary-90 text-center',
    'text-display-3 sm:text-display-2 md:text-display-1',
    'max-w-[400px] sm:max-w-none',
  ],
  ButtonGroup: [
    'flex flex-wrap justify-center gap-x-2 gap-y-2 mt-9',
  ],

  Background: {
    Container: [
      'w-full h-full',
      'absolute top-0 -z-40 overflow-hidden',
      'grid place-items-center',
    ],
    Wrapper: [
      'min-w-full',
      'flex justify-center md:tems-center',
    ],
    Circle1: [
      'w-48 h-48 md:w-56 md:h-56 rounded-full',
      'bg-primary-50/[.6] blur-2xl'
    ],
    Circle2: [
      'w-80 h-80 md:w-96 md:h-96 rounded-full',
      'bg-accent-50/[.6] blur-3xl'
    ]
  }
}

export default styles