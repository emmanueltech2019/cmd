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
        'web-navfontsize': '14px'
      },
      width: {
        'web-navwidth': '900px',
        'web-logowidth': '130px'
      },
      height: {
        'web-navheight': '76px',
        'web-logoheight': '56px'
      },
      borderRadius: {
        'web-radius': '99px',
        'web-navbtnradius': '8px'
      },
      gap: {
        'web-navgap': '12px'
      },
      fontFamily: {
        myFont
      }
    },
  },
  plugins: [],
}