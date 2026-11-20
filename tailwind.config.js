import daisyui from "daisyui";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (Bold Blue / Light Blue / Soft White / Jet Black)
        ink: { DEFAULT: '#0D0D0D', 900: '#08080A', 800: '#111114', 700: '#17171C' },
        bold: { DEFAULT: '#1E46DB', 600: '#1A3BBF', 400: '#3B63F0' },
        sky: { DEFAULT: '#67BAF4' },
        soft: { DEFAULT: '#FAFAFA' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(.2,.7,.2,1) forwards',
        float: 'float 6s ease-in-out infinite',
        breathe: 'breathe 7s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["dark"] },
};
