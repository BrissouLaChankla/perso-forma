/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lineClamp: {
        8: '8',
      },
      maxWidth: {
        'screen-xl': '1140px', // Personnalisation de max-w-screen-xl
      },
      animation: {
        marquee: "marquee 100s linear infinite"
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [daisyui],
}
