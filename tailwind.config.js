

module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'platinum': '#eaeaea',
        'lavender': '#cbc5ea',
        'lilac': '#73628a',
        'spacecadet': '#313d5a',
        'gunmetal': '#183642',
        'charcoal': '#2d4853'
      },

      fontFamily: {
        // 'sans': ['Manrope'],
        'mono': ['Source Code Pro', 'SFMono-Regular']
      },
      

      height: {
        '500': '25rem',
      }

    },
    plugins: [],
  }

}