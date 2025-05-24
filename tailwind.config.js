/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    screens: {             // Extra small: up to 639px
      'sm': {'min': '0px', 'max': '767px'},  // Small: 640–767px
      'md': {'min': '768px', 'max': '1023px'}, // Medium: 768–1023px
      'lg': {'min': '1024px', 'max': '1279px'},// Large: 1024–1279px
      'xl': {'min': '1280px', 'max': '1535px'},// Extra large: 1280–1535px
      '2xl': {'min': '1536px'},    
      "2xl": '1536px' // 2X large screens
    },
  },
  plugins: [],
}