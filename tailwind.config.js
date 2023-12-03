const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screen: {
      extends: {
        "400px":'400px'
      }
   
    },
    extend: {},
  },
  plugins: [],
});