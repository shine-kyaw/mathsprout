/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#faf8f2', ink: '#183a3a', teal: '#2e6f6c', sage: '#b5c690',
        leaf: '#93b57d', sky: '#8dabc6', violet: '#8e7aa0',
      },
      fontFamily: { sans: ['Manrope', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'ui-sans-serif', 'system-ui'] },
      boxShadow: { soft: '0 14px 36px rgb(24 58 58 / 0.09)' },
    },
  },
  plugins: [],
}
