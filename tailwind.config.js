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
    },
  },
}
