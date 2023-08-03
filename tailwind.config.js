/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733', // Replace this with the desired primary color HEX code
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
