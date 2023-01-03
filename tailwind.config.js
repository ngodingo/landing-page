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
    },
  },
  plugins: [],
}
