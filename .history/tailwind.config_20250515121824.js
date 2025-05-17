/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'web-blue': '#1d2f6f',
        'web-yellow': '#fdc201'
      },
      boxShadow: {
        'web-shadow': '#abcbff08 0px 0.602187px 2.28831px 0px,'
      },
      padding: {
        'web-padding': '16px 28px'
      }, 
      lineHeight: {
        'webhero-line-height': '74.4px'
      }, 
      fontSize: {
        'webHe'
      }
    },
  },
  plugins: [],
}