/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        "upward":"upward 1s ease-in-out",
        "downward":"downward 1s ease-in-out",
      },
      keyframes:{
        "downward":{
          "from" : {
            transform: "translateY(-100px)",
            opacity:"0%",
          },
          "to" : {
            transform: "translateY(0px)",
            opacity:"100%",
          },
        }, 
        "upward":{
          "from" : {
            transform: "translateY(100px)",
            opacity:"0%",
          },
          "to" : {
            transform: "translateY(0px)",
            opacity:"100%",
          },
        }
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins:['Poppins','sans-serif'],
    },
    colors: {
      'pblue':'#36b1fd',
      'dblue':'#023360',
      'lwhite':'#f8f8fa',
      'brown':'#aa9769',
      'black':'#0c0003',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}

