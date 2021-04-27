module.exports = {
  purge: [
    +     './components/**/*.{vue,js}',
    +     './layouts/**/*.vue',
    +     './pages/**/*.vue',
    +     './plugins/**/*.{js,ts}',
    +     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'moduranavy': '#0D1A41',
        'accentpurp': '#7454FB',
        'backgroundwhite': '#FAF8F2',
        'sectionbeige': '#EBE8E0'
      }
    },
    fontFamily: {
      'display': ['Dosis', 'Sans-serif']
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
