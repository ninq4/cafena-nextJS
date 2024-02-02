/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => max-width: 1535px { ... }
      
      'xl': {'max': '1279px'},
      // => max-width: 1279px { ... }
      
      'lg': {'max': '1023px'},
      // => max-width: 1023px { ... }
      
      'md': {'max': '768px'},
      // => max-width: 767px { ... }
      
      'sm': {'max': '639px'},
      // => max-width: 639px { ... }
      }
  },
  plugins: [],
};
