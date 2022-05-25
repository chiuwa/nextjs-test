module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  
  ],
  theme: {
    extend: {     
       height: {
      '128': '608px'
    },
    colors: {
      'ling-greed': '#8dbd8d'
    }
   },
  },
  plugins: [
    require('flowbite/plugin')
]
}
