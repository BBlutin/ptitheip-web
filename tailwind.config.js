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
    fontFamily: {
      'title': ['"Major Mono Display"', 'monospace'],
      'article': ['"Inknut Antiqua"', 'serif'],
      'serif': ['"Spectral"', 'serif'],
      'content': ['"Poppins"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
