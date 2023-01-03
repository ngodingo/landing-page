/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['var(--font-lexend-deca)']
      },
      fontSize: {
        'display-1': ['64px', '150%'],
        'display-2': ['48px', '150%'],
        'display-3': ['44px', '150%'],
        'heading-1': ['40px', '140%'],
        'heading-2': ['36px', '140%'],
        'heading-3': ['32px', '140%'],
        'body-1':    ['20px', '180%'],
        'body-2':    ['16px', '180%'],
        'body-3':    ['14px', '180%'],
        'body-4':    ['12px', '180%'],
      },
      colors: {
        primary: {
          10: '#9396EC',
          30: '#5C61D6',
          50: '#4045BF',
          70: '#3D408F',
          90: '#262973',
        },
        secondary: {
          10: '#9BA0B1',
          30: '#70788F',
          50: '#4D5363',
          70: '#333D4D',
          90: '#1D2430',
        },
        accent: {
          10: '#E8E47D',
          30: '#D6D25C',
          50: '#D2CC2D',
          70: '#ADA81F',
          90: '#8A850F',
        },
        neutral: {
          10: '#CCCCCC',
          30: '#B3B3B3',
          50: '#999999',
          70: '#808080',
          90: '#666666',
        },

      }
    },
  },
  plugins: [],
}
