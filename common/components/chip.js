import { ttw } from "common/utils"


export function Chip () {
  const styles = twStyles();

  return (
    <button className={ttw(styles.Chip)}>
      chip
    </button>
  )
}

function twStyles() {
  return ({
    Chip: {
      common: [
        'w-fit px-4 h-8 rounded-2xl',
        'font-normal text-body-3',
        'border'
      ],
      state: {
        checked: [

        ],
        unchecked: [

        ]
      },

      enable: [
        'text-primary-50 bg-white border-primary-10'
      ],
      disable: [
        'disabled:text-neutral-30 disabled:bg-white disabled:border-primary-10'
      ],
      hover: [
        'hover:text-primary-50 hover:bg-primary-10 hover:border-primary-10'
      ],
      active: [
        'active:text-primary-10 active:bg-primary-50 active:border-primary-50'
      ],
    }
  })
}