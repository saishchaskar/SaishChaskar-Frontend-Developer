// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['hover'], // Enabling hover variant for text color
    },
  },
  plugins: [],
};
