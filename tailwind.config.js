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
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [daisyui],
}
