module.exports = {
  content: ["./**/*.{html, js}", "./src/**/*.js", "./src/components/**/*.jsx"],
  
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            lineHeight: '1.5',
          },
        },
      },
      screens: {
        'tall': { 'raw': '(max-height: 825px)' },
        // => @media (min-height: 825px) { ... }
      }
    },
  },
}
