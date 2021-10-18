module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/bg-home.jpg')",
      },
      boxShadow: {
        'card': '5px 8px 15px 5px rgba(60, 60, 60, 0.1)',
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
