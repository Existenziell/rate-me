// https://tailwindcss.com/docs/configuration

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  // Where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
  theme: {

    extend: {

      colors: {
        'brand-lighter': 'var(--color-brand)',
        'brand': 'var(--color-brand)',
        'brand-dark': 'var(--color-brand)',
      },

      backgroundImage: theme => ({
        'cozumel': "url('/icons/cozumel.png')"
      }),

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      textColor: {
        'gray-999': '#999',
      },
    },
  },

  // Lets you control which variants are generated for each core utility plugin.
  variants: {
    extend: {},
  },

  // Allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.
  plugins: [],
}
