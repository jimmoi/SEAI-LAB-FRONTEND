/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#1cff2fff',      // สีทอง มข.
        'kku-maroon': '#e91636ff',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}