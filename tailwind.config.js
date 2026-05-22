// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, 
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        brand: {
          light: '#E0F2FE',     
          DEFAULT: '#007FFF',   
          dark: '#0059B2',      
          accent: '#F59E0B',    
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 127, 255, 0.4)', 
      }
    },
  },
  plugins: [],
}