module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#007bff',
        'tech-purple': '#6f42c1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}