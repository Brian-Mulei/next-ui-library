/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
     extend:{colors: {
      primary: "#2563eb",
      secondary: "#9333ea",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
      neutral: "#374151",
    }},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}