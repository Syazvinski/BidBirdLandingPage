/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f295a',
          dark: '#1a3a6b',
        },
        accent: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};

