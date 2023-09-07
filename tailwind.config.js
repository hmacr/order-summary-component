import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      'pale-blue': {
        300: 'hsl(225, 100%, 94%)',
        500: 'hsl(225, 100%, 98%)',
      },
      'bright-blue': 'hsl(245, 75%, 52%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
    },
    fontFamily: {
      'Red-Hat-Display': ['Red Hat Display', ...defaultTheme.fontFamily.serif],
    },
  },
};
