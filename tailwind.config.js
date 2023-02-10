/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    'bg-blue-600',
    'hover:bg-blue-700',
    'bg-yellow-600',
    'hover:bg-yellow-700',
    'bg-red-600',
    'hover:bg-red-700',
    'bg-green-600',
    'hover:bg-green-700',
    'bg-gray-600',
    'hover:bg-gray-700',
    'text-white',
    'text-black'
  ]
}
