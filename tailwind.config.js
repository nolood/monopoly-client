/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,jsx,ts}'],
  theme: {
    colors: {
      bgInput: '#323644',
      bgInputFocus: '#3d404b ',
      textMain: '#ffffff',
      focusColor: '#1d90f5',
      bgMain: '#272a37',
      textSecondary: '#b3b4b9',
    },
    extend: {
      boxShadow: {
        outline: '0px 0px 5px 1px #1d90f5',
      },
    },
  },
  plugins: [],
};
