
const styles = {
  Main: {
    Container: [
      'max-w-md md:max-w-none mx-auto',
      // 'divide-y'
    ],
    List: {
      Container: [
        'block py-6 md:py-8',
        'flex flex-col gap-y-3 md:gap-y-4',
        'group',
      ],
      Group: {
        Wrapper: [
          'flex flex-nowrap items-center gap-x-3',
          'w-full overflow-hidden',
          'font-light text-secondary-30',
          'text-body-4 md:text-body-3',
          'relative'
        ],
        Overflow: [
          'absolute right-0 w-8 h-full',
          'bg-gradient-to-r from-white/10 to-white'
        ],
        AuthorImage: [
          'w-6 h-6 rounded-full bg-secondary-10',
        ],
        AuthorName: [
          'flex-none'
        ],
        Tags: [
          'text-primary-30 flex-none'
        ],
        Date: [
          'hidden md:inline'
        ],
        Divider: [
          'w-1 h-1 rounded-full bg-secondary-30 flex-none'
        ]
      },
      Title: [
        'font-medium text-secondary-90',
        'text-body-2 md:text-heading-4',
        'group-hover:underline group-hover:decoration-secondary-10',
        'group-active:underline group-active:decoration-primary-30/50 group-active:text-primary-30'
      ],
      Excerpt: [
        'font-light text-secondary-30 !line-clamp-2',
        'text-body-2',
        'hidden md:inline'
      ]
    }
  },
  Sidebar: {
    Container: [
      'flex flex-col',
      'px-10 py-8',
      'border-l border-secondary-10',
      'sticky top-24'
    ],
    Title: [
      'font-medium text-primary-90',
      'font-body-2',
      'pb-6'
    ],
    List: {
      Container: [
        'block py-6',
        'flex flex-col gap-y-4',
        'group'
      ],
      Title: [
        'font-medium text-secondary-90',
        'font-body-2',
        'group-hover:underline group-hover:decoration-secondary-10',
        'group-active:underline group-active:decoration-primary-30/50 group-active:text-primary-30'
      ]
    }
  },
};

export default styles