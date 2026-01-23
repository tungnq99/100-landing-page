/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'text-jungle': '#063226',
                'primary-green': '#0D5E46',
                'highlight-lime': '#C9F47F',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '6px',
                'md': '6px',
            },
        },
    },
    plugins: [],
}
