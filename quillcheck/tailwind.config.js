/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('../src/assets/BG.png')",
      },
    },
  },
  plugins: [],
}

