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
        'web-navwhite': '#FFFFFFBD',
        'web-navgray': '#646e7d',
        'web-default': '#e8f1ff',
        'web-lightblue': '#858f9d',
        'web-cardbgcolor': '#f1f4fa',
        'web-formcolor': '#f8fbff',
        'web-textblue': '#3a4261'
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
        'web-navfontsize': '14px',
        'web-contactformfont': '30px'
      },
      width: {
        'web-navwidth': '900px',
        'web-logowidth': '130px',
      },
      height: {
        'web-navheight': '76px',
        'web-logoheight': '56px',
        'web-videoheight': '309px'
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
        'rotate': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'translate': {
          '0%': {transform: 'translateY(50%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        'translateSubElement1': {
          '0%': {transform: 'translateY(50%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        'translateSubElement2': {
          '0%': {transform: 'translateY(50%)'},
          '100%': {transform: 'translateY(0%)'}
        },
      },
      animation: {
        'slide': 'slide 30s linear infinite',
        'rotate': 'rotate 5s linear infinite',
        'translate': 'translate 1s linear forwards',
        'translateSubElement1': 'translate 1s linear forwards .1s',
        'translateSubElement2': 'translate 1s linear forwards .2s',
      },
    },
  },
  plugins: [],
}