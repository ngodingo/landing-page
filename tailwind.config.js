/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/components/**/*.{js,ts,jsx,tsx}",
    "./common/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": ["var(--font-lexend-deca)"],
      },
      fontSize: {
        // display
        "display-1": ["64px", "150%"],
        "display-2": ["48px", "150%"],
        "display-3": ["44px", "150%"],
        // heading
        "heading-1": ["40px", "140%"],
        "heading-2": ["36px", "140%"],
        "heading-3": ["32px", "140%"],
        "heading-4": ["24px", "140%"],
        // body
        "body-1": ["20px", "180%"],
        "body-2": ["16px", "180%"],
        "body-3": ["14px", "180%"],
        "body-4": ["12px", "180%"],
      },
      colors: {
        // ocean blue
        primary: {
          10: "#E9EAFB",
          30: "#5C61D6",
          50: "#4045BF",
          70: "#3D408F",
          90: "#262973",
        },
        // independence
        secondary: {
          10: "#9BA0B1",
          30: "#70788F",
          50: "#4D5363",
          70: "#333D4D",
          90: "#1D2430",
        },
        // pear
        accent: {
          10: "#E8E47D",
          30: "#D6D25C",
          50: "#D2CC2D",
          70: "#ADA81F",
          90: "#8A850F",
        },
        // spanish grey
        neutral: {
          10: "#CCCCCC",
          30: "#B3B3B3",
          50: "#999999",
          70: "#808080",
          90: "#666666",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
