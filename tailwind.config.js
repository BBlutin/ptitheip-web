module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/bg-home.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
