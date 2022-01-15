module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        100: '#E5E7EB', // box borders
        200: '#CED0D4', // upvote/downvote
        300: '#A0A2A5', // dark outlines, sub-text
      },
      pink: {
        100: '#F5F0F1', // background color
      },
      'pri-white': '#ffffff',
      'pri-black': '#000000',
      'pri-red': '#9D1535', // main Stevens red
      'hyperlink': '#0645AD', // hyperlink blue
    },
    fontFamily: {
      'quicksand': ['quicksand']
    },
    extend: {},
  },
  plugins: [],
}
