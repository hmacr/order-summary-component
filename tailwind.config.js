import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      'pale-blue': {
        300: 'hsl(225, 100%, 98%)',
        500: 'hsl(225, 100%, 94%)',
      },
      'bright-blue': 'hsl(245, 75%, 52%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'Red-Hat-Display': ['Red Hat Display', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        'pattern-desktop': 'url("./images/pattern-background-desktop.svg")',
        'pattern-mobile': 'url("./images/pattern-background-mobile.svg")',
      },
    },
  },
};
