/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  /* daisyui suggests adding the '@tailwindcss/typography' first then
    adding the daisyui */

    /* Plugins in Tailwind CSS allow you to extend the default 
    functionality of the framework by adding additional utility
     classes, components, or features. They provide a way to 
     include pre-designed styles and components that go beyond
      the core set of utilities provided by Tailwind. */
      
  plugins: [require('@tailwindcss/typography'),require('daisyui')],
}
