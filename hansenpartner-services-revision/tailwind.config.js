/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        dailyregular: ['regular'],
        karlaregular: ['karlaregular'],

      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
}