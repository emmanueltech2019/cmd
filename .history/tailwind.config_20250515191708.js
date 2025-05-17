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
        'web-navwhite': '#f3f5f8',
        'web-navgray': '#646e7d',
        'web-default': '#e8f1ff'
      },
      boxShadow: {
        'web-shadow': '#abcbff08 0px 0.602187px 2.28831px 0px,'
      },
      padding: {
        'web-btn-padding': '16px 28px',
        'web-nav-padding': '10px',
        'web-heroslideview': '10px 14px',
        'web-card': '13px'
      }, 
      lineHeight: {
        'webhero-lineheight': '74.4px'
      }, 
      fontSize: {
        'webhero-font': '62px',
        'websubhero-font': '18px',
        'web-navfontsize': '14px'
      },
      width: {
        'web-navwidth': '900px',
        'web-logowidth': '130px',
      },
      height: {
        'web-navheight': '76px',
        'web-logoheight': '56px'
      },
      borderRadius: {
        'web-radius': '99px',
        'web-navbtnradius': '8px',
        'web-heroslideradius': '7px',
        'web-cardradius': '24px'
      },
      gap: {
        'web-navgap': '12px'
      },
      fontFamily: {
        myFont: ['Onset']
      },
      keyframes: {
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      keyframes: {
        'rotate': {
          
        }
      },
      animation: {
        'slide': 'slide 30s linear infinite',
      },
    },
  },
  plugins: [],
}