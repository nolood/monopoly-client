/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,tsx,jsx,ts}'],
  theme: {
    colors: {
      bgInput: '#323644',
      bgInputFocus: '#3d404b',
      textMain: '#ffffff',
      focusColor: '#1d90f5',
      bgMain: '#272a37',
      textSecondary: '#b3b4b9',
      error: '#FF4510',
    },
    extend: {
      boxShadow: {
        outline: '0px 0px 5px 1px #1d90f5',
        hover: '0px 5px 40px 1px #1d90f5',
        outlineError: '0px 0px 5px 1px #FF4510',
      },
    },
  },
  plugins: [],
};
