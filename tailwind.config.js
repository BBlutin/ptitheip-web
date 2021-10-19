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
      },
      keyframes: {
        float: {
          '0%, 100%': {  transform: 'translate(0,-10px)' },
          '50%': { transform: 'translate(0,10px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
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
