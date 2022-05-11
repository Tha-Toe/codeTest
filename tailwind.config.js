module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "white": '#ffffff',
        "black": "#000000",
        'purple': '#3f3cbb',
        'gray': '#6b7280',
        'lightGray': '#e5e7eb',
        'red': '#dc2626',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "blackRgba": 'rgba(0, 0, 0, 0.54)',
        "yellow": '#FFE917',
      },
    },
    screens: {
      '2xl' : {'max' : '1535px'},
      'xl' : {'max' : '1279px'},
      'lg' : {'max' : '1023px'},
      'md' : {'max' : '767px'},
      'sm' : {'max' : '639px'},
      'mobile' : {'max' : '350px'},
    },
  },
  plugins: [],
}
