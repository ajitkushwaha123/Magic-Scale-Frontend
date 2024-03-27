/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9eaf2",
        btn : "#0d6efd",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'mainBg': "url('https://template.wphix.com/printx-prv/printx/assets/img/hero/hero-bg.png')",
        'zomato' : "url('https://tse3.explicit.bing.net/th?id=OIP.jwAHRmzHoGCK0yBYiQYzNgHaD4&pid=Api&P=0&h=180')",

        //

        'swiggy' : "url('https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png')",
        'magicPin' : "url('http://khabar4u.in/wp-content/uploads/2020/06/og-magicpin-icon.png')",
      },
      keyframes: {
        bounce : {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },

        spin : {
          '0%' : { 
            transform: 'rotate(0deg)',
          },
          '100%' : {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        bounce: 'bounce 3s infinite',
        slideTop : 'slideTop 4s ease-in-out ',
        spin : 'spin 20s infinite',
      }
    },
    screens: {
      as : "0px",
      xs: "480px",
      ss: "620px",
      km: "768px",
      sm :"952px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
}