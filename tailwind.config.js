export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        brand: {
          light: '#E0F7FA',     // Very light teal
          DEFAULT: '#6DC0D5',   // THE LOGO TEAL
          dark: '#2C5F6D',      // Darker version for text/footers
          accent: '#F59E0B',    // Gold/Amber
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(109, 192, 213, 0.4)',
      }
    },
  },
  plugins: [],
}