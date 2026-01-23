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
                'primary-dark': '#142F32',
                'accent-lime': '#E3FFCC',
                'secondary-dark': '#282930',
                'muted-grey': '#777C90',
                'page-bg': '#F5F7FA',
            },
            fontFamily: {
                sans: ['var(--font-manrope)', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '24px',
                DEFAULT: '16px',
            },
        },
    },
    plugins: [],
}
