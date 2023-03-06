
const styles = {
  Pagination: {
    Wrapper: [
      'flex justify-center',
    ],
    Group: [
      'flex gap-x-2'
    ],
    Button: {
      common: [
        'w-12 h-12 rounded-md',
        'grid place-items-center',
      ],
      state: {
        normal: [
          'border-2 border-primary-10 text-primary-50',
          'hover:bg-primary-10 hover:border-primary-10 hover:text-primary-50',
          'active:bg-primary-50 active:border-primary-50 active:text-white',
        ],
        active: [
          'bg-primary-50 border-primary-50 text-white',
        ]
      }
    }
  }
}

export default styles;