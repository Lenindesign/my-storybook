// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}', // Add this line to include Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
