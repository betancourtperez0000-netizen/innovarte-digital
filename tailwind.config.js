export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px rgba(14, 165, 233, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.14), transparent 25%)',
      },
      colors: {
        surface: '#020617',
        surfaceSoft: '#081728',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
