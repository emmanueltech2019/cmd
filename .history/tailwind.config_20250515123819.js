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
        'web-yellow': '#fdc201',
        'web-navwhite': '#fffc',
        'web-navfonts'
      },
      boxShadow: {
        'web-shadow': '#abcbff08 0px 0.602187px 2.28831px 0px,'
      },
      padding: {
        'web-btn-padding': '16px 28px',
        'web-nav-padding': '10px'
      }, 
      lineHeight: {
        'webhero-line-height': '74.4px'
      }, 
      fontSize: {
        'webhero-font': '62px',
        'websubhero-font': '18px',
      },
      width: {
        'web-navwidth': '900px'
      },
      height: {
        'web-navheight': '76px'
      },
      borderRadius: {
        'web-radius': '99px'
      }
    },
  },
  plugins: [],
}